import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#400950] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        {/* About Alaska */}
        <div>
          <h3 className="font-bold mb-2">About Alaska</h3>
          <ul className="space-y-1">
            <HoverGradient>Who we are</HoverGradient>
            <HoverGradient>Careers <sup>ⓘ</sup></HoverGradient>
            <HoverGradient>Newsroom <sup>ⓘ</sup></HoverGradient>
            <HoverGradient>Investor relations <sup>ⓘ</sup></HoverGradient>
            <HoverGradient>Legal</HoverGradient>
            <HoverGradient>Contract of carriage</HoverGradient>
            <HoverGradient className="font-bold">Privacy notice</HoverGradient>
          </ul>
        </div>

        {/* Customer service */}
        <div>
          <h3 className="font-bold mb-2">Customer service</h3>
          <ul className="space-y-1">
            <HoverGradient>Help center</HoverGradient>
            <HoverGradient>Feedback and complaints</HoverGradient>
            <HoverGradient>Travel advisories</HoverGradient>
            <HoverGradient>REAL ID</HoverGradient>
            <HoverGradient>Customer service commitment</HoverGradient>
            <HoverGradient>Canada - air travel rights</HoverGradient>
            <HoverGradient>Tarmac delay plan</HoverGradient>
            <HoverGradient>Site map</HoverGradient>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Flight service</h3>
          <ul className="space-y-1">
            <HoverGradient href={"/delta"}>Delta Airline</HoverGradient>
            <HoverGradient href={"/united"}>United Airlines</HoverGradient>
            <HoverGradient href={"/jetblue"}>JetBlue Airline</HoverGradient>
            <HoverGradient href={"/spirit"}>Spirit Airlines</HoverGradient>
            <HoverGradient href={"/britishAirways"}>British Airways</HoverGradient>
            <HoverGradient href={"/americanAirlines"}>American Airline</HoverGradient>
            <HoverGradient href={"/hawaiianAirlines"}>Hawaiian Airlines</HoverGradient>
            <HoverGradient href={"/alaskaAirlines"}>Alaska Airlines</HoverGradient>
            <HoverGradient href={"/sunCountryAirlines"}>Sun Country Airlines</HoverGradient>
            <HoverGradient href={"/"}>PSA Airlines</HoverGradient>
          </ul>
        </div>

        {/* Products and services */}
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <ul className="space-y-1">
            <HoverGradient href={"/expedia"}>Expedia</HoverGradient>
            <HoverGradient href={"/bookingAboutPage"}>Booking</HoverGradient>
            <HoverGradient href={"/kiwi"}>Kiwi</HoverGradient>
            <HoverGradient href={"/gotogate"}>Gotogate</HoverGradient>
            {/* <HoverGradient>Easyflight<sup>↗</sup></HoverGradient>
            <HoverGradient>Mytrip</HoverGradient> */}
          </ul>
        </div>

        {/* Deals, Feedback, Mobile */}
        <div>
          <h3 className="font-bold mb-2">Get deals</h3>
          <p className="mb-3">✉️ Sign up now</p>
          <h3 className="font-bold mb-2">We care a lot</h3>
          <p className="mb-3">💬 Give feedback ↗</p>
          <h3 className="font-bold mb-2">Mobile</h3>
          <p>📱 Get the app</p>
        </div>

        {/* Social media */}
        <div>
          <h3 className="font-bold mb-2">Follow us ↗</h3>
          <div className="flex items-center space-x-4 text-xl">
            <span><img src="facebook.png" className="w-8 invert" /></span>
            <span><img src="twitter.png" className="w-8 invert" /></span>
            <span><img src="instagram.png" className="w-8 invert" /></span>
            <span><img src="youtube.png" className="w-10 invert" /></span>
          </div>
          <p className="mt-3">Shop our company store <sup>ⓘ</sup></p>
        </div>
      </div>

      {/* Popular destinations */}
      <div className="max-w-7xl mx-auto mt-12 text-sm">
        <h4 className="font-bold mb-2 text-white">Popular destinations</h4>
        <p className="text-white mb-4">
          All destinations | City to city routes | Flights to Hawaii | Flights to Seattle | Flights to San Francisco | Flights to Los Angeles | Flights to Las Vegas
        </p>

        <p className="text-gray-400 text-xs mt-2">
          ↗ Notice indicator that this external link may not follow the same accessibility or privacy policies as Alaska Airlines.
        </p>
        <p className="text-gray-400 text-xs mt-4">
          ⓘ Notice indicator to alert users that action will result in the browser opening a new tab or window.
        </p>
        <p className="text-gray-500 text-xs mt-4">
          © 2025 Alaska Airlines, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function HoverGradient({children ,href}) {
  return (
    <li><Link href={href || ""} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:font-semibold cursor-pointer">{children}</Link></li>

  );
}




