"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/book", label: "Book" },
    { href: "/changeDate", label: "Change Date" },
    { href: "/cancelTicket", label: "Cancel Ticket" },
    { href: "/upgrade", label: "Upgrade" },
    { href: "/services", label: "Services" },
  ];

  const nav2 = [
    { href: "/delta", label: "Delta Air line" },
    { href: "/united", label: "United Airline" },
    { href: "/jetblue", label: "JetBlue Airline" },
    { href: "/spirit", label: "Spirit Airline" },
   
  ];

  return (
    <>
      <nav className="  bg-linear-65 bg-white to-gray-100 text-white px-4 py-2 border border-b-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center ">
          <Link
            href="/"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500"
          >
            Airline<span className="text-[#00478f80] rounded">In</span>
          </Link>
          <ul className="space-x-8 text-white hidden md:flex">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-fuchsia-600  ${
                    pathname === href
                      ? "text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500"
                      : "text-[#01426a]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="  bg-linear-65 bg-white to-gray-100 text-white px-4 py-3 shadow-xs sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-center items-center ">
          {/* <Link
            href="/"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500"
          >
            Airline<span className="text-[#00478f80] rounded">In</span>
          </Link> */}
          <ul className="space-x-8 text-white hidden md:flex">
            {nav2.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-fuchsia-600  ${
                    pathname === href
                      ? "text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500"
                      : "text-[#01426a]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
