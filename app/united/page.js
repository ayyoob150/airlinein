import Image from "next/image";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>United Airlines – Company Profile</title>
        <meta
          name="description"
          content="Explore United Airlines’ history, global reach, fleet, innovation, and loyalty programs."
        />
        <meta property="og:title" content="United Airlines – Company Profile" />
        <meta
          property="og:description"
          content="Discover United Airlines’ evolution, global flight network, and sustainability leadership."
        />
        <meta property="og:image" content="/united-og-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white text-gray-900 font-sans px-6 md:px-20 py-10 space-y-14 max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
            ✈️ United Airlines – Company Profile
          </h1>
          <Image
            src="/assets/home/airline4.png"
            alt="About United"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <p className="text-lg leading-relaxed">
            <strong className="text-lg leading-relaxed">Official Name</strong>: United Airlines, Inc.
            <br />
            <strong className="text-lg leading-relaxed">Headquarters</strong>: Willis Tower (formerly Sears Tower),
            Chicago, Illinois, USA
            <br />
            <strong className="text-lg leading-relaxed">Year Founded</strong>: Traces its origins back to 1926 as
            Varney Air Lines, officially rebranded as United Airlines in 1931
            <br />
            <strong className="text-lg leading-relaxed">Parent Organization</strong>: United Airlines Holdings, Inc.
            <br />
            <strong className="text-lg leading-relaxed">Airline Codes</strong>:<br />
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>IATA: UA</li>
            <li>ICAO: UAL</li>
            <li>Callsign: UNITED</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">🌐 Extensive Network and Global Operations</h2>
          <Image
            src="/placeholder-network.jpg"
            alt="Global Operations"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <strong className="text-lg leading-relaxed">✈️ Worldwide Flight Coverage</strong><br/>
          <p className="text-lg leading-relaxed">
            United Airlines proudly serves an expansive global network, connecting passengers to over 300 destinations spread across six continents. This extensive route map ensures connectivity to key business, leisure, and emerging markets worldwide.
          </p>
          <strong className="text-lg leading-relaxed">🛫 Major Hub Airports</strong><br/>
          <p>
            United’s strategic hub system underpins its robust network, optimizing flight connections across the globe. The airline operates major hubs at:
          </p>

          <ul className="list-disc list-inside text-lg">
            <li>Chicago O’Hare International Airport (ORD)</li>
            <li>Newark Liberty International Airport (EWR)</li>
            <li>Denver International Airport (DEN)</li>
            <li>San Francisco International Airport (SFO)</li>
            <li>George Bush Intercontinental Airport, Houston (IAH)</li>
            <li>Washington Dulles International Airport (IAD)</li>
            <li>Los Angeles International Airport (LAX)</li>
            <li>Guam International Airport (GUM)</li>
            </ul>

        </div>
         <div className="space-y-6">
          <h2 className="text-3xl font-semibold">🌐 Global Reach & Market Focus</h2>
          <Image
            src="/placeholder-network.jpg"
            alt="Global Operations"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <p className="text-lg leading-relaxed">
            United is particularly renowned for its strength in:
          </p>
         

          <ul className="list-disc list-inside text-lg">
  <li><strong className="text-lg leading-relaxed">Transpacific routes</strong> connecting North America with Asia-Pacific</li>
  <li><strong className="text-lg leading-relaxed">Transatlantic services</strong> between the U.S. and Europe</li>
  <li><strong className="text-lg leading-relaxed">Extensive coverage</strong> in Latin America and the Caribbean</li>
  <li><strong className="text-lg leading-relaxed">Dense domestic routes</strong> within the United States</li>
</ul>
<p>
    This strategic focus enables United to serve both international business travelers and vacationers with seamless options.
