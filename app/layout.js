import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
let home = "my home";
export const metadata = {
  title: home,
  description: "home page seo",
  charset: "utf-8",
  content: "iRail check available seats pnr route of all train at once",
  robots: "index, follow",
  alternates: {
    canonical: "https://localhost:3000",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="irail.png" />
    <link rel="canonical" href="https://irail.vercel.app/" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      {/* <meta name="theme-color" content="#000000" /> */}
      {/* <meta name="title" /> */}
      {/* <meta
        name="description"
        content="Check available seats of all class Plan your journey with ease by finding open train seats across various routes Fast and reliable train seat checker"
    />
    <meta
      name="keywords"
      content="find available seats, real-time train availability,train seat availability, check train availability, train seat reservation, available train tickets, train seat checker, train booking system,rail, train, seat, tatkal, general ,available, waiting, ticket, railway, station, from, to, gadi, rac, cnf, wl, train ticket, trains, irail, erail, online ticket, online train, plateform, indian railway, railway,train seat availability, seat reservation"
    /> */}
      {/* <meta name="robots" content="index, follow"/> */}
      {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
      {/* <meta name="language" content="English"/> */}
      {/* <meta
      property="og:title"
      content="iRail | Train Seat Availability Checker"
    />
    <meta property="og:site_name" content="iRail" />
    <meta property="og:url" content="https://irail.in" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="Find available seats for your train journey. Check availability of trains."
    />
      <meta property="og:image" content="/irailhome.png" /> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />


        {children}
        <Footer />
      </body>
    </html>
  );
}
