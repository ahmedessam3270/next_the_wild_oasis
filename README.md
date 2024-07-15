Certainly! Here is a README file for your GitHub repository using the information provided:

---

# Wild Oasis Hotel Management Application

Welcome to the Wild Oasis Hotel Management Application! This project was developed to manage all aspects of the Wild Oasis Hotel, a small boutique hotel with 8 luxurious wooden cabins. The application handles bookings, cabin information, and guest management through a user-friendly interface and a robust backend.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Project Overview

The Wild Oasis Hotel Management Application is designed to provide a seamless experience for both potential and actual guests. It allows guests to learn about the hotel, view and filter cabins, make reservations, manage their bookings, and maintain a profile.

## Features

- **Hotel Information:** Guests can learn all about the Wild Oasis Hotel.
- **Cabin Details:** Guests can get information about each cabin and see booked dates.
- **Cabin Filtering:** Guests can filter cabins by their maximum guest capacity.
- **Reservations:** Guests can reserve a cabin for a certain date range. New reservations are set to “unconfirmed” (booked but not yet checked in) as payments are made upon arrival.
- **Booking Management:** Guests can view all their past and future reservations, and update or delete reservations.
- **User Authentication:** Guests need to sign up and log in before they can reserve a cabin and perform any operation.
- **Profile Management:** Guests can set and update basic data about their profile to make check-in at the hotel faster.

## Technology Stack

- **Framework:** [NEXT.JS](https://nextjs.org/) - The most popular React meta-framework, handling routing, SSR, data fetching, and remote state management.
- **UI State Management:** [Context API](https://reactjs.org/docs/context.html) - Used for managing global UI state in the app.
- **Database/API:** [Supabase](https://supabase.io/) - Utilized for data management and API integration.
- **Styling:** [TailwindCSS](https://tailwindcss.com/) - A modern way of writing CSS, easily integrated into Next.js for responsive design.

## Installation

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/wild-oasis-hotel.git
   cd wild-oasis-hotel
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up Supabase:**
   - Create a project on Supabase and get your API keys.
   - Set up your database schema as per the requirements.
   - Add your Supabase keys to the environment variables.

4. **Run the application:**
   ```sh
   npm run dev
   ```

## Usage

Once the application is running, you can access it at `http://localhost:3000`. From there, you can explore the various features such as viewing cabin details, making reservations, and managing bookings.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards.

## Contact

For any questions or inquiries, please contact:
- Name: Ahmed Essam
- Email: ahmedessam201790@gmail.com

Thank you for checking out the Wild Oasis Hotel Management Application!

---

Feel free to modify any sections to better fit your project's specifics or to add more details as needed.
