import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
        <div className="flex justify-between gap-6 items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Hawaiian Airlines
          </h1>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Hawaiian_Airlines_logo_2017.svg/1200px-Hawaiian_Airlines_logo_2017.svg.png"
            alt="Hawaiian Airlines History"
            width={250}
            height={90}
            className="rounded h-[150px] w-[150px] sm:w-[280px] bg-white px-4 object-"
          />
        </div>
        <p className="text-lg mb-8">
          Hawaiian Airlines is more than just a means of travel—it's a cultural
          experience infused with the warmth, hospitality, and spirit of Hawaii.
          As the flag carrier of the State of Hawaii, Hawaiian Airlines is
          renowned for its exceptional service, on-time performance, and
          commitment to showcasing the unique charm of the islands from the
          moment you step onboard.
        </p>
        <Image
          src="/assets/image/hawaiian.jpeg"
          alt="Fleet Overview"
          width={1200}
          height={600}
          className="rounded-2xl shadow-md mt-5 mb-5 h-60"
        />
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📌 Basic Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Full Name:</strong> Hawaiian Airlines, Inc.
            </li>
            <li>
              <strong>IATA Code:</strong> HA
            </li>
            <li>
              <strong>ICAO Code:</strong> HAL
            </li>
            <li>
              <strong>Callsign:</strong> HAWAIIAN
            </li>
            <li>
              <strong>Founded:</strong> January 30, 1929
            </li>
            <li>
              <strong>Headquarters:</strong> Honolulu, Hawaii, United States
            </li>
            <li>
              <strong>Parent Company:</strong> Hawaiian Holdings, Inc.
            </li>
            <li>
              <strong>Main Hub:</strong> Daniel K. Inouye International Airport
              (HNL), Honolulu
            </li>
            <li>
              <strong>Secondary Hub:</strong> Kahului Airport (OGG), Maui
            </li>
            <li>
              <strong>CEO:</strong> Peter Ingram
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🌐 Route Network & Destinations
          </h2>
          <p className="mb-2">
            Hawaiian Airlines offers one of the most comprehensive networks
            between the U.S. mainland and Hawaii.
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>
              <strong>Key Domestic Routes:</strong> Honolulu ↔ Los Angeles, San
              Francisco, Las Vegas, Seattle, Portland, Phoenix, New York (JFK),
              Austin, Boston
            </li>
            <li>
              <strong>Inter-island routes:</strong> Honolulu ↔ Kahului, Lihue,
              Hilo, Kona
            </li>
            <li>
              <strong>International Destinations:</strong> Tokyo (Narita &
              Haneda), Osaka, Fukuoka, Seoul, Sydney, Brisbane, Auckland, Pago
              Pago, Papeete
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🛫 Fleet Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Airbus A330-200:</strong> 24 aircraft
            </li>
            <li>
              <strong>Airbus A321neo:</strong> 18 aircraft
            </li>
            <li>
              <strong>Boeing 717-200:</strong> 19 aircraft
            </li>
            <li>
              <strong>Upcoming:</strong> Boeing 787-9 Dreamliner
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🌺 Unique In-Flight Experience
          </h2>
          <p className="mb-2">
            Hawaiian Airlines goes above and beyond to immerse passengers in
            Hawaiian culture, even while flying.
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Hawaiian music, language, and in-flight videos</li>
            <li>Complimentary island-inspired meals and snacks</li>
            <li>Flight attendants wear traditional Aloha attire</li>
          </ul>
          <p>
            <strong>Cabin Classes:</strong> First Class / Business Class, Main
            Cabin, Main Cabin Basic
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🏆 Awards & Recognition
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>#1 U.S. Airline for On-Time Performance</li>
            <li>Top Safety Ratings from AirlineRatings.com</li>
            <li>Skytrax 4-Star Airline</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🌱 Sustainability Initiatives
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fuel-efficient aircraft</li>
            <li>Investment in sustainable aviation fuel</li>
            <li>Carbon offset and recycling programs</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🤝 Partnerships & Loyalty Program
          </h2>
          <p>
            <strong>HawaiianMiles:</strong> No blackout dates, miles never
            expire, redeemable for flights, upgrades, and more
          </p>
          <p className="mt-2">
            <strong>Codeshare Partners:</strong> JetBlue, Japan Airlines, Korean
            Air, Virgin Australia, American Airlines, Air New Zealand
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📈 Growth and Future Plans
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Launch of Boeing 787-9 Dreamliners</li>
            <li>New Asia-Pacific routes</li>
            <li>Upgraded lounges and digital booking</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            ✅ Why Choose Hawaiian Airlines?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Authentic Island Hospitality</li>
            <li>Industry-Leading On-Time Performance</li>
            <li>Modern Fleet & Onboard Services</li>
            <li>Expansive Route Network</li>
            <li>Award-Winning Service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📞 Contact & Booking
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Official Website:</strong> Accessible via their homepage
            </li>
            <li>
              <strong>Customer Service (U.S.):</strong> 1-800-367-5320
            </li>
            <li>
              <strong>Support:</strong> Online portal available
            </li>
            <li>
              <strong>Mobile App:</strong> Available on iOS & Android
            </li>
          </ul>
        </section>
        <h2 className="text-xl md:text-2xl font-bold  text-purple-700 mb-8">
          🌺 Hawaiian Airlines Review: Experience the True Spirit of Aloha in
          the Sky ✈️
        </h2>
        <p className="mb-6 text-lg">
          Hawaiian Airlines is not just a mode of air travel — it is an
          authentic extension of the Hawaiian experience, bringing island
          hospitality to every mile of your journey. As one of the oldest and
          most reliable carriers in the United States, Hawaiian Airlines
          delivers a rare blend of warmth, professionalism, and quality that
          leaves passengers consistently impressed.
        </p>
        <p className="mb-6 text-lg">
          Whether you're heading to the Hawaiian islands for a dream vacation,
          returning home, or connecting through the Pacific, Hawaiian Airlines
          offers a distinctive travel experience filled with comfort, culture,
          and class.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            ✨ A True Cultural Journey from Takeoff to Landing
          </h2>
          <p className="mb-4">
            From the moment you step onboard a Hawaiian Airlines flight, you're
            greeted with genuine Hawaiian hospitality. Flight attendants don
            traditional Aloha attire, Hawaiian music plays softly in the
            background, and the cabin is infused with a tranquil island
            ambiance.
          </p>
          <p>
            Passengers consistently rave about the thoughtful attention to
            detail that makes them feel like they’ve begun their vacation long
            before they arrive. The spirit of Aloha is embedded in every
            touchpoint — from boarding announcements to meal presentations and
            in-flight entertainment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🍱 Island-Inspired In-Flight Dining
          </h2>
          <p className="mb-4">
            One of Hawaiian Airlines' standout features is its free meal service
            on long-haul flights — a rarity among U.S. domestic carriers. Meals
            are often locally inspired, featuring dishes with tropical flavors,
            fresh ingredients, and a touch of Hawaii's culinary culture.
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Chicken with pineapple glaze</li>
            <li>Vegetable curry with jasmine rice</li>
            <li>Hawaiian-style pasta</li>
            <li>Signature POG juice (Passionfruit-Orange-Guava)</li>
          </ul>
          <p>
            First Class passengers enjoy chef-curated menus created in
            collaboration with local chefs, paired with premium wine selections.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            💺 Cabin Comfort & Premium Seating
          </h2>

          <Image
            src="/assets/image/Adient-Seat.webp"
            alt="Fleet Overview"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md mt-5 mb-5 h-70"
          />

          <p className="mb-2 font-semibold">Main Cabin:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Ergonomically designed seats</li>
            <li>Seatback entertainment on select aircraft</li>
            <li>Friendly, culturally aware cabin crew</li>
          </ul>
          <p className="mb-2 font-semibold">Extra Comfort:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>More legroom</li>
            <li>Early boarding</li>
            <li>Priority security screening at select airports</li>
          </ul>
          <p className="mb-2 font-semibold">First Class:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Lie-flat seats on Airbus A330</li>
            <li>Personal concierge-like service</li>
            <li>Luxury amenity kits and plush bedding</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🏆 Exceptional On-Time Performance & Reliability
          </h2>
          <p>
            Hawaiian Airlines has earned a stellar reputation as one of the most
            punctual airlines in the United States. According to the U.S.
            Department of Transportation, it has ranked #1 in on-time
            performance for nearly two decades — a true testament to its
            operational efficiency.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Smooth boarding and deplaning processes</li>
            <li>Minimal delays</li>
            <li>Reliable inter-island connections</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧭 Extensive Network to and from the Islands
          </h2>
          <p>
            Hawaiian Airlines operates a comprehensive route network, making it
            the ideal choice for travelers heading to Hawaii from the mainland
            U.S., Asia, Australia, and the South Pacific. Inter-island flights
            are equally reliable and frequent — perfect for those exploring
            multiple Hawaiian islands.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🌱 Sustainability and Eco-Conscious Flying
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fuel-efficient aircraft like the A321neo</li>
            <li>
              Upcoming Boeing 787-9 Dreamliners equipped with modern,
              eco-friendly systems
            </li>
            <li>Carbon offset programs and recycling initiatives</li>
          </ul>
          <p className="mt-2">
            Travelers looking for an airline that cares about the planet can
            trust Hawaiian Airlines to lead with integrity.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧳 HawaiianMiles: A Rewarding Loyalty Program
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>No expiration of miles — ever</li>
            <li>Earn miles on flights, hotel bookings, shopping, and dining</li>
            <li>Redeem for flights, upgrades, and vacation packages</li>
            <li>
              Elite status tiers offer perks like priority boarding and free
              bags
            </li>
          </ul>
          <p className="mt-2">
            Many travelers love how accessible and generous the program is,
            especially when booking last-minute flights to paradise.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🤝 Friendly Partnerships for Greater Flexibility
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>JetBlue Airways (great for East Coast connectivity)</li>
            <li>Japan Airlines</li>
            <li>Korean Air</li>
            <li>Virgin Australia</li>
            <li>American Airlines (limited partnership)</li>
          </ul>
          <p className="mt-2">
            These connections make seamless travel across continents possible,
            even when Hawaii is just one leg of the journey.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            ⭐ What Travelers Love Most About Hawaiian Airlines
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Aloha Spirit: Friendly, culturally sensitive crew who genuinely
              care about your comfort
            </li>
            <li>
              Free Meals: Island-inspired food and complimentary beverages on
              most routes
            </li>
            <li>Smooth Operations: Best-in-class on-time record</li>
            <li>
              Comfortable Cabins: Well-maintained fleet with soothing interiors
            </li>
            <li>
              Strong Loyalty Program: Miles that never expire and multiple ways
              to redeem
            </li>
            <li>
              Cultural Immersion: A preview of the islands before you even land
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🌟 Final Verdict: A Journey as Beautiful as the Destination
          </h2>
          <p>
            Hawaiian Airlines is a refreshing and memorable alternative to the
            standard air travel experience. It combines the efficiency of a
            world-class airline with the personality and warmth of Hawaii’s
            culture. From impeccable service and delicious food to punctual
            flights and inspiring cabin design, Hawaiian Airlines is a top-tier
            choice for both leisure and business travelers alike.
          </p>
        </section>
      </div>
      <div>
        <ContactSection name="Hawaiian Airlines" isSide={true} />
      </div>
    </div>
  );
}