</p>


        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">🛩️ Modern Fleet Overview</h2>
          <Image
            src="/placeholder-fleet.jpg"
            alt="Fleet Overview"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <p className="text-lg leading-relaxed">
            United Airlines operates one of the industry’s most diverse and advanced aircraft fleets, emphasizing fuel efficiency, passenger comfort, and sustainability.
          </p>
          <strong className="text-lg leading-relaxed">Fleet Breakdown</strong><br />
          
          <strong className="text-lg leading-relaxed">Mainline Aircraft:</strong><br />
          <ul className="list-disc list-inside text-lg">
            <li>Boeing 737 Next Generation & MAX series</li>
            <li>Boeing 757, 767, 777, and the cutting-edge 787 Dreamliner</li>
            <li>Airbus A319 and A320 family</li>
          </ul>
          <strong className="text-lg leading-relaxed">Regional Fleet (United Express):</strong><br />
          <ul className="list-disc list-inside text-lg">
            <li>Embraer E175 jets</li>
            <li>Bombardier CRJ series</li>
          </ul>
          <strong className="text-lg leading-relaxed">Commitment to Fleet Modernization & Sustainability</strong>
          <p>United is investing heavily in next-generation aircraft that offer improved fuel economy and reduced emissions. Notable initiatives include:
          </p>
      
<ul className="list-disc list-inside text-lg">
            <li>Large-scale orders for fuel-efficient models such as the Boeing 787 and Airbus A321XLR</li>
            <li>Pioneering Sustainable Aviation Fuel (SAF) adoption to lower carbon footprint</li>
            <li>Backing innovative electric and hydrogen-powered aircraft ventures, signaling a commitment to aviation’s sustainable future</li>
          </ul>

        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            🤝 Strategic Alliances and Partnerships
          </h2>
          <Image
            src="/placeholder-partnerships.jpg"
            alt="Alliances"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <strong className="text-lg leading-relaxed">Star Alliance Leadership</strong>
          <p className="text-lg leading-relaxed">
            As a founding member of the Star Alliance, United is part of the world’s largest airline alliance, providing customers with unmatched global connectivity and seamless travel experiences. Key alliance partners include industry giants like Lufthansa, Singapore Airlines, ANA, and Air Canada.
          </p>
          <strong className="text-lg leading-relaxed">Code-Sharing and Interline Cooperation</strong>
          <p className="text-lg leading-relaxed">
           United maintains a broad network of code-share and interline agreements across every continent, allowing travelers to book convenient connecting flights worldwide under one ticket.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">💼 MileagePlus – The Premier Loyalty Program</h2>
          <Image
            src="/placeholder-loyalty.jpg"
            alt="MileagePlus"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />

          <p className="text-lg leading-relaxed">
            United’s <strong>MileagePlus</strong> program is widely regarded as one of the most rewarding frequent flyer programs available, offering members a range of benefits including:
          </p>
          <ul className="list-disc list-inside text-lg">
  <li>Mile earning tied to fare class and elite status</li>
  <li>Elite tiers with increasing privileges: Premier Silver, Gold, Platinum, and the elite 1K</li>
  <li>Priority services such as early check-in, boarding, and baggage handling</li>
  <li>Complimentary upgrades and access to exclusive United Clubs and Star Alliance lounges</li>
</ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">📊 Financial Strength and Workforce</h2>
       <ul className="list-disc list-inside text-lg">
  <li><strong>Public Listing:</strong> United Airlines Holdings, Inc. trades publicly on NASDAQ under the ticker symbol UAL</li>
  <li><strong>2023 Revenue:</strong> Approximately $50+ billion, reflecting strong market recovery and operational growth</li>
  <li><strong>Workforce:</strong> Around 90,000 dedicated employees worldwide, including flight crews, ground staff, and corporate personnel</li>
