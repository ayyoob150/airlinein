import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <main className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px]">
        <div className="flex justify-between gap-6 items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Booking.com
          </h1>
          <Image
            src="/assets/booking.png"
            alt="booking.com history"
            width={250}
            height={90}
            className="rounded h-[90px] w-[150px] sm:w-[250px] object-cover"
          />
        </div>

        <section className="mb-10">
          <p>
            Booking.com is a leading global travel platform that enables users
            to effortlessly search for and reserve a wide variety of travel
            services. These include accommodations, flights, car rentals,
            airport transfers, experiences, and bundled travel deals. Renowned
            for its massive selection of hotels and alternative lodging, the
            platform caters to travelers of all types and budgets.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Established:</strong> 1996, in Amsterdam, Netherlands
            </li>
            <li>
              <strong>Headquarters:</strong> Amsterdam, Netherlands
            </li>
            <li>
              <strong>Owned By:</strong> Booking Holdings Inc. (formerly The
              Priceline Group)
            </li>
            <li>
              <strong>Official Site:</strong> www.booking.com
            </li>
          </ul>
          <Image
            src="/assets/image/Booking.jpg"
            alt="JetBlue Fleet"
            width={300}
            height={300}
            className="w-full h-full object-cover mt-5 rounded-xl"
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Main Services</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Lodging:</strong> Access to millions of listings, from
              hotels and resorts to hostels, apartments, and villas.
            </li>
            <li>
              <strong>Air Travel:</strong> Book flights through integrated
              airline and partner connections.
            </li>
            <li>
              <strong>Vehicle Hire:</strong> Find rental cars with flexible
              pickup points, including airports and city centers.
            </li>
            <li>
              <strong>Airport Transfers:</strong> Reserve private transport to
              and from airports in advance.
            </li>
            <li>
              <strong>Local Attractions:</strong> Book activities, guided tours,
              and tickets for must-see sites worldwide.
            </li>
            <li>
              <strong>Travel Bundles:</strong> Convenient packages that combine
              flights, accommodations, and experiences.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Tools & Features</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Advanced Search Filters:</strong> Refine your search using
              criteria like price, amenities, ratings, and location.
            </li>
            <li>
              <strong>Real Reviews:</strong> Verified guest feedback to guide
              your booking decisions.
            </li>
            <li>
              <strong>Flexible Cancellations:</strong> Many properties allow
              free cancellation for added peace of mind.
            </li>
            <li>
              <strong>Genius Member Rewards:</strong> Earn perks and discounts
              for booking more often.
            </li>
            <li>
              <strong>Language Support:</strong> Available in over 40 languages
              for global accessibility.
            </li>
            <li>
              <strong>Mobile App:</strong> iOS and Android apps with
              mobile-exclusive deals and offline booking tools.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Genius Loyalty Program
          </h2>
          <p>The Genius program rewards returning customers with:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Exclusive savings of up to 20% on selected stays</li>
            <li>
              Complimentary upgrades, including room changes or free breakfasts
            </li>
            <li>Faster and more personalized customer support</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Revenue & Business Model
          </h2>
          <p>Booking.com operates mainly on a commission-based model, where:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Properties can list rooms for free</li>
            <li>
              A percentage (typically between 10–25%) is charged per successful
              booking
            </li>
            <li>
              For flights and other services, Booking.com earns through
              affiliate partnerships and markups.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Global Presence</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Listings:</strong> 28+ million places to stay
            </li>
            <li>
              <strong>Availability:</strong> More than 220 countries and regions
            </li>
            <li>
              <strong>Languages:</strong> Supports 40+ languages
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Competitors in the Market :
          </h2>
          <Image
            src="/assets/image/Booking-Competitors.jpg"
            alt="JetBlue Fleet"
            width={300}
            height={300}
            className="w-full h-full object-cover mt-5 mb-5 rounded-xl"
          />
          <ul className="list-disc list-inside">
            <li>
              <strong>Airbnb:</strong> Home-sharing and unique lodging
              experiences
            </li>
            <li>
              <strong>Expedia:</strong> Broad offerings including packages,
              flights, and hotel bookings
            </li>
            <li>
              <strong>Hotels.com:</strong> Hotel bookings and loyalty benefits
            </li>
            <li>
              <strong>Agoda:</strong> Strong presence in Asia
            </li>
            <li>
              <strong>Trip.com:</strong> China-based OTA expanding globally
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Customer Experience & Honest Review
          </h2>
          <p>
            Booking.com remains one of the most dependable and intuitive
            services for planning trips. Here's what makes it a standout:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Huge Range of Accommodation Choices:</strong> From luxury
              hotels to treehouses and castles
            </li>
            <li>
              <strong>Seamless Web and App Experience:</strong> Clean design,
              dynamic pricing, offline access
            </li>
            <li>
              <strong>Reliable Verified Reviews:</strong> Only guests who stayed
              can leave reviews
            </li>
            <li>
              <strong>Transparent Pricing:</strong> No hidden fees
            </li>
            <li>
              <strong>Flexible Booking:</strong> Many listings with free
              cancellation
            </li>
            <li>
              <strong>Complete Travel Services:</strong> Book flights, rentals,
              transfers, and activities
            </li>
            <li>
              <strong>Top-Notch Support:</strong> Fast, responsive help when
              needed
            </li>
            <li>
              <strong>Sustainable and Accessible Travel Options:</strong>{" "}
              Eco-certifications and accessibility filters
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Final Thoughts</h2>
          <p>
            Whether you're a solo backpacker or organizing a business trip,
            Booking.com brings simplicity, trust, and value. After countless
            successful bookings, it’s earned my loyalty—and my recommendation.
          </p>
        </section>
      </main>
      <div>
        <ContactSection name="Booking.com" isSide={true} />
      </div>
    </div>
  );
}
