export default function Footer() {
  return (
    <footer className="bg-[#002244] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        {/* About Alaska */}
        <div>
          <h3 className="font-bold mb-2">About Alaska</h3>
          <ul className="space-y-1">
            <li>Who we are</li>
            <li>Careers <sup>ⓘ</sup></li>
            <li>Newsroom <sup>ⓘ</sup></li>
            <li>Investor relations <sup>ⓘ</sup></li>
            <li>Legal</li>
            <li>Contract of carriage</li>
            <li className="font-bold">Privacy notice</li>
          </ul>
        </div>

        {/* Customer service */}
        <div>
          <h3 className="font-bold mb-2">Customer service</h3>
          <ul className="space-y-1">
            <li>Help center</li>
            <li>Feedback and complaints</li>
            <li>Travel advisories</li>
            <li>REAL ID</li>
            <li>Customer service commitment</li>
            <li>Canada - air travel rights</li>
            <li>Tarmac delay plan</li>
            <li>Site map</li>
          </ul>
        </div>

        {/* Products and services */}
        <div>
          <h3 className="font-bold mb-2">Products and services</h3>
          <ul className="space-y-1">
            <li>Optional services and fees</li>
            <li>Corporate travel</li>
            <li>EasyBiz</li>
            <li>Travel agents</li>
            <li>Cargo <sup>↗</sup></li>
            <li>Gift certificates</li>
            <li>Travel insurance</li>
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





