import Image from 'next/image';
import ContactSection from "@/components/ContactSection";


export default function SpiritAirlinesPage() {
  return (
    <div  className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <main className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px]">

      <div className="space-y-6">
        <div className="flex justify-between gap-6 items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                Spirit Airline
              </h1>
              <Image
                src="/assets/home/spirit.png"
                alt="sprit history"
                width={250}
                height={90}
                className="rounded h-[90px] w-[150px] sm:w-[220px] px-10 py-6 shadow bg-[#FFEC00]"
              />
            </div>
        {/* <h1 className="text-4xl md:text-6xl font-medium text-slate-500">✈️ Spirit Airlines: Company Overview & Network</h1>
        <Image src="/assets/home/airline10.png" alt="Spirit Airlines Overview" width={1200} height={220} className="rounded-2xl shadow-md h-[220px] object-cover w-full" /> */}
        <p className="text-lg leading-relaxed">
          Spirit Airlines is a leading ULCC based in Florida. With a fleet of 194 Airbus aircraft, it serves over 90 destinations in the Americas. Crew bases are located in ATL, ORD, DFW, FLL, LAS, MIA, EWR, and MCO.
        </p>
      </div>

      <div className="space-y-6 text-secondaryblue">
        <h2 className="text-2xl font-medium">💰 Business Model & Strategy</h2>
        <Image src="/placeholder-strategy.jpg" alt="Spirit Business Model" width={1200} height={600} className="rounded-2xl shadow-md" />
        <p className="text-lg leading-relaxed">
          Spirit pioneered the ULCC model in North America, offering low base fares and a la carte services. Major revenue drivers include bag fees, seat selection, and programs like the $9 Fare Club and Saver$ Club.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">🛫 Operational Challenges & Financial Performance</h2>
        <Image src="/placeholder-performance.jpg" alt="Financial Performance" width={1200} height={600} className="rounded-2xl shadow-md" />
        <p className="text-lg leading-relaxed">
          Spirit saw losses from 2020–2024 due to the pandemic, inflation, and engine-related groundings. Capacity was cut 20–24% to stabilize finances.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">📉 Chapter 11 Bankruptcy & Restructuring</h2>
        <Image src="/placeholder-bankruptcy.jpg" alt="Chapter 11 Spirit" width={1200} height={600} className="rounded-2xl shadow-md" />
        <p className="text-lg leading-relaxed">
          Spirit filed for Chapter 11 in Nov 2024. It emerged in March 2025 after securing $350M in equity and converting $795M debt to equity. Ownership shifted to firms like Pimco and Ares.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">🔄 Leadership & Operational Reset</h2>
        <Image src="/placeholder-leadership.jpg" alt="Spirit Leadership Changes" width={1200} height={600} className="rounded-2xl shadow-md" />
        <p className="text-lg leading-relaxed">
          CEO Dave Davis joined in April 2025. Spirit deferred new deliveries, cut costs by selling aircraft, and reduced staffing. Fitch gave a CCC+ upgrade despite 8–10× EBITDAR debt ratios.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">🧭 Strategy Pivot & Outlook</h2>
        <Image src="/placeholder-strategy-shift.jpg" alt="Strategic Direction" width={1200} height={600} className="rounded-2xl shadow-md" />
        <p className="text-lg leading-relaxed">
          Spirit is evolving into a value-focused carrier with Go Comfy seating and Go Big fares. Its Free Spirit® program is enhanced, and MIA is being developed as a strategic hub.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">📊 Financial Outlook & Analyst View</h2>
        <Image src="/placeholder-analytics.jpg" alt="Financial Forecast" width={1200} height={600} className="rounded-2xl shadow-md" />
        <p className="text-lg leading-relaxed">
          Spirit targets profitability by 2026. Execution risks remain high, with pricing pressure and fleet issues ongoing. Analysts expect modest recovery if strategies succeed.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">✅ Bottom Line</h2>
        <p className="text-lg leading-relaxed">
          Spirit Airlines has reemerged as a leaner and more strategic ULCC. With new leadership, cost control, and a value-oriented pivot, it aims to regain profitability while staying independent in a changing airline landscape.
        </p>
      </div>

      <div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-medium text-slate-600">✈️ Spirit Airlines: A Smart Choice</h1>
        <Image src="/placeholder-cover.jpg" alt="Spirit Airlines" width={1200} height={600} className="rounded-xl shadow-md" />
        <p className="text-lg leading-relaxed">
          Spirit Airlines is one of America’s few ultra-low-cost carriers (ULCCs), offering no-frills, affordable travel across 90+ destinations. If you're flexible and budget-conscious, here's why Spirit may be your ideal choice.
        </p>
      </div>

      {[
        {
          title: '1. ✈️ Ultra-Affordable Travel – True Budget Flying',
          image: '/placeholder-affordable.jpg',
          text: `Spirit’s pricing model prioritizes low fares. Base fares can be under $100 with a personal item included—great for light packers. All extras like bags and meals are optional.`,
          quote: '“I flew from Orlando to Chicago and back for under $50 with just a backpack.”'
        },
        {
          title: '2. 🛩️ Young, Modern Airbus Fleet',
          image: '/placeholder-fleet.jpg',
          text: `Spirit’s Airbus-only fleet has an average age of under 7 years. A320neos are fuel-efficient and quieter with refreshed interiors.`,
          quote: '“The Big Front Seat felt premium without the hefty price tag.”'
        },
        {
          title: '3. 💺 Big Front Seat – Premium Comfort, Budget Price',
          image: '/placeholder-seating.jpg',
          text: `Enjoy first-class-style comfort starting around $25. Wider seats and up to 36" pitch. No frills, just space.`,
          quote: '“90% of first class for 10% of the cost.”'
        },
        {
          title: '4. ⏱️ On-Time Performance Improvements',
          image: '/placeholder-ontime.jpg',
          text: `Improved scheduling and handling have placed Spirit near the top of DOT on-time rankings in recent months.`,
          quote: '“We took off early and landed ahead of schedule.”'
        },
        {
          title: '5. 💵 Transparent Pricing – Pay Only for What You Use',
          image: '/placeholder-pricing.jpg',
          text: `Spirit’s website clearly breaks down fees. Saver$ Club gives added discounts on fares and extras.`,
          quote: '“You see what you pay for—no tricks.”'
        },
        {
          title: '6. 🌱 Eco-Conscious Operations',
          image: '/placeholder-eco.jpg',
          text: `Newer aircraft and high-density seating lower emissions per passenger.`,
          quote: '“Surprisingly green for short trips.”'
        },
        {
          title: '7. 🎁 Free Spirit Loyalty Program – Quick to Reward',
          image: '/placeholder-loyalty.jpg',
          text: `Earn points based on spend. Easy redemptions and no expiration if you stay active.`,
          quote: '“Booked a free flight after just a few trips.”'
        }
      ].map((section, idx) => (
        <div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-medium text-slate-700">{section.title}</h2>
          <Image src={section.image} alt={section.title} width={1200} height={600} className="rounded-xl shadow" />
          <p className="text-lg leading-relaxed">{section.text}</p>
          <blockquote className="italic text-gray-600 border-l-4 pl-4 border-slate-400">{section.quote}</blockquote>
        </div>
      ))}

      <div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-medium text-slate-700">✅ Final Take: Spirit Delivers Value</h2>
        <p className="text-lg leading-relaxed">
          Spirit Airlines gives you what you pay for—affordable, customizable flying. Add a Big Front Seat or join Saver$ Club and enjoy a trip that competes with far more expensive carriers.
        </p>
      </div>
    </main>
     <div>
        <ContactSection name="Spirit" isSide={true}/>

      </div>
    </div>
  );
}
