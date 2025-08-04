import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
            <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
                <div className="mb-10">
              <div className="flex justify-between gap-6 items-center">
                                 <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                                     Alaska Airlines
                                 </h1>
                                 <Image
                                     src="data:image/png;base64,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"
                                     alt="Alaska Airlines History"
                                     width={250}
                                     height={90}
                                     className="rounded h-[90px] w-[150px] sm:w-[280px] bg-white px-4 object-"
                                 />
                             </div>
                    
                </div>
                <p className="text- text-lg ">
                        Alaska Airlines isn’t just an airline—it’s a trusted travel partner that combines West Coast hospitality with impressive operational performance.
                    </p>
                <p className="-mt-4">Alaska Airlines is a top-rated American carrier known for its exceptional customer service, reliable on-time performance, and strong West Coast presence. Headquartered in Seattle, the airline operates over 120 destinations across the U.S., Mexico, Canada, and Central America, with major hubs in Seattle, Portland, Los Angeles, and Anchorage. As a member of the Oneworld Alliance, Alaska offers seamless global connectivity and a highly rewarding Mileage Plan loyalty program. With a modern fleet, eco-conscious initiatives aimed at achieving net-zero emissions by 2040, and a focus on comfort and hospitality, Alaska Airlines consistently delivers a travel experience that is both efficient and heartfelt.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">📌 Basic Information</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Full Name:</strong> Alaska Airlines, Inc.</li>
                        <li><strong>IATA Code:</strong> AS</li>
                        <li><strong>ICAO Code:</strong> ASA</li>
                        <li><strong>Callsign:</strong> ALASKA</li>
                        <li><strong>Founded:</strong> April 14, 1932 (as McGee Airways)</li>
                        <li><strong>Headquarters:</strong> SeaTac, Washington, United States</li>
                        <li><strong>Parent Company:</strong> Alaska Air Group</li>
                        <li><strong>Main Hubs:</strong> SEA, PDX, LAX, SFO, ANC</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">✈️ Fleet Overview</h2>
                    <p className="mb-2">Alaska Airlines operates a modern and fuel-efficient fleet comprising primarily of Boeing and Embraer aircraft:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Boeing 737-800 / 737-900 / MAX 9 – Used for short to long-haul domestic and international flights.</li>
                        <li>Embraer E175 (via regional partner Horizon Air & SkyWest) – Serves regional routes with comfort and flexibility.</li>
                        <li>💡 Investment in Boeing 737 MAX for improved fuel efficiency and reduced environmental impact.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🌍 Route Network and Destinations</h2>
                    <p className="mb-2">Alaska Airlines connects travelers to over 120 destinations including:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>United States (West Coast, Alaska, Hawaii, Midwest, East Coast)</li>
                        <li>Mexico, Canada, Costa Rica, Belize</li>
                        <li><strong>Focus Cities:</strong> San Diego (SAN), San Jose (SJC), Boise (BOI)</li>
                    </ul>
                    <p className="mt-2">🛫 <strong>Key Partnerships:</strong> Oneworld Alliance, Codeshares with British Airways, Qatar Airways, Japan Airlines, American Airlines</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🛫 Cabin Classes and Onboard Experience</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 border rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-2">🟦 Main Cabin (Economy)</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Leather seats with 31–32” pitch</li>
                                <li>Complimentary snacks & drinks</li>
                                <li>Streaming entertainment</li>
                                <li>Power outlets at most seats</li>
                            </ul>
                        </div>
                        <div className="p-4 border rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-2">🟩 Premium Class</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Extra legroom</li>
                                <li>Early boarding</li>
                                <li>Complimentary alcoholic beverages</li>
                                <li>Priority overhead bin space</li>
                            </ul>
                        </div>
                        <div className="p-4 border rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-2">🟥 First Class</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>2x2 seating configuration</li>
                                <li>Chef-curated meals</li>
                                <li>Lounge access</li>
                                <li>Generous baggage allowance</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-4">🎧 Free texting and streaming-ready Wi-Fi available in all cabins.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">💼 Mileage Plan: Award-Winning Loyalty Program</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Earn miles based on distance flown</li>
                        <li>1 mile per mile flown</li>
                        <li>Elite tiers: MVP, MVP Gold, MVP Gold 75K, MVP Gold 100K</li>
                        <li>Redeem with Oneworld and other global carriers</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🌱 Sustainability Commitment</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Net-zero carbon emissions by 2040</li>
                        <li>Investment in sustainable aviation fuel (SAF)</li>
                        <li>Partnership with ZeroAvia for hydrogen-electric aircraft</li>
                        <li>Onboard recycling and reduced plastic</li>
                    </ul>
                    <p className="mt-2">🟢 “Fly Greener” is not just a slogan—it’s an operational mission.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🏆 Awards & Recognition</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>#1 Traditional Carrier – J.D. Power (2021, 2022)</li>
                        <li>Best Airline Rewards Program – U.S. News & World Report</li>
                        <li>Top Employer in Washington State and Oregon</li>
                        <li>Low cancellations and delays, high punctuality</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">💬 Why Travelers Choose Alaska Airlines</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Warm, efficient service</li>
                        <li>Clean and modern planes</li>
                        <li>Great value for money</li>
                        <li>Flexible ticketing</li>
                        <li>Seamless check-in to landing experience</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">📲 Tech & Innovation</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Mobile app & web check-in</li>
                        <li>Self-service bag tag kiosks</li>
                        <li>Flyways AI-powered flight optimization</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🧭 The Alaska Airlines Advantage</h2>
                    <p>Whether you’re flying for business, vacationing in Hawaii, or heading to a ski resort in the Rockies, Alaska Airlines offers a travel experience that’s safe, comfortable, and customer-first. With its Pacific Northwest roots, it brings a personal, thoughtful touch to air travel—while connecting people across the globe through its expansive partnerships.</p>
                    <p className="mt-4 text-blue-700 underline"><a href="https://www.alaskaair.com" target="_blank" rel="noopener noreferrer">🔗 Visit Official Website</a></p>
                </section>
                <div className="mb-12 text-">
                    <h1 className="text-xl md:text-2xl font-bold mb-4">🌟 Alaska Airlines Review: Fly the Friendly Skies of the Pacific Northwest ✈️🌲</h1>
                    <p className="text-lg md:text-xl">
                        When it comes to dependable service, genuine hospitality, and a strong sense of community and sustainability, Alaska Airlines stands out as one of America’s finest airlines.
                    </p>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">💺 Comfort, Cleanliness & Cabin Experience</h2>
                    <p className="mb-2">Alaska Airlines consistently delivers a comfortable and pleasant in-flight experience that punches well above its weight:</p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">✈️ Cabin Options for Every Traveler</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Main Cabin:</strong> Spacious seating, adjustable headrests, USB charging ports.</li>
                        <li><strong>Premium Class:</strong> Extra legroom, complimentary cocktails, early boarding.</li>
                        <li><strong>First Class:</strong> Wide leather seats, gourmet meals, lounge access, priority boarding.</li>
                    </ul>
                    <p className="mt-2">✅ Cabins are clean, well-maintained, and thoughtfully designed—with subtle touches that reflect the airline’s Pacific Northwest roots.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🤝 Customer Service That Feels Personal</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Friendly demeanor</li>
                        <li>Professionalism</li>
                        <li>Willingness to go above and beyond</li>
                        <li>Efficient and compassionate handling of delays or disruptions</li>
                    </ul>
                    <p className="mt-2">⭐ J.D. Power has ranked Alaska Airlines highest in traditional carrier customer satisfaction multiple years in a row.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🌐 Route Network: Seamless Travel Across North America & Beyond</h2>
                    <p className="mb-2">From its hubs in Seattle, Portland, Anchorage, San Francisco, and Los Angeles, Alaska provides nonstop service to over 120 destinations:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>United States (including hard-to-reach cities in Alaska)</li>
                        <li>Hawaii</li>
                        <li>Mexico</li>
                        <li>Canada</li>
                        <li>Costa Rica</li>
                        <li>Belize</li>
                    </ul>
                    <p className="mt-2">✈️ As a proud member of the Oneworld Alliance, Alaska Airlines connects you globally through partners like American Airlines, British Airways, Japan Airlines, and Qatar Airways.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🎁 Loyalty That Rewards You: Mileage Plan®</h2>
                    <p className="mb-2">Alaska Airlines’ Mileage Plan® is consistently rated among the best frequent flyer programs:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Earn miles based on distance flown, not ticket price</li>
                        <li>Redeem miles with 20+ global airline partners</li>
                        <li>Elite status perks: upgrades, bonus miles, priority services</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4 mb-2">🛫 Mileage Plan Elite tiers:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>MVP</li>
                        <li>MVP Gold</li>
                        <li>MVP Gold 75K</li>
                        <li>MVP Gold 100K</li>
                    </ul>
                    <p className="mt-2">🧳 Even base-tier members enjoy competitive benefits like two free checked bags on certain tickets and priority boarding.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🌱 Sustainability at the Heart of Operations</h2>
                    <p className="mb-2">Alaska Airlines is a leader in sustainable aviation practices:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Goal: Net zero carbon emissions by 2040</li>
                        <li>Investment in sustainable aviation fuel (SAF)</li>
                        <li>Carbon offsets and eco-friendly onboard practices</li>
                        <li>Electric support vehicles at major airports</li>
                        <li>Plastic reduction across inflight operations</li>
                    </ul>
                    <p className="mt-2">🌍 Alaska Airlines works actively toward environmental responsibility.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🍴 Thoughtful Food & Beverage Offerings</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>First Class meals highlight local Pacific Northwest ingredients</li>
                        <li>Premium Class passengers enjoy complimentary wine, beer, and cocktails</li>
                        <li>All passengers have access to high-quality snacks and meals for purchase</li>
                        <li>Seattle’s own Stumptown Coffee Roasters coffee onboard</li>
                    </ul>
                    <p className="mt-2">🥂 Hospitality shines from welcome drinks to artisan snack boxes.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">📱 Smart, Streamlined Tech</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Check-in and mobile boarding pass via app</li>
                        <li>Real-time bag tracking</li>
                        <li>Purchase meals or Wi-Fi easily</li>
                        <li>Change flights or seats quickly</li>
                    </ul>
                    <p className="mt-2">Free texting and streaming-ready Wi-Fi onboard ensure you're always connected.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🏆 Awards & Accolades</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>🥇 #1 Traditional Airline for Customer Satisfaction – J.D. Power</li>
                        <li>🏅 Best Airline Rewards Program – U.S. News & World Report</li>
                        <li>✈️ Top On-Time Performance – OAG and FlightStats</li>
                        <li>🌍 Top 100 Most Sustainable Companies in the U.S. – Barron’s</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">📣 Final Verdict: Why Alaska Airlines is a Traveler Favorite</h2>
                    <p className="mb-2">Alaska Airlines offers an authentic, customer-first travel experience grounded in reliability, regional pride, and sustainable practices.</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>✨ Personalized service with a smile</li>
                        <li>🌲 A commitment to the environment</li>
                        <li>🏅 High reliability and on-time flights</li>
                        <li>💡 Smart tech for smarter travel</li>
                        <li>🌍 Great rewards and a vast network</li>
                    </ul>
                    <p className="mt-4">🛫 From the tarmac in Seattle to the beaches of Hawaii or the glaciers of Alaska, this is an airline that lives up to its reputation—every mile of the way.</p>
                </section>
            </div>
            <div>
                <ContactSection name="Alaska Airlines" isSide={true} />

            </div>
        </div>
    );
}
