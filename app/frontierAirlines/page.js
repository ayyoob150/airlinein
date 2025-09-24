import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
        <div className="mb-10">
          <div className="flex justify-between gap-6 items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              Frontier Airlines
            </h1>
            <Image
              src="/assets/frontier.png"
              alt="Frontier Airlines History"
              width={250}
              height={90}
              className="rounded h-[90px] w-[150px] sm:w-[280px]   object-fit"
            />
          </div>
        </div>
        <section className="text-">
          <p className="text-lg">
            Frontier Airlines is a prominent ultra-low-cost carrier (ULCC) based
            in the United States, offering affordable air travel while embracing
            environmental responsibility. Headquartered in Denver, Colorado, the
            airline has built a reputation for delivering no-frills service with
            a focus on operational efficiency, budget-friendly pricing, and
            eco-conscious initiatives. As one of the fastest-growing carriers in
            the U.S., Frontier provides access to a wide domestic and
            international network — without the premium price tag.
          </p>

          <Image
            src="/assets/image/Frontier_5.jpg"
            alt="Fleet Overview"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md mt-5 h-70"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🏢 Company Overview</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Founded:</strong> 1994
            </li>
            <li>
              <strong>Headquarters:</strong> Denver, Colorado
            </li>
            <li>
              <strong>Primary Hub:</strong> Denver International Airport (DEN)
            </li>
            <li>
              <strong>IATA Code:</strong> F9
            </li>
            <li>
              <strong>Fleet Size:</strong> Over 125 aircraft (as of 2025)
            </li>
            <li>
              <strong>Slogan:</strong> "Low Fares Done Right"
            </li>
          </ul>
          <p className="mt-4">
            Frontier Airlines was established as a modern reincarnation of the
            original Frontier Airlines (1950–1986). Since its rebirth in 1994,
            the airline has grown into a major ULCC, serving millions of
            passengers each year with a business model focused on keeping costs
            down while expanding access to affordable air travel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            🌍 Route Network & Destinations
          </h2>
          <p>
            Frontier operates more than 100 destinations across the United
            States, Mexico, the Caribbean, and Central America. With a growing
            presence in underserved markets, it connects smaller cities to
            popular vacation spots and major urban centers, often filling gaps
            left by larger carriers.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Domestic destinations:</strong> From major hubs like
              Atlanta, Chicago, and Miami to secondary markets like Trenton,
              Spokane, and Fargo.
            </li>
            <li>
              <strong>International routes:</strong> Mexico (Cancún,
              Guadalajara), Jamaica (Montego Bay), Costa Rica, the Dominican
              Republic, and more.
            </li>
            <li>
              <strong>Focus Cities:</strong> Orlando (MCO), Las Vegas (LAS),
              Philadelphia (PHL), Tampa (TPA), Miami (MIA), and Cleveland (CLE).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            🛫 Fleet & Sustainability
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Airbus A320neo</li>
            <li>
              Airbus A321neo (newly introduced for higher capacity and fuel
              efficiency)
            </li>
            <li>Average fleet age: Under 5 years</li>
          </ul>
          <p className="mt-4">
            Frontier Airlines takes sustainability seriously. The airline has
            claimed the title of America’s Greenest Airline, focusing on
            reducing its carbon footprint by:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Operating aircraft with the latest fuel-efficient engines</li>
            <li>Implementing lightweight seating and cabin designs</li>
            <li>Offering paperless check-in and digital services</li>
            <li>
              Working toward carbon offsetting and reduced emissions per
              passenger
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            💺 Cabin & Service Model
          </h2>
          <p>
            Frontier follows an à la carte pricing structure typical of ULCCs.
            This allows passengers to customize their travel experience while
            paying only for what they use. The base fare includes a seat and one
            personal item; all other services are optional.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Included in the Basic Fare:</strong> Assigned seat
              (random), One personal item, Access to in-flight water
            </li>
            <li>
              <strong>Additional Charges (Optional Services):</strong> Carry-on
              and checked bags, Seat selection (including Stretch seating),
              In-flight snacks and beverages, Priority boarding or bundles
            </li>
          </ul>
          <p className="mt-2">
            The cabins are clean and simple, with pre-reclined seats to maximize
            space and reduce maintenance, and modern LED lighting for ambiance
            and comfort. Though Frontier does not offer in-flight entertainment
            or Wi-Fi, the airline is geared toward short- to medium-haul
            flights, keeping services efficient and fares ultra-low.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            🐾 Frontier's Animal-Tailed Planes
          </h2>
          <p>
            One of Frontier’s most recognizable features is its fleet of
            aircraft painted with images of wild animals on the tail. From Griz
            the Bear to Flo the Flamingo, each plane is named and features a
            unique animal ambassador, promoting wildlife awareness and
            connecting passengers with nature.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            🏅 FRONTIER Miles Loyalty Program
          </h2>
          <p>
            Frontier’s loyalty program, FRONTIER Miles, is designed for frequent
            flyers who value savings and flexibility:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Points never expire as long as you make one qualifying activity
              every 6 months.
            </li>
            <li>
              Earn miles through flights, partner purchases, and the Frontier
              World Mastercard®.
            </li>
            <li>
              Redeem miles for free flights, seat upgrades, baggage, and more.
            </li>
            <li>
              Elite status tiers (Elite 20k, 50k, 100k) offer perks like free
              bags, seat selection, and family pooling of miles.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            ⭐ Passenger Experience
          </h2>
          <p>
            Frontier may not offer luxury services, but it excels in delivering
            value for budget-conscious travelers. The airline has improved its
            on-time performance, and many passengers appreciate its simple,
            straightforward model. Reviews often highlight:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Affordability as a key benefit</li>
            <li>Friendly and helpful crew</li>
            <li>Efficient boarding and turnaround times</li>
          </ul>
          <p className="mt-2">
            Travelers who plan ahead, understand the fare model, and purchase
            only the services they need often report high satisfaction —
            especially when compared to the cost savings versus traditional
            carriers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            💬 Final Verdict: Smart, Sustainable, and Budget-Friendly
          </h2>
          <p>
            Frontier Airlines is a smart choice for flexible travelers who
            prioritize price over frills. With its ultra-low fares,
            eco-conscious operations, and expansive network, it’s an ideal
            airline for both leisure and occasional business flyers looking to
            stretch their dollars. For those who understand its unbundled
            pricing structure and plan accordingly, Frontier delivers what it
            promises: “Low Fares Done Right.”
          </p>
        </section>
        <section className="text-">
          <h1 className="text-2xl font-bold">
            🌟Affordable Travel with a Green Mission ✈️🌿
          </h1>
          <p className="mt-4 text-lg">
            Frontier Airlines is redefining what it means to travel affordably
            in America, combining ultra-low fares with a strong commitment to
            environmental sustainability. As one of the most cost-effective
            carriers in the U.S. market, Frontier has made it possible for
            millions of travelers to fly further, more often, without breaking
            the bank — all while supporting a greener planet.
          </p>
          <p className="mt-2 text-lg">
            Whether you're planning a weekend getaway, visiting family, or
            heading on a spontaneous adventure, Frontier Airlines offers a
            smart, flexible, and reliable way to fly. Here’s why we love it:
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            💰 Exceptional Value Without the Extra Baggage
          </h2>
          <p className="mt-2">
            The standout feature of Frontier Airlines is its ultra-low-cost fare
            model. With base fares that are consistently among the lowest in the
            industry, Frontier empowers travelers to pay only for what they
            truly need. This à la carte system puts you in full control — no
            paying for perks you won’t use.
          </p>
          <p className="mt-2">
            Want to bring only a backpack? You fly cheap. Need more space or
            checked luggage? You can add them for a modest fee. The beauty lies
            in the flexibility — a fully customizable flight experience tailored
            to your needs and budget.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            ✈️ Clean, Modern Fleet & Comfortable Experience
          </h2>
          <p className="mt-2">
            Frontier operates one of the youngest and most fuel-efficient fleets
            in North America, composed entirely of Airbus A320 family aircraft —
            including the next-generation A320neo and A321neo. These aircraft
            not only offer smoother and quieter rides but also have lower
            emissions, which supports Frontier’s role as America’s Greenest
            Airline.
          </p>
          <p className="mt-2">Inside the cabin, you’ll find:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Ergonomically designed pre-reclined seating</li>
            <li>Stretch seating options with extra legroom</li>
            <li>LED mood lighting and bright, clean interiors</li>
            <li>
              A simplified, comfortable layout for quick boarding and deplaning
            </li>
          </ul>
          <p className="mt-2">
            While Frontier does not offer traditional in-flight entertainment or
            Wi-Fi (to save fuel and keep costs low), their short-to-mid-haul
            focus means most flights are direct and quick — a plus for
            efficiency lovers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            🌍 Expansive Network with Convenient Access
          </h2>
          <p className="mt-2">
            Frontier Airlines offers service to 100+ destinations across the
            U.S., Mexico, Central America, and the Caribbean — making it a top
            choice for both domestic and beach-bound international travel.
          </p>
          <p className="mt-2">
            With major hubs in Denver, Orlando, Las Vegas, Philadelphia, and
            Miami, Frontier connects travelers to both large cities and
            lesser-served markets, providing access to hidden gems, vacation
            hotspots, and affordable regional travel opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            🧳 Streamlined Service, Bundled Options, and Smart Upgrades
          </h2>
          <p className="mt-2">
            Booking with Frontier is refreshingly simple. You start with a base
            fare and can then:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Add bags, select seats, or upgrade to stretch seating</li>
            <li>
              Choose bundles like The Perks or The Works, which include extras
              like carry-on, checked bag, seat selection, and flight flexibility
              — at a discounted combo price
            </li>
          </ul>
          <p className="mt-2">
            This tiered service structure ensures that budget-conscious
            travelers get exactly what they need — no more, no less.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            🐾 Unique Branding: Wildlife Tails and Eco Messaging
          </h2>
          <p className="mt-2">
            Every Frontier plane features a colorful animal on its tail,
            complete with a name and a personality. From Griz the Bear to Luna
            the Arctic Fox, these aircraft mascots create a memorable flying
            experience — especially for kids and families.
          </p>
          <p className="mt-2">
            It’s more than just branding. It’s part of Frontier’s broader
            eco-conscious mission to connect people with the planet and promote
            environmental responsibility through every flight.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            🏅 FRONTIER Miles: A Loyalty Program That Works
          </h2>
          <p className="mt-2">
            The FRONTIER Miles loyalty program is surprisingly generous for an
            ultra-low-cost carrier:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Earn miles on every flight and qualifying purchase</li>
            <li>
              Miles never expire as long as there’s activity every 6 months
            </li>
            <li>Redeem miles for free flights, seats, baggage, and more</li>
            <li>
              Achieve Elite status for perks like free bags, priority boarding,
              and family pooling
            </li>
          </ul>
          <p className="mt-2">
            This program is a great fit for both occasional and frequent
            travelers looking to save and stretch their budgets even further.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            👨‍✈️ Friendly Crew & Positive Travel Vibes
          </h2>

          <Image
            src="/assets/image/frontier.jpg"
            alt="Fleet Overview"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md mt-5 mb-5 h-70"
          />

          <p className="mt-2">
            Despite the lean cost structure, Frontier's cabin crew consistently
            receive high marks for professionalism and courtesy. Travelers often
            remark on the crew’s:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Positive, upbeat attitude</li>
            <li>Efficient boarding process</li>
            <li>Clear communication about add-on options and travel updates</li>
          </ul>
          <p className="mt-2">
            Frontier may not offer luxury perks, but its staff delivers service
            with a smile, ensuring a smooth and stress-free flying experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            🌟 Final Thoughts: Why Frontier Deserves a Spot on Your Itinerary
          </h2>
          <p className="mt-2">
            If you’re looking for a smart, affordable, and sustainable way to
            travel, Frontier Airlines is hard to beat. With its low fares,
            modern fleet, customer-friendly bundles, and mission to reduce its
            environmental impact, the airline offers an ideal solution for
            travelers who value both their wallet and the world.
          </p>
          <p className="mt-2">
            Yes, you’ll want to read the fine print and plan ahead — but those
            who do are often pleasantly surprised by how much they save and how
            well Frontier delivers.
          </p>
          <p className="mt-2">
            Frontier Airlines isn't just a budget airline — it's a bold new way
            to fly. Affordable, adaptable, and eco-forward — this is air travel
            for the modern era.
          </p>
        </section>
      </div>
      <div>
        <ContactSection name="Frontier Airlines" isSide={true} />
      </div>
    </div>
  );
}
