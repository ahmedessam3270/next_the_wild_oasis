"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,15}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");
  const updateData = { nationality, countryFlag, nationalID };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");
  revalidatePath("/account/profile");
}

export async function updateReservation(formData) {
  // 1. AUTHENTICATION
  // to ensure that there's a user loggedIn
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2. AUTHORIZATION
  // to fetch all the bookings that this guest have booked already and then map over it to list their Ids
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  // to get the Id of the reservation (being sent by the hidden input we make)
  // to use it to make sure that this reservation being edited is one of the users reservations
  const reservationId = Number(formData.get("reservationId"));

  // to make sure that this user is updating one of their reservations in the list and not others reservation
  if (!guestBookingIds.includes(reservationId)) {
    throw new Error("You are not allowed to delete this booking");
  }

  // to prepare the values that will get populated to the database
  const updatedFields = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // 3. MUTATION
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", reservationId)
    .select()
    .single();

  // 4.ERROR HANDLING
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  // 5. REVALIDATING AND REDIRECTING
  //    revalidating the path and also redirecting back to the reservations
  revalidatePath(`/account/reservations/edit/${reservationId}`);
  redirect("/account/reservations");
}

export async function deleteReservation(bookingId) {
  const session = auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings((await session).user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");
  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
