import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">AirlineIn</h2>
          <p className="mt-2 text-sm text-gray-400">
            Your trusted travel partner in the skies.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact for Booking</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <strong>Email: </strong>
              <a
                href="mailto:booking@airlinein.com"
                className="text-blue-400 hover:underline"
              >
                booking@airlineinsupport.com
              </a>
            </li>
            <li>
              <strong>Phone: </strong>
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:underline"
              >
                +1 234 567 890
              </a>
            </li>
            <li>
              <strong>Office:</strong> 123 Skyway Ave, New York, NY
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-instagram mr-2"></i> Instagram
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 AirlineIn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;