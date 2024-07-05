import Link from "next/link";
import { auth } from "../_lib/auth";
export default async function Navigation() {
  const session = await auth();
  console.log(session);
  return (
    <nav className="z-10 text-sm md:text-xl">
      <ul className="flex gap-12 md:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors lg:flex lg:items-center lg:gap-4"
            >
              <img
                src={session?.user?.image}
                alt={session?.user?.name}
                className="h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="hidden lg:inline-block">
                {session?.user?.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