</ul>

          <p className="text-lg leading-relaxed">
          United has demonstrated remarkable resilience following the challenges of the COVID-19 pandemic, rapidly restoring passenger volumes and profitability through adaptive business strategies.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">📜 Historical Milestones</h2>
          <Image
            src="/placeholder-history.jpg"
            alt="Milestones"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <ul className="list-disc list-inside text-lg">
            <li>1926: Founded as Varney Air Lines</li>
            <li>2010: Merged with Continental Airlines</li>
            <li>2020–22: Overcame pandemic challenges with innovation</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            🔧 Passenger Experience & Innovation
          </h2>
          <Image
            src="/placeholder-cabin.jpg"
            alt="Innovation"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <p className="text-lg leading-relaxed">
            United enhances flying with Polaris Business Class, upgraded
            lounges, onboard Wi-Fi, and a user-friendly app for real-time travel
            management.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">🌱 ESG & Sustainability</h2>
          <p className="text-lg leading-relaxed">
            United leads ESG with net-zero goals by 2050, SAF investments, eVTOL
            aircraft development, and inclusive hiring programs. Transparency is
            reflected in detailed ESG reporting.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">✅ Why Choose United?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Extensive global network</li>
            <li>Fuel-efficient, modern fleet</li>
            <li>Top loyalty program with elite benefits</li>
            <li>Cutting-edge digital and sustainable travel solutions</li>
          </ul>
        </div>
      </main>
      <main className="bg-white text-gray-900 font-sans px-6 md:px-20 py-10 space-y-14 max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
            🌟 United Airlines – A Seamless Travel Experience
          </h1>
          <Image
            src="/placeholder-united.jpg"
            alt="United Airlines aircraft"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <p className="text-lg leading-relaxed">
            I recently had the pleasure of flying with United Airlines, and my
            overall experience was highly satisfying. Here’s a detailed look at
            what made the journey exceptional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">✈️ Extensive Route Network</h2>
          <p className="text-lg leading-relaxed">
            United’s extensive flight network spans the U.S., Asia, Europe, and
            Latin America. As a key Star Alliance member, it ensures seamless
            international transfers, lounge access, and coordinated schedules.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">
            🛫 Modern Fleet & Cabin Comfort
          </h2>
          <Image
            src="/placeholder-cabin.jpg"
            alt="Modern Cabin"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Ergonomic seats with ample legroom</li>
            <li>Quiet cabins that reduce fatigue</li>
            <li>Oversized windows with tint control</li>
            <li>Advanced air filtration systems</li>
            <li>
              Polaris business class: lie-flat seats, premium bedding, privacy
              features
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">
            👩‍✈️ Exceptional Crew Service
          </h2>
          <p className="text-lg leading-relaxed">
            From check-in to landing, the staff was courteous and efficient.
            Flight attendants were warm, attentive, and helpful, enhancing the
            overall journey.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">
            🎁 MileagePlus Loyalty Program
          </h2>
          <p className="text-lg leading-relaxed">
            United’s MileagePlus offers great value with easy mile-earning
            options and elite tiers that bring benefits like lounge access,
            upgrades, and priority boarding.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">
            🎬 In-Flight Entertainment & Dining
          </h2>
          <Image
            src="/placeholder-entertainment.jpg"
            alt="In-flight Entertainment"
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full h-70"
          />
          <p className="text-lg leading-relaxed">
            United provides a vast media library and high-speed Wi-Fi. Meal
            options accommodate various dietary needs and exceed expectations,
            especially on international flights.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">🧼 Cleanliness & Safety</h2>
          <p className="text-lg leading-relaxed">
            Cabins were spotless, and safety measures were communicated and
            followed diligently, ensuring peace of mind throughout the flight.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">📱 Intuitive Mobile App</h2>
          <p className="text-lg leading-relaxed">
            The United app made booking, check-in, upgrades, and account
            management effortless. Real-time updates minimized travel stress.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">
            🌱 Sustainability Initiatives
          </h2>
          <p className="text-lg leading-relaxed">
            United leads green aviation with Sustainable Aviation Fuel, electric
            aircraft investments, and a strong commitment to lowering emissions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">✨ Other Highlights</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Access to Polaris lounges</li>
            <li>On-time performance</li>
            <li>Inclusive support for travelers with special needs</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">📝 Final Thoughts</h2>
          <p className="text-lg leading-relaxed">
            United Airlines combines global connectivity, superior comfort,
            smart technology, and sustainability — making it a top pick for
            business and leisure travel.
          </p>
        </div>
      </main>
    </>
  );
}
