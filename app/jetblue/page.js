import Image from 'next/image';

export default function Page() {
  return (
    <main className="bg-white text-gray-800  px-6 md:px-20 py-10 space-y-14 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className=" space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700">🛫 JetBlue Airways</h1>
        <p className="text-xl md:text-2xl text-gray-600  ">
          JetBlue Airways Corporation is a leading American low-cost airline, renowned for redefining what budget travel looks like in the modern aviation world. Headquartered in the vibrant borough of Long Island City, Queens, New York, JetBlue blends affordability with comfort, delivering a customer-first experience that has earned it a loyal and growing base of travelers.
        </p>
        <div className="w-full h-64 md:h-[310px] relative mx-auto rounded-2xl overflow-hidden shadow">
          <Image src="/assets/home/airline10.png" alt="JetBlue Airways" layout="fill" objectFit="cover" />
        </div>
      </section>

      {/* History Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">📜 Our Story: History & Evolution</h2>
        <ul className="text-lg space-y-1 list-disc pl-6">
          <li><strong>Founded:</strong> August 1998</li>
          <li><strong>Founder:</strong> David Neeleman</li>
          <li><strong>Commenced Operations:</strong> February 11, 2000</li>
          <li><strong>Original Name:</strong> NewAir</li>
          <li><strong>Primary Hub:</strong> John F. Kennedy International Airport (JFK), New York City</li>
        </ul>
        <p className="mt-4 text-lg">
          JetBlue was launched with a revolutionary idea — to offer low fares without compromising on quality or comfort. From day one, the airline set itself apart with pioneering features like complimentary seat-back entertainment, free snacks and drinks, leather seating, and more legroom than most other budget airlines.
          <br /> Today, JetBlue is widely seen as the gold standard in low-cost aviation.
        </p>
      </section>

      {/* Fleet Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">✈️ Our Fleet: Modern, Sustainable & Expanding</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc pl-6 text-lg space-y-1">
            <li>Airbus A320-200</li>
            <li>Airbus A321-200</li>
            <li>Airbus A321neo</li>
            <li>Airbus A220-300</li>
            <li>Embraer E190 (phasing out)</li>
            <li>Future: Airbus A321XLR</li>
          </ul>
          <div className="w-full h-60 relative rounded-xl overflow-hidden shadow-md">
            <Image src="/assets/home/airline10.png" alt="JetBlue Fleet" layout="fill" objectFit="cover" />
          </div>
        </div>
        <p className="text-lg mt-4">Average Fleet Size: 280+ aircraft and growing. Designed for comfort and sustainability.</p>
      </section>

      {/* Route Network */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">🌍 Route Network: Domestic Strength, Global Reach</h2>
        <p className="text-lg mb-2 font-bold">🏙️ Key U.S. Focus Cities:</p>
        <ul className="list-disc pl-6 text-lg">
          <li>New York–JFK</li>
          <li>Boston Logan (BOS)</li>
          <li>Fort Lauderdale (FLL)</li>
          <li>Orlando (MCO)</li>
          <li>Los Angeles (LAX)</li>
        </ul>
        <p className="text-lg mt-4 font-bold">🌐 International Expansion:</p>
        <ul className="list-disc pl-6 text-lg">
          <li>London (Heathrow & Gatwick)</li>
          <li>Paris (CDG)</li>
          <li>Amsterdam</li>
          <li>Dublin (upcoming)</li>
          <li>Rome (upcoming)</li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">💺 JetBlue Experience</h2>
        <div className="space-y-4 text-lg">
          <div>
            <h3 className="text-2xl font-bold">👤 Core Economy</h3>
            <ul className="list-disc pl-6">
              <li>Free high-speed Wi-Fi (Fly-Fi)</li>
              <li>Seat-back entertainment with live TV</li>
              <li>Complimentary snacks & drinks</li>
              <li>More legroom than typical budget airlines</li>
              <li>Upgrades to Even More Space</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">✨ Mint Premium Class</h3>
            <ul className="list-disc pl-6">
              <li>Fully lie-flat seats</li>
              <li>Curated dining and wine</li>
              <li>Luxury amenity kits</li>
              <li>Priority check-in & boarding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">🧑✈️ Leadership & Ownership</h2>
        <p className="text-lg">CEO (2024): <strong>Joanna Geraghty</strong> — The first woman to lead a major U.S. airline, driving innovation and environmental commitment.</p>
        <p className="text-lg">Public Company: <strong>NASDAQ: JBLU</strong></p>
      </section>

      {/* Strategy */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">📈 Strategy: High-Value, Low-Fare Model</h2>
        <ul className="list-disc pl-6 text-lg space-y-1">
          <li>Transparent pricing</li>
          <li>Comfort-focused low-cost travel</li>
          <li>Tech-forward operations (first with gate-to-gate Wi-Fi)</li>
          <li>Top-tier customer satisfaction</li>
        </ul>
      </section>

      {/* Partnerships */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">🤝 Airline Partnerships & Alliances</h2>
        <p className="text-lg">Though not in a major alliance, JetBlue partners with:</p>
        <ul className="list-disc pl-6 text-lg">
          <li>American Airlines (NEA)</li>
          <li>Emirates</li>
          <li>Qatar Airways</li>
          <li>Icelandair</li>
          <li>Singapore Airlines</li>
        </ul>
      </section>

      {/* News */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">🚨 Recent News & Updates (2024–2025)</h2>
        <ul className="list-disc pl-6 text-lg space-y-1">
          <li>❌ Spirit Airlines merger blocked</li>
          <li>🌍 Expansion to Paris, Amsterdam, Rome, Dublin</li>
          <li>🛢️ Major SAF investments for Net Zero 2040 goal</li>
        </ul>
      </section>

      {/* Environment */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-green-700">🌱 Environmental Responsibility</h2>
        <ul className="list-disc pl-6 text-lg">
          <li>✅ First U.S. airline to offset 100% domestic CO₂</li>
          <li>✅ SAF usage & fleet modernization</li>
          <li>✅ Net Zero by 2040 goal</li>
        </ul>
      </section>

      {/* Recognition */}
      <section className="bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-purple-700">⭐ Awards & Recognition</h2>
        <ul className="list-disc pl-6 text-lg">
          <li>Top scores in customer satisfaction</li>
          <li>Best seat pitch & Wi-Fi</li>
          <li>Great in-flight entertainment</li>
          <li>Friendly and professional crew</li>
        </ul>
      </section>

      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-sky-800">🌟 JetBlue Airways: A Standout in U.S. Aviation</h1>
        <Image src="/placeholder-jetblue.jpg" alt="JetBlue Aircraft" width={1200} height={600} className="rounded-2xl shadow-md" />
        <p className="text-lg leading-relaxed">
          JetBlue blends affordability, comfort, and service into a modern airline experience. It proves low-cost doesn’t have to mean low-quality — especially in the domestic U.S. market.
        </p>
      </div>

      {/** Booking & Check-in */}
      <div>
        <h2 className="text-3xl font-semibold">✈️ Booking & Check-In: Seamless & Stress-Free</h2>
        <p className="text-lg leading-relaxed">
          JetBlue’s mobile-first booking experience is fast and intuitive. Easily compare fare classes, add bags or upgrades, and receive real-time alerts — all with a frustration-free interface.
        </p>
      </div>

      {/** Baggage Policies */}
      <div>
        <h2 className="text-3xl font-semibold">🧳 Baggage Policies: Fair & Predictable</h2>
        <p className="text-lg leading-relaxed">
          JetBlue offers a carry-on and personal item for most fares. Checked bag fees are clear, with bundled options that save money and avoid surprises. Handling is reliable and support is responsive.
        </p>
      </div>

      {/** Cabin Comfort */}
      <div>
        <h2 className="text-3xl font-semibold">🛫 Cabin Comfort: Roomy & Refined</h2>
        <Image src="/placeholder-cabin.jpg" alt="JetBlue Cabin" width={1200} height={600} className="rounded-2xl shadow-md" />
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Ample legroom in all economy seats</li>
          <li>Leather seats with adjustable headrests</li>
          <li>USB/power outlets standard</li>
          <li>Even More Space upgrade offers early boarding & extra pitch</li>
        </ul>
      </div>

      {/** Entertainment */}
      <div>
        <h2 className="text-3xl font-semibold">📡 Entertainment & Wi-Fi: Best in Class</h2>
        <p className="text-lg leading-relaxed">
          Free Fly-Fi internet, live TV, seatback screens, and movies make JetBlue’s entertainment offering better than many full-service carriers.
        </p>
      </div>

      {/** Food & Drink */}
      <div>
        <h2 className="text-3xl font-semibold">🍴 Food & Beverage: Simple, Satisfying</h2>
        <p className="text-lg leading-relaxed">
          Enjoy complimentary snacks (blue chips are a favorite), soft drinks, and upgradeable snack boxes. Mint passengers enjoy restaurant-inspired cuisine and curated wines.
        </p>
      </div>

      {/** Crew */}
      <div>
        <h2 className="text-3xl font-semibold">👨✈️ Cabin Crew: Caring & Genuine</h2>
        <p className="text-lg leading-relaxed">
          JetBlue’s staff is consistently friendly and accommodating — especially helpful to families and nervous flyers. The human-centered service is a major differentiator.
        </p>
      </div>

      {/** Mint Class */}
      <div>
        <h2 className="text-3xl font-semibold">🛋️ Mint Class: Boutique Luxury</h2>
        <Image src="/placeholder-mint.jpg" alt="Mint Class" width={1200} height={600} className="rounded-2xl shadow-md" />
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Lie-flat suites with privacy doors</li>
          <li>Priority services and exclusive amenity kits</li>
          <li>Curated menus with fine dining flair</li>
        </ul>
      </div>

      {/** Network & Reliability */}
      <div>
        <h2 className="text-3xl font-semibold">🌐 Flight Network & Reliability</h2>
        <p className="text-lg leading-relaxed">
          Serving the U.S., Latin America, and Europe from major hubs like JFK, BOS, and LAX. Flights are generally punctual with strong mobile app communication.
        </p>
      </div>

      {/** Sustainability */}
      <div>
        <h2 className="text-3xl font-semibold">🌱 Sustainability Leadership</h2>
        <p className="text-lg leading-relaxed">
          JetBlue was first in the U.S. to offset 100% of carbon emissions on domestic flights. It invests in SAF and aims for net-zero emissions by 2040.
        </p>
      </div>

      {/** Passenger Quotes */}
      <div>
        <h2 className="text-3xl font-semibold">💬 What Passengers Are Saying</h2>
        <blockquote className="border-l-4 border-sky-500 pl-4 italic text-lg text-gray-700">
          “It’s hard to fly with anyone else after experiencing JetBlue’s legroom and free Wi-Fi.” — Business Traveler, NYC
        </blockquote>
        <blockquote className="border-l-4 border-sky-500 pl-4 italic text-lg text-gray-700">
          “Mint Class feels like a boutique hotel in the sky. Exceptional for the price.” — Frequent Flyer, California
        </blockquote>
        <blockquote className="border-l-4 border-sky-500 pl-4 italic text-lg text-gray-700">
          “The crew was cheerful, patient, and genuinely kind — especially with my kids.” — Family Traveler, Florida
        </blockquote>
      </div>

      {/** Final Verdict */}
      <div>
        <h2 className="text-3xl font-semibold">🛬 Final Verdict: A Hybrid Airline That Works</h2>
        <p className="text-lg leading-relaxed">
          JetBlue fuses the value of low-cost travel with premium amenities. Whether on a quick hop or a transatlantic trip, it delivers consistent quality and hospitality.
        </p>
      </div>
    </main>

  );
}