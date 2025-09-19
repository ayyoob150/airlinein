import Image from "next/image";
import Head from "next/head";
import ContactSection from "@/components/ContactSection";


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

      <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
        <div className=" text-slate-800  px-6 md:px-20 py-8 space-y-14 max-w-[900px]">
        <main className="space-y-4">
          <div className="space-y-4 ">
            <div className="flex justify-between gap-6 items-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                    United Airline
                  </h1>
                  <Image
                    src="/assets/home/unite.png"
                    alt="united airline history"
                    width={250}
                    height={90}
                    className="rounded h-[90px] w-[150px] sm:w-[250px] object-cover"
                  />
                </div>
            {/* <Image
              src="/assets/home/airline4.png"
              alt="About United"
              width={1200}
              height={600}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}
            <p className="text-lg leading-relaxed">
              <strong className="text-lg leading-relaxed font-semibold">Official Name</strong>:
              United Airlines, Inc.
              <br />
              <strong className="text-lg leading-relaxed font-semibold">Headquarters</strong>:
              Willis Tower (formerly Sears Tower), Chicago, Illinois, USA
              <br />
              <strong className="text-lg leading-relaxed font-semibold">Year Founded</strong>:
              Traces its origins back to 1926 as Varney Air Lines, officially
              rebranded as United Airlines in 1931
              <br />
              <strong className="text-lg leading-relaxed font-semibold">
                Parent Organization
              </strong>
              : United Airlines Holdings, Inc.
              <br />
              <strong className="text-lg leading-relaxed font-semibold">Airline Codes</strong>:
              <br />
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>IATA: UA</li>
              <li>ICAO: UAL</li>
              <li>Callsign: UNITED</li>
            </ul>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🌐 Extensive Network and Global Operations
            </h2>
            <Image
              src="/assets/image/network.jpg"
              alt="Global Operations"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            />
            <strong className="text-lg leading-relaxed">
              ✈️ Worldwide Flight Coverage
            </strong>
            <br />
            <p className="text-lg leading-relaxed">
              United Airlines proudly serves an expansive global network,
              connecting passengers to over 300 destinations spread across six
              continents. This extensive route map ensures connectivity to key
              business, leisure, and emerging markets worldwide.
            </p>
            <strong className="text-lg leading-relaxed">
              🛫 Major Hub Airports
            </strong>
            <br />
            <p>
              United’s strategic hub system underpins its robust network,
              optimizing flight connections across the globe. The airline operates
              major hubs at:
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
          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🌐 Global Reach & Market Focus
            </h2>
            {/* <Image
              src="/placeholder-network.jpg"
              alt="Global Operations"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}
            <p className="text-lg leading-relaxed">
              United is particularly renowned for its strength in:
            </p>

            <ul className="list-disc list-inside text-lg">
              <li>
                <strong className="text-lg leading-relaxed">
                  Transpacific routes
                </strong>{" "}
                connecting North America with Asia-Pacific
              </li>
              <li>
                <strong className="text-lg leading-relaxed">
                  Transatlantic services
                </strong>{" "}
                between the U.S. and Europe
              </li>
              <li>
                <strong className="text-lg leading-relaxed">
                  Extensive coverage
                </strong>{" "}
                in Latin America and the Caribbean
              </li>
              <li>
                <strong className="text-lg leading-relaxed">
                  Dense domestic routes
                </strong>{" "}
                within the United States
              </li>
            </ul>
            <p>
              This strategic focus enables United to serve both international
              business travelers and vacationers with seamless options.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">🛩️ Modern Fleet Overview</h2>
            <Image
              src="/assets/image/modernFleet.jpg"
              alt="Fleet Overview"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-100"
            />
            <p className="text-lg leading-relaxed">
              United Airlines operates one of the industry’s most diverse and
              advanced aircraft fleets, emphasizing fuel efficiency, passenger
              comfort, and sustainability.
            </p>
            <strong className="text-lg leading-relaxed">Fleet Breakdown</strong>
            <br />

            <strong className="text-lg leading-relaxed">
              Mainline Aircraft:
            </strong>
            <br />
            <ul className="list-disc list-inside text-lg">
              <li>Boeing 737 Next Generation & MAX series</li>
              <li>Boeing 757, 767, 777, and the cutting-edge 787 Dreamliner</li>
              <li>Airbus A319 and A320 family</li>
            </ul>
            <strong className="text-lg leading-relaxed">
              Regional Fleet (United Express):
            </strong>
            <br />
            <ul className="list-disc list-inside text-lg">
              <li>Embraer E175 jets</li>
              <li>Bombardier CRJ series</li>
            </ul>
            <strong className="text-lg leading-relaxed">
              Commitment to Fleet Modernization & Sustainability
            </strong>
            <p>
              United is investing heavily in next-generation aircraft that offer
              improved fuel economy and reduced emissions. Notable initiatives
              include:
            </p>

            <ul className="list-disc list-inside text-lg">
              <li>
                Large-scale orders for fuel-efficient models such as the Boeing
                787 and Airbus A321XLR
              </li>
              <li>
                Pioneering Sustainable Aviation Fuel (SAF) adoption to lower
                carbon footprint
              </li>
              <li>
                Backing innovative electric and hydrogen-powered aircraft
                ventures, signaling a commitment to aviation’s sustainable future
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🤝 Strategic Alliances and Partnerships
            </h2>
            {/* <Image
              src="/placeholder-partnerships.jpg"
              alt="Alliances"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}
            <strong className="text-lg leading-relaxed">
              Star Alliance Leadership
            </strong>
            <p className="text-lg leading-relaxed">
              As a founding member of the Star Alliance, United is part of the
              world’s largest airline alliance, providing customers with unmatched
              global connectivity and seamless travel experiences. Key alliance
              partners include industry giants like Lufthansa, Singapore Airlines,
              ANA, and Air Canada.
            </p>
            <strong className="text-lg leading-relaxed">
              Code-Sharing and Interline Cooperation
            </strong>
            <p className="text-lg leading-relaxed">
              United maintains a broad network of code-share and interline
              agreements across every continent, allowing travelers to book
              convenient connecting flights worldwide under one ticket.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              💼 MileagePlus – The Premier Loyalty Program
            </h2>
            {/* <Image
              src="/placeholder-loyalty.jpg"
              alt="MileagePlus"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}

            <p className="text-lg leading-relaxed">
              United’s <strong>MileagePlus</strong> program is widely regarded as
              one of the most rewarding frequent flyer programs available,
              offering members a range of benefits including:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>Mile earning tied to fare class and elite status</li>
              <li>
                Elite tiers with increasing privileges: Premier Silver, Gold,
                Platinum, and the elite 1K
              </li>
              <li>
                Priority services such as early check-in, boarding, and baggage
                handling
              </li>
              <li>
                Complimentary upgrades and access to exclusive United Clubs and
                Star Alliance lounges
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              📊 Financial Strength and Workforce
            </h2>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Public Listing:</strong> United Airlines Holdings, Inc.
                trades publicly on NASDAQ under the ticker symbol UAL
              </li>
              <li>
                <strong>2023 Revenue:</strong> Approximately $50+ billion,
                reflecting strong market recovery and operational growth
              </li>
              <li>
                <strong>Workforce:</strong> Around 90,000 dedicated employees
                worldwide, including flight crews, ground staff, and corporate
                personnel
              </li>
            </ul>

            <p className="text-lg leading-relaxed">
              United has demonstrated remarkable resilience following the
              challenges of the COVID-19 pandemic, rapidly restoring passenger
              volumes and profitability through adaptive business strategies.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              📜 Milestones in United Airlines’ History
            </h2>
            {/* <Image
              src="/placeholder-history.jpg"
              alt="Milestones"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>1926:</strong> Launched as Varney Air Lines, pioneering
                airmail and early passenger service
              </li>
              <li>
                <strong>1930s:</strong> Consolidation of multiple regional
                carriers into United Air Lines, expanding domestic reach
              </li>
              <li>
                <strong>1978:</strong> Capitalized on airline deregulation to grow
                aggressively across new markets
              </li>
              <li>
                <strong>2010:</strong> Merger with Continental Airlines, creating
                a combined global powerhouse under the United brand but retaining
                Continental’s iconic globe logo
              </li>
              <li>
                <strong>2017:</strong> Managed significant public relations
                challenges, which prompted a refocus on customer service and
                corporate responsibility
              </li>
              <li>
                <strong>2020–2022:</strong> Navigated the unprecedented impacts of
                the pandemic, emerging with a renewed emphasis on innovation and
                customer-centric solutions
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🔧 Innovation & Passenger Experience Enhancements
            </h2>
            {/* <Image
              src="/placeholder-cabin.jpg"
              alt="Innovation"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}
            <p className="text-lg leading-relaxed">
              United Airlines continually elevates the in-flight experience
              through technological and service innovations:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Polaris Business Class:</strong> A premium international
                cabin featuring lie-flat seats, elevated dining, and luxurious
                amenities
              </li>
              <li>
                <strong>United Club & Polaris Lounges:</strong> Comfortable,
                stylish airport lounges available at key hubs worldwide
              </li>
              <li>
                <strong>Connectivity:</strong> Fast onboard Wi-Fi, live streaming
                entertainment, and enhanced mobile app features support today’s
                digital traveler
              </li>
              <li>
                <strong>Mobile App:</strong> Industry-leading digital platform for
                booking, managing trips, and real-time travel updates
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🌱 Sustainability and Environmental, Social, Governance (ESG)
              Initiatives
            </h2>
            <p className="text-lg leading-relaxed">
              United Airlines is deeply committed to sustainable aviation and
              responsible corporate practices:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                First major U.S. airline to invest in electric vertical takeoff
                and landing (eVTOL) aircraft projects
              </li>
              <li>
                Strategic partnerships advancing the production and use of
                Sustainable Aviation Fuel (SAF)
              </li>
              <li>
                Transparent ESG reporting, setting ambitious carbon neutrality
                targets with a goal to eliminate net greenhouse gas emissions by
                2050
              </li>
              <li>
                Programs to promote diversity, equity, and inclusion across all
                levels of the organization
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              ✅ Why Choose United Airlines ❓
            </h2>
            <p>
              United Airlines combines a rich heritage with a forward-looking
              approach to global aviation. Whether you’re a business traveler
              seeking efficiency, a leisure traveler craving comfort, or an
              environmentally conscious flyer, United offers:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                A robust global network ensuring you reach your destination with
                ease
              </li>
              <li>One of the newest and most fuel-efficient fleets in the sky</li>
              <li>
                Award-winning loyalty programs and top-tier customer service
              </li>
              <li>
                Industry-leading investments in sustainability and innovation
              </li>
            </ul>
            <p>
              Travel confidently with United — connecting people, communities, and
              cultures worldwide.
            </p>
          </div>
       
          <div className="space-y-4 mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900">
              A Seamless Travel Experience
            </h3>
            {/* <Image
              src="/placeholder-united.jpg"
              alt="United Airlines aircraft"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}
            <p className="text-lg leading-relaxed">
              Recently had the pleasure of flying with United Airlines, and must
              say, overall experience was highly satisfying. Below is an in-depth
              look at the highlights that made journey enjoyable and comfortable:
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              ✈️ Extensive Route Network and Travel Flexibility
            </h2>
            <p className="text-lg leading-relaxed">
              One of United Airlines’ standout features is its incredibly
              wide-reaching flight network. Whether flying within the U.S. or
              heading overseas to Asia, Europe, or Latin America, United offers an
              extensive selection of direct and connecting flights through its
              numerous hubs. This vast connectivity is further strengthened by its
              prominent role in the Star Alliance, allowing passengers to easily
              transfer across multiple airlines worldwide while enjoying shared
              perks like lounge access and coordinated schedules. This
              connectivity makes international and domestic travel straightforward
              and hassle-free.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🛫 Modern Fleet Offering Exceptional Comfort
            </h2>
            <Image
              src="/assets/image/comfort.png"
              alt="Modern Cabin"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-80"
            />
            <p>
              United’s commitment to maintaining a modern and comfortable fleet
              was evident throughout my trip. On my long-haul flight aboard a
              Boeing 787 Dreamliner, the experience was impressive:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>
                Ergonomically designed seats with generous legroom ensuring
                relaxed seating
              </li>
              <li>
                A notably quiet cabin environment that reduced travel fatigue
              </li>
              <li>
                Oversized windows featuring adjustable tinting for natural light
                control
              </li>
              <li>
                Advanced air filtration and circulation systems enhancing overall
                cabin comfort
              </li>
              <li>
                Polaris business class: lie-flat seats, premium bedding, privacy
                features
              </li>
            </ul>
            <p>
              For business class travelers, United’s Polaris cabin takes luxury to
              the next level. The lie-flat seats, premium bedding, and
              thoughtfully designed privacy features truly transform long flights
              into restful experiences, making it easier to arrive refreshed and
              ready.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              👩‍✈️ Attentive and Professional Crew
            </h2>
            <p className="text-lg leading-relaxed">
              Throughout every stage of my journey, from check-in to landing, the
              United Airlines staff demonstrated professionalism combined with
              genuine friendliness. Gate agents were efficient and courteous,
              helping ease the boarding process smoothly. Onboard, flight
              attendants were attentive without being overbearing, skillfully
              accommodating special requests and maintaining a warm atmosphere
              that enhanced the overall travel experience.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🎁 Rewarding MileagePlus Loyalty Program
            </h2>
            <p className="text-lg leading-relaxed">
              For frequent travelers, United’s MileagePlus program is a valuable
              asset. Earning miles is straightforward both on flights and via an
              extensive network of partner companies. The program’s elite tiers
              offer meaningful benefits such as priority boarding, complimentary
              upgrades, and access to exclusive lounges — perks that significantly
              enhance travel comfort. Additionally, redeeming miles is flexible,
              especially with access to Star Alliance flights worldwide, providing
              excellent value for loyal customers.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🎬 Engaging In-Flight Entertainment and Connectivity
            </h2>
            {/* <Image
              src="/placeholder-entertainment.jpg"
              alt="In-flight Entertainment"
              width={300}
              height={300}
              className="rounded-2xl shadow-md w-full h-70"
            /> */}
            <p className="text-lg leading-relaxed">
              United offers a diverse in-flight entertainment selection, featuring
              an impressive library of movies, television shows, and interactive
              games that cater to a wide range of tastes and age groups. The
              availability of high-speed Wi-Fi on many routes allowed me to stay
              productive and connected, whether working or chatting with friends
              and family. International flight dining exceeded expectations, with
              multiple meal choices accommodating various dietary needs and
              preferences, making the meal service both enjoyable and inclusive.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🧼 Impressive Cleanliness and Commitment to Safety
            </h2>
            <p className="text-lg leading-relaxed">
              Cabins were spotless, and safety measures were communicated and
              followed diligently, ensuring peace of mind throughout the flight.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">📱 Intuitive Mobile App</h2>
            <p className="text-lg leading-relaxed">
              Particularly notable was United’s dedication to maintaining clean
              and safe cabin environments — an essential factor in today’s travel
              landscape. The aircraft interiors were spotless, and all safety
              protocols were clearly communicated and diligently observed,
              instilling confidence and peace of mind throughout the journey.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              👥 User-Friendly Technology Enhancing the Travel Journey
            </h2>
            <p className="text-lg leading-relaxed">
              The United mobile app played a key role in streamlining my travel
              experience. Its intuitive interface made booking flights, checking
              in, and tracking real-time updates easy and efficient. The app also
              provided seamless management of MileagePlus accounts, including
              booking upgrades and handling boarding passes digitally — all of
              which added significant convenience and reduced stress.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">
              🌱 Pioneering Sustainability and Environmental Responsibility
            </h2>
            <p className="text-lg leading-relaxed">
              United Airlines stands out for its proactive approach to
              environmental sustainability. Their investments in Sustainable
              Aviation Fuel (SAF), support for electric and hydrogen-powered
              aircraft development, and clear targets for reducing carbon
              emissions show a genuine commitment to greener air travel. It’s
              inspiring to see such a major carrier leading industry efforts to
              protect the planet while maintaining exceptional service.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-medium">✨ Additional things</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>
                <strong>Polaris Lounges & Airport Services:</strong> Access to the
                comfortable and well-appointed Polaris lounges at major hubs made
                pre-flight wait times relaxing and productive.
              </li>
              <li>
                <strong>On-Time Performance:</strong> My flights operated smoothly
                with timely departures and arrivals, highlighting United’s
                operational efficiency.
              </li>
              <li>
                <strong>Special Assistance:</strong> United’s accommodation for
                passengers with disabilities or special needs was handled with
                care and professionalism, making the journey inclusive for all
                travelers.
              </li>
            </ul>
          </div>

          <div className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-medium mb-4 text-purple-700">📝 Final Verdict</h2>
            <p className="text-lg leading-relaxed">
              United Airlines delivers a well-rounded travel experience that
              balances extensive global reach with exceptional comfort, attentive
              service, and modern technology. Whether you are a business traveler
              seeking efficiency and productivity, or a leisure flyer looking for
              convenience and comfort, United makes it easy to travel with
              confidence. Their ongoing investments in sustainability and
              innovation further elevate the airline as a forward-thinking leader
              in aviation.
              <br />
              Highly recommend United Airlines for anyone planning a seamless and
              enjoyable journey across the globe.
            </p>
          </div>
        </main>
      </div>
         <div>
          <ContactSection name="United Airline" isSide={true} />

        </div>
      </div>
    </>
  );
}
