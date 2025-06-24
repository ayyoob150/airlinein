"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Page() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Head>
        <title>Delta AirLine | Company Overview</title>
        <meta
          name="description"
          content="Explore Delta Air Lines: History, Fleet, Branding, Alliances, Financials & Travel Experience."
        />
        <meta
          property="og:title"
          content="Delta Air Lines | Company Overview"
        />
        <meta
          property="og:description"
          content="Discover Delta's journey from crop-dusting to global aviation leader. Learn about its fleet, services, and accolades."
        />
        <meta property="og:image" content="/delta-og-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white text-gray-800 font-sans px-6 md:px-20 py-10 space-y-14 max-w-7xl mx-auto">
        {sections.map((section, idx) => (
          <motion.section key={idx} {...fadeUp} className="space-y-4">
            {section}
          </motion.section>
        ))}
      </main>
    </>
  );
}

const sections = [
  <>
    <div className="flex justify-start gap-6 items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
      ✈️ Delta Air Lines
    </h1>
    <Image src="https://d3.harvard.edu/platform-rctom/wp-content/uploads/sites/4/2015/12/delta-logo1.jpg" alt="Delta History" width={300} height={170} className="rounded h-[170px] w-[300px]" />
    </div>
    <p className="text-lg leading-relaxed">
      Delta Air Lines began its journey in 1924 as a humble crop-dusting service
      based in Macon, Georgia. By the 1940s, it had transformed into a
      full-fledged passenger airline and adopted the name Delta Air Lines.
      Today, Delta’s headquarters remain rooted in Atlanta, Georgia, with major
      operational hubs in cities including Atlanta, Minneapolis–St. Paul, and
      Detroit.
      <br />A pivotal moment in its history came in 2008 when Delta merged with
      Northwest Airlines—forming the world’s largest airline at that time.
    </p>
  </>,
  <>
    <h2 className="text-3xl font-semibold">🌍 Fleet Overview & Global Reach</h2>
    <Image
      src="https://image.cnbcfm.com/api/v1/image/107370758-1707399313990-gettyimages-1986207874-AFP_34HW3M3.jpeg?v=1726158829&w=1920&h=1080"
      alt="Fleet Overview"
      width={1200}
      height={600}
      className="rounded-2xl shadow-md h-70"
    />
    <p className="text-lg leading-relaxed">
      With a fleet of nearly 1,000 mainline aircraft, Delta operates one of the
      most expansive and modern lineups in commercial aviation. Key aircraft
      types include the Airbus A220, A330, and A350, as well as Boeing’s 717,
      757, and 767 models. Wide-body aircraft are primarily deployed on
      international and long-haul routes.
      <br />
      <br /> Delta connects travelers to over 280 destinations worldwide and
      operates more than 4,000 flights each day—solidifying its place as a
      global aviation powerhouse.
    </p>
  </>,
  <>
    <h2 className="text-3xl font-semibold">
      🎨 Branding & Aircraft Livery Evolution
    </h2>
    <Image
      src="https://image.cnbcfm.com/api/v1/image/107370758-1707399313990-gettyimages-1986207874-AFP_34HW3M3.jpeg?v=1726158829&w=1920&h=1080"
      alt="Fleet Overview"
      width={1200}
      height={600}
      className="rounded-2xl shadow-md h-70"
    />
    <p>Delta’s brand identity has evolved significantly over the decades:</p>
    <ul className="list-disc list-inside text-lg leading-relaxed">
      <li>Widget Era (1962–1997)</li>
      <p className="text-sm">
        Introduced the iconic “widget” triangle logo that became synonymous with
        the brand.
      </p>
      <li>Ron Allen Livery (1997–2000)</li>
      <p className="text-sm">
        A short-lived, modernized design that marked a transitional period.
      </p>
      <li>Colors in Motion (2000–2007)</li>
      <p className="text-sm">
        Featured a sleek “Euro-white” fuselage and a dynamic wave, earning it
        the nickname “Wavy Gravy.”
      </p>
      <li>Onward and Upward (2007–present)</li>
      <p className="text-sm">
        A return to the classic widget with a bold blue belly and under-fuselage
        “Delta” branding added in 2015.
      </p>
    </ul>
  </>,
  <>
    <h2 className="text-3xl font-semibold">🧭 Services & Global Alliances</h2>
    <Image
      src="https://image.cnbcfm.com/api/v1/image/107370758-1707399313990-gettyimages-1986207874-AFP_34HW3M3.jpeg?v=1726158829&w=1920&h=1080"
      alt="Fleet Overview"
      width={1200}
      height={600}
      className="rounded-2xl shadow-md h-70"
    />
    <p className="text-lg leading-relaxed">
      As a founding member of the SkyTeam global alliance, Delta offers seamless
      connectivity with partner airlines around the world. Its SkyMiles loyalty
      program, launched in 1981, remains highly competitive—miles never expire
      and can be earned through flights, credit card usage, and retail
      partnerships.
      <br />
      <br />
      Delta’s in-house maintenance division, Delta TechOps, services both its
      own fleet and over 150 third-party operators. With nearly 10,000
      employees, it’s one of the largest MRO (Maintenance, Repair & Overhaul)
      providers globally.
    </p>
  </>,
  <>
    <h2 className="text-3xl font-semibold">💰 Financial Performance</h2>
    <Image
      src="https://image.cnbcfm.com/api/v1/image/107370758-1707399313990-gettyimages-1986207874-AFP_34HW3M3.jpeg?v=1726158829&w=1920&h=1080"
      alt="Fleet Overview"
      width={1200}
      height={600}
      className="rounded-2xl shadow-md h-70"
    />
    <p className="text-lg leading-relaxed">
      In 2023, Delta reported $58 billion in operating revenue, with passenger
      services contributing approximately $48.9 billion. Looking ahead, the
      airline expects to post over $6 billion in pre-tax earnings for 2025, with
      projected earnings per share surpassing $7.35.
    </p>
    <h5>Delta’s business strategy centers on:</h5>
    <p>
      • Expanding transatlantic and premium routes
      <br />
      • Maintaining capacity discipline
      <br />
      • Offering an elevated travel experience across all cabins
      <br />
      <br />
      <br />
      In Q2 2024 alone, the company generated $16.7 billion in revenue with
      EBITDA of $4.7 billion.
    </p>
  </>,
  <>
    <h2 className="text-3xl font-semibold">⚠️ Challenges</h2>
    <p className="text-lg leading-relaxed">
      In July 2024, Delta faced a major disruption due to a global IT outage
      linked to CrowdStrike software, which grounded approximately 7,000 flights
      and impacted 1.3 million travelers, incurring losses estimated at $500
      million. This event triggered a U.S. Department of Transportation
      investigation and pending legal action.
      <br />
      <br />
      As of mid-2025, the airline has moderated its growth outlook in response
      to economic volatility and trade-related pressures—though its
      international business continues to perform strongly.
    </p>
  </>,
  <>
    <h2 className="text-3xl font-semibold">🏅 Recognition & Awards</h2>
    <p>Delta has consistently earned top honors for its reliability, service, and innovation. It was ranked the #1 U.S. airline by The Points Guy (TPG) for the seventh consecutive year in 2025. Cirium also awarded Delta the Platinum Award for the best on-time performance among North American carriers.
<br/><br/>Delta flight crews have become known for their professionalism and heartfelt service, often celebrated on social media under the banner of the “Delta Difference.”
</p>
    <ul className="list-disc list-inside text-lg leading-relaxed">
      <li>#1 U.S. Airline by The Points Guy (7 years straight)</li>
      <li>Cirium Platinum Award for punctuality</li>
      <li>Known for "Delta Difference"—crew professionalism and care</li>
    </ul>
  </>,
  <>
    <h2 className="text-3xl font-semibold">✈️ Recent Developments</h2>
    <ul className="list-disc list-inside text-lg leading-relaxed">
      <li>Signed a codeshare and joint venture with Riyadh Air, enhancing connectivity between the U.S. and Saudi Arabia</li>
      <li>Launching non-stop flights from Atlanta to Marrakech in October 2025</li>
      <li>Introduced cultural menu options like Vegemite on Australia-bound flights, especially aboard the Airbus A350-900</li>
      <li>Celebrated its 100th anniversary with a custom-painted centennial aircraft and global gala event</li>
    </ul>
  </>,
  <>
    <h2 className="text-3xl font-semibold">✅ Delta At A Glance</h2>
    <p className="text-lg leading-relaxed">
      Delta Air Lines is a global leader in air travel, known for operational excellence, premium service, and industry innovation. With a century of legacy, a robust fleet, and award-winning service, Delta continues to shape the future of aviation—balancing growth, customer satisfaction, and strategic global partnerships.
    </p>
  </>,
  <>
    <h2 className="text-3xl font-semibold">
      👍 Strengths & 👎 Areas of Improvement
    </h2>
    <div className="text-lg leading-relaxed">
      <p>
        <strong>Strengths:</strong>
      </p>
      <ul className="list-disc list-inside">
        <li>Exceptional flight crew service</li>
        <li>Efficient disruption handling</li>
        <li>Comfortable cabins and clean interiors</li>
      </ul>
      <p className="mt-4">
        <strong>Areas to Improve:</strong>
      </p>
      <ul className="list-disc list-inside">
        <li>Occasional crisis management inconsistency</li>
        <li>Premium pricing not always matched by economy service</li>
      </ul>
    </div>
  </>,
  <>
    <h2 className="text-3xl font-semibold">
      🧳 Travel Experience & Final Verdict
    </h2>
    <p className="text-lg leading-relaxed">
      Delta delivers a premium, dependable journey with attentive crew and
      modern amenities. It’s a top choice for domestic and international
      travelers—despite higher pricing.
    </p>
  </>,
  <>
      <main className="bg-white text-gray-800 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800">Delta Air Lines</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">A Top-Ranked U.S. Airline Delivering Exceptional Travel Experiences</p>
        <div className="w-full h-64 md:h-96 relative mx-auto">
          <Image src="/placeholder-hero.jpg" alt="Delta Airlines" layout="fill" objectFit="cover" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Reputation & Accolades */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">⭐ Reputation & Accolades</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Top-Ranked U.S. Airline for 7 years by The Points Guy (2025)</li>
          <li>J.D. Power recognition for Premium Economy satisfaction</li>
          <li>Skytrax: Best Airline Staff in North America</li>
        </ul>
      </section>

      {/* Strengths */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-green-700">👍 Strengths</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold">1. Exceptional In-Flight Care & Crew Attitude</h3>
            <p className="text-lg mt-2">Passengers consistently praise Delta’s crew for their kindness and professionalism. A notable example includes helping a passenger through a panic attack. Complimentary water and snacks add a pleasant touch.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">2. Reliable Flight Operations & Disruption Handling</h3>
            <p className="text-lg mt-2">Delta’s proactive handling of delays and emergencies earns them customer loyalty. Rebookings and support are handled smoothly, as illustrated by a Reddit user's praise.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">3. Comfortable Cabins & Modern Entertainment</h3>
            <p className="text-lg mt-2">Passengers appreciate generous legroom, clean interiors, and advanced seat-back entertainment—even in standard economy class.</p>
          </div>
        </div>
      </section>

      {/* Areas That Could Improve */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-red-700">👎 Areas That Could Improve</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">1. Inconsistent Crisis Response</h3>
            <p className="text-lg mt-2">Rare reports of underwhelming support during unusual incidents exist, although Delta often follows up with apologies and compensation.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">2. Pricing & Value Disparities</h3>
            <p className="text-lg mt-2">Delta’s premium pricing can feel high compared to budget carriers, and a few users mentioned issues with online check-in or communication.</p>
          </div>
        </div>
      </section>

      {/* Overall Travel Experience */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">🧳 Overall Travel Experience</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Comfort:</strong> Spacious economy seating and regular snack/beverage rounds</li>
          <li><strong>Customer Service:</strong> Attentive crew and helpful support during delays</li>
          <li><strong>Reliability:</strong> Solid on-time performance and efficient service recovery</li>
          <li><strong>Premium Offerings:</strong> Delta One Suites and Comfort+ provide added luxury</li>
        </ul>
      </section>

      {/* Final Verdict */}
      <section className="bg-gray-50 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-purple-700">📝 Final Verdict</h2>
        <p className="text-lg leading-relaxed">
          Delta Air Lines blends comfort, professionalism, and operational reliability. It’s an excellent choice for both domestic and international travelers seeking a quality airline experience. Despite a few minor drawbacks, its consistent service makes it a standout in the industry.
        </p>
      </section>
    </main>
  </>
];
