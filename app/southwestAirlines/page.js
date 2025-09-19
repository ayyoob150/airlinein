import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
            <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
                <div className="flex justify-between gap-6 items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                        Southwest Airlines
                    </h1>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Southwest_Airlines_logo_2014.svg/1280px-Southwest_Airlines_logo_2014.svg.png"
                        alt="Southwest Airlines History"
                        width={250}
                        height={90}
                        className="rounded h-[90px] w-[150px] sm:w-[280px] bg-white object-contain pl-2"
                    />
                </div>
                <section className="text-">
                    <p className="text-lg md:text-xl max-w-4xl mx-auto">
                        Southwest Airlines has carved out a unique space in the U.S. aviation industry as a trailblazer in low-cost air travel while consistently maintaining a high level of customer satisfaction. Headquartered in Dallas, Texas, Southwest is the largest domestic airline in the United States based on the number of passengers carried. Known for its “bags fly free” policy, no change fees, open seating, and friendly crew, the airline has become a favorite among budget-conscious travelers, families, and business flyers alike.
                    </p>
                    <Image src="/assets/image/southwest.webp" alt="Spirit Business Model" width={1200} height={600} className=" h-100 mt-5 rounded-2xl shadow-md" />
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">🛫 Company Overview</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Founded: March 15, 1967 (as Air Southwest Co.)</li>
                        <li>Began Operations: June 18, 1971</li>
                        <li>Headquarters: Dallas Love Field, Dallas, Texas</li>
                        <li>Fleet Size: Over 800 Boeing 737 aircraft</li>
                        <li>Destinations: 120+ across the United States, Mexico, Central America, and the Caribbean</li>
                        <li>Employees: Over 70,000 (as of 2025)</li>
                        <li>Ticker Symbol: LUV (NYSE)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">🌟 Key Features That Make Southwest Stand Out</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold">✅ 1. No Hidden Fees</h3>
                            <p>Two free checked bags per passenger. No change fees (only pay the fare difference). No cancellation fees (funds go into your travel credit). Transparency builds trust.</p>
                        </div>
                        <div>
                            <h3 className="font-bold">✅ 2. Open Seating Policy</h3>
                            <p>Boarding in groups (A, B, C), passengers choose any available seat. EarlyBird Check-In and Business Select fares can secure earlier boarding.</p>
                        </div>
                        <div>
                            <h3 className="font-bold">✅ 3. Free Inflight Entertainment</h3>
                            <p>Free live TV, movies, and messaging. Wi-Fi for browsing is available for a fee, streaming is free.</p>
                        </div>
                        <div>
                            <h3 className="font-bold">✅ 4. Rapid Rewards Loyalty Program</h3>
                            <ul className="list-disc list-inside">
                                <li>Points never expire (with activity every 24 months)</li>
                                <li>No blackout dates</li>
                                <li>Easy redemption of points for any available seat</li>
                                <li>Companion Pass</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">✅ 5. Customer-Centric Culture</h3>
                            <p>Consistently high rankings for satisfaction, employee engagement, humor, and hospitality.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">🌍 Destinations & Route Network</h2>
                    <p>Serves 120+ destinations in the U.S., Mexico, Central America, and the Caribbean.</p>
                    <p>Key Hubs: DAL, MDW, DEN, LAS, PHX, BWI, HOU</p>
                    <p>Point-to-point network allows for direct flights and reduced travel time.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">✈️ Fleet Details</h2>
                    <p>World’s largest operator of the Boeing 737, including:</p>
                    <ul className="list-disc list-inside">
                        <li>Boeing 737-700</li>
                        <li>Boeing 737-800</li>
                        <li>Boeing 737 MAX 8</li>
                    </ul>
                    <p>Benefits: Streamlined maintenance, cost savings, and reliability.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">🔄 Fare Types</h2>
                    <table className="w-full border border-gray-300 text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-2 py-1 text-left">Fare Type</th>
                                <th className="border px-2 py-1 text-left">Includes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-2 py-1">Wanna Get Away</td>
                                <td className="border px-2 py-1">Lowest fare, limited refundability, 2 free bags</td>
                            </tr>
                            <tr>
                                <td className="border px-2 py-1">Wanna Get Away+</td>
                                <td className="border px-2 py-1">Same as above + transferable flight credits</td>
                            </tr>
                            <tr>
                                <td className="border px-2 py-1">Anytime</td>
                                <td className="border px-2 py-1">Fully refundable, priority boarding</td>
                            </tr>
                            <tr>
                                <td className="border px-2 py-1">Business Select</td>
                                <td className="border px-2 py-1">Refundable, priority check-in, early boarding, free premium drink</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">💚 Sustainability Efforts</h2>
                    <ul className="list-disc list-inside">
                        <li>Goal: Net-zero carbon emissions by 2050</li>
                        <li>Investing in sustainable aviation fuel (SAF)</li>
                        <li>Fleet modernization with fuel-efficient aircraft</li>
                        <li>Waste reduction and recycling initiatives</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">🏆 Awards & Recognition</h2>
                    <ul className="list-disc list-inside">
                        <li>J.D. Power Award for Customer Satisfaction</li>
                        <li>Forbes: America's Best Employers</li>
                        <li>Glassdoor: Best Places to Work</li>
                        <li>AirlineRatings.com Top 10 Airlines in the World (2024)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">👩‍✈️ Employee Culture</h2>
                    <p>Southwest places its people first. Employees are known for their enthusiasm, humor, and hospitality. Core values include respect, integrity, and fun.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">📱 Technology & Booking Experience</h2>
                    <ul className="list-disc list-inside">
                        <li>User-friendly website and mobile app</li>
                        <li>Real-time flight status updates</li>
                        <li>Mobile boarding passes</li>
                        <li>Rapid Rewards account management</li>
                        <li>Bookings only through official website/app</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">🧳 Travel Flexibility & Family-Friendly Policies</h2>
                    <ul className="list-disc list-inside">
                        <li>Family boarding for kids under 6</li>
                        <li>Lap child policy</li>
                        <li>Refundable and transferable credits</li>
                        <li>No rebooking penalties</li>
                    </ul>
                </section>

                <section className="text-">
                    <h2 className="text-2xl font-semibold mb-4">✨ Why Choose Southwest Airlines?</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        Southwest Airlines is more than just a budget airline — it’s a brand that has built trust through transparency, consistency, and genuine hospitality. Whether you’re flying for business, leisure, or family reasons, Southwest delivers a balance of affordability, comfort, and reliability. With decades of strong performance, loyal customers, and a forward-thinking approach, it remains one of the top choices for travelers across America.
                    </p>
                </section>
                <section className="text-">
                    <h1 className="text-2xl font-bold mb-4">🌟Flying High with Heart, Value & Service ✈️💛</h1>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto">
                        When it comes to affordable air travel in the United States, Southwest Airlines consistently soars above the competition by combining low fares, exceptional customer service, and unmatched flexibility. More than just a budget airline, Southwest has cultivated a reputation for making travel feel personal, reliable, and even fun — earning the loyalty of millions of travelers for over five decades.
                    </p>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto mt-4">
                        Whether you're a frequent flyer or planning your first trip, Southwest offers a flying experience that is refreshingly different and consistently rewarding.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">🛫 A Legacy of Trust and Affordability</h2>
                    <p>Since beginning operations in 1971, Southwest Airlines has remained true to its mission of providing friendly, reliable, and low-cost air travel. As the largest domestic carrier in the United States by passengers flown, it continues to prove that you don’t have to sacrifice service to enjoy affordable fares.</p>
                    <p className="mt-2">Southwest’s simple and honest fare structure means no hidden fees, and their well-known “Bags Fly Free” policy allows every passenger to check two bags at no additional cost—a rarity in today’s airline industry.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">💼 A Traveler’s Favorite: No Change Fees, Ever</h2>
                    <p>Southwest is beloved by travelers for its unmatched flexibility. Need to change your flight? Unlike most airlines, Southwest doesn’t charge a fee for modifications—you simply pay the fare difference, if any. If you cancel your trip, your funds are preserved as travel credits. This level of freedom is ideal for families, business travelers, and spontaneous adventurers alike.</p>
                    <p className="mt-2">This no-stress, no-gimmick policy empowers passengers to book with confidence—knowing that life happens, and plans can change.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">🛬 Comfortable, Efficient, and Friendly Flying Experience</h2>
                    <Image src="/assets/image/friendly.webp" alt="Spirit Business Model" width={1200} height={600} className=" h-100 mt-5 mb-5 rounded-2xl shadow-md" />
                    <ul className="list-disc list-inside space-y-1">
                        <li>Spacious cabins with leather seating and generous legroom</li>
                        <li>A relaxed and open seating policy, letting passengers choose their preferred seat</li>
                        <li>Friendly, witty, and professional crew members who bring a human touch to every flight</li>
                        <li>Clean, well-maintained aircraft, all from the Boeing 737 family, ensuring consistency and reliability</li>
                    </ul>
                    <p className="mt-2">Flying with Southwest feels less like a transaction and more like a welcoming journey—where passengers are treated like people, not just seat numbers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">🎁 Free Entertainment & Perks</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Free live TV and movies</li>
                        <li>Free in-app messaging</li>
                        <li>Low-cost Wi-Fi for browsing and email</li>
                        <li>Snacks and soft drinks served with signature Southwest hospitality</li>
                    </ul>
                    <p className="mt-2">Even without seatback screens, passengers can enjoy hours of content without paying a premium.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">🌍 A Wide & Growing Network</h2>
                    <p>Southwest offers service to over 120 destinations across the United States and beyond, including:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Major U.S. cities like New York, Los Angeles, Chicago, and Miami</li>
                        <li>Leisure favorites such as Las Vegas, Orlando, and Honolulu</li>
                        <li>International destinations including Mexico, Central America, and the Caribbean</li>
                    </ul>
                    <p className="mt-2">With major focus cities and hubs in Dallas Love Field (DAL), Denver (DEN), Chicago Midway (MDW), and others, Southwest’s point-to-point network makes flying direct and efficient—cutting down travel time for many routes.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">✈️ Southwest Fleet: Safe, Reliable & Uniform</h2>
                    <p>Southwest operates the world’s largest all-Boeing 737 fleet, including:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Boeing 737-700</li>
                        <li>Boeing 737-800</li>
                        <li>Boeing 737 MAX 8</li>
                    </ul>
                    <p className="mt-2">This single-aircraft-type model improves efficiency, reduces maintenance costs, and enhances training for pilots and crew, which translates into fewer delays and more reliable service for passengers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">💳 Rapid Rewards®: A Loyalty Program That Truly Rewards</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>No blackout dates for reward travel</li>
                        <li>Points never expire as long as your account remains active</li>
                        <li>Points are earned based on fare paid, not distance flown</li>
                        <li>Companion Pass lets a companion fly free for over a year</li>
                    </ul>
                    <p className="mt-2">Whether you’re a casual traveler or a business road warrior, Rapid Rewards makes your loyalty count.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">🌱 Sustainability and Social Responsibility</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Committed to net-zero carbon emissions by 2050</li>
                        <li>Investing in sustainable aviation fuel (SAF)</li>
                        <li>Reducing onboard waste and improving fuel efficiency</li>
                        <li>Employee diversity, community service, and charitable partnerships</li>
                    </ul>
                    <p className="mt-2">Their commitment to “doing the right thing” extends from the cabin to the community and planet.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">👨‍👩‍👧‍👦 Family- and Business-Friendly Policies</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Family Boarding between Groups A and B</li>
                        <li>Lap infant policies with no additional charge</li>
                        <li>Easy rebooking and cancellation tools</li>
                        <li>EarlyBird Check-In and Business Select for priority access</li>
                    </ul>
                    <p className="mt-2">With plenty of flexibility and care, Southwest proves that low-cost doesn't mean low-value.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">🏆 Awards and Recognition</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>#1 in Customer Satisfaction among economy carriers (J.D. Power)</li>
                        <li>Named to Forbes’ America’s Best Employers</li>
                        <li>Glassdoor’s Best Places to Work</li>
                        <li>AirlineRatings.com: Top 10 safest and most customer-friendly airlines</li>
                    </ul>
                    <p className="mt-2">These awards reflect not only how customers feel, but how well Southwest treats its own employees—creating a ripple effect of positivity throughout the airline.</p>
                </section>

                <section className="text-">
                    <h2 className="text-2xl font-semibold mb-4">💬 Final Verdict: Why Southwest Airlines is a Top Choice for Smart Travelers</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        Southwest Airlines continues to set the gold standard for low-cost air travel in the U.S. market by blending budget-friendly fares, flexible policies, reliable operations, and genuine customer service. Whether you're planning a quick domestic trip, a beach escape to Mexico, or a family vacation to Orlando, Southwest makes flying simple, honest, and enjoyable.
                    </p>
                    <p className="text-lg max-w-3xl mx-auto mt-4">
                        In a world where air travel can feel complicated and expensive, Southwest is a refreshing reminder that great service doesn’t have to come at a high price.
                    </p>
                </section>
            </div>
            <div>
                <ContactSection name="Southwest Airlines" isSide={true} />

            </div>
        </div>
    );
}
