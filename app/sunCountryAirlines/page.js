import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function SunCountryPage() {
    return (
        <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
            <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
                <div className="mb-10">
                    <div className="flex justify-between gap-6 items-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                            Sun Country Airlines
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
                <div className="text- mb-10">
                    <h1 className="text-2xl font-bold mb-4">
                        ✈️ Sun Country Airlines: Affordable Travel with Midwest Charm and Reliability 🌞
                    </h1>
                    <p className="text-lg  ">
                        Sun Country Airlines is a U.S.-based low-cost carrier known for delivering exceptional value, dependable service, and a uniquely Minnesotan brand of warmth and hospitality. Headquartered in Minneapolis-St. Paul, Minnesota, the airline has grown from a small regional operator into a nationally recognized carrier serving over 80 destinations across the United States, Mexico, Central America, and the Caribbean.
                    </p>
                </div>

                <section className="space-y-4 mb-10">
                    <p>
                        Whether you're flying for a family vacation, a seasonal holiday, or a business trip, Sun Country offers a travel experience that balances affordability, comfort, and customer-first service — all while keeping you connected to sunny destinations and major U.S. cities.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">📌 Basic Information</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                        <li><strong>Full Name:</strong> Sun Country Airlines</li>
                        <li><strong>IATA Code:</strong> SY</li>
                        <li><strong>ICAO Code:</strong> SCX</li>
                        <li><strong>Callsign:</strong> SUN COUNTRY</li>
                        <li><strong>Founded:</strong> 1982</li>
                        <li><strong>Headquarters:</strong> Eagan, Minnesota, USA</li>
                        <li><strong>Main Hub:</strong> Minneapolis–Saint Paul International Airport (MSP)</li>
                        <li><strong>Fleet Size:</strong> 50+ aircraft (primarily Boeing 737-800s)</li>
                        <li><strong>Destinations:</strong> 80+ (as of 2025)</li>
                        <li><strong>Parent Company:</strong> Sun Country Holdings, Inc.</li>
                        <li><strong>Type:</strong> Ultra-Low-Cost Carrier (ULCC)</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">🌟 Unique Features of Sun Country Airlines</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold">💰 Ultra-Low-Cost Model – Smart Travel Made Simple</h3>
                            <p>
                                Sun Country operates with an ultra-low-cost business model, making air travel accessible for a wide range of passengers. By unbundling services (like seat selection, baggage, and food), travelers have the flexibility to only pay for what they need, keeping base fares low and travel options customizable.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold">🧭 Route Network – Sunshine Destinations & Beyond</h3>
                            <p>
                                Originally famous for its flights to vacation hotspots like Florida, Las Vegas, Mexico, and the Caribbean, Sun Country has expanded to cover key domestic routes, including seasonal service to smaller markets. The airline’s focus on leisure and seasonal travel makes it especially popular during holiday and vacation seasons.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Cancun, Mexico</li>
                                <li>Las Vegas, Nevada</li>
                                <li>Fort Myers & Orlando, Florida</li>
                                <li>Los Angeles, California</li>
                                <li>Phoenix, Arizona</li>
                                <li>Anchorage, Alaska</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">💼 Cargo Services – Amazon Partnership</h3>
                            <p>
                                In addition to passenger services, Sun Country also operates a dedicated cargo fleet under contract with Amazon Air, helping the airline maintain year-round operational efficiency and financial stability.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold">🛫 Fleet & Cabin Experience</h3>
                            <p><strong>✈️ Modern Boeing Fleet:</strong> Sun Country’s fleet consists primarily of Boeing 737-800 aircraft, configured to support both leisure travel and cargo operations.</p>
                            <p><strong>💺 Onboard Experience:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Standard Economy: Comfortable seats with generous legroom.</li>
                                <li>Better: Extra legroom and priority boarding.</li>
                                <li>Best: Located in the front rows with the most space and amenities.</li>
                            </ul>
                            <p>Passengers can enjoy:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Onboard streaming entertainment (via personal devices)</li>
                                <li>Complimentary water, coffee, and soft drinks</li>
                                <li>Premium snacks and alcoholic beverages available for purchase</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">💼 Baggage Options</h3>
                            <p>
                                As a ULCC, Sun Country offers:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>One free personal item (fits under seat)</li>
                                <li>Additional carry-on and checked baggage available for a fee</li>
                                <li>Discounts for pre-booked baggage online</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">🙌 Customer Service & Community Focus</h3>
                            <p>
                                Sun Country has built a loyal customer base by blending low fares with friendly Midwestern hospitality. The airline is often praised for its easy booking process, reliable flight schedules, and responsive customer service.
                            </p>
                            <p>
                                In addition, the airline is involved in local community support and environmental sustainability initiatives, emphasizing its roots in the Twin Cities and broader Minnesota community.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold">🔧 Sun Country Mobile App & Website</h3>
                            <p>
                                The Sun Country mobile app and website offer seamless travel management features:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Easy flight booking and check-in</li>
                                <li>Real-time flight status updates</li>
                                <li>Manage seats, bags, and travel extras</li>
                                <li>Access to boarding passes and receipts</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">🧭 Why Choose Sun Country Airlines?</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>✔️ Affordable Fares for Leisure and Seasonal Travel</li>
                        <li>✔️ Flexible Fare Options to Fit All Budgets</li>
                        <li>✔️ Reliable Domestic & International Routes</li>
                        <li>✔️ Friendly Service Rooted in Midwestern Values</li>
                        <li>✔️ Growing Cargo Division Supporting Year-Round Operations</li>
                    </ul>
                    <p className="mt-4">
                        Whether you're escaping to a beach resort or visiting friends and family across the country, Sun Country Airlines delivers a cost-effective, friendly, and hassle-free way to fly.
                    </p>
                </section>
                <div className="text- mb-10">
                    <h2 className="text-2xl font-bold mb-4">
                        🌞 Sun Country Airlines Review: Where Affordability Meets Friendly Midwestern Service ✈️
                    </h2>
                    <p className="text-lg ">
                        Sun Country Airlines is a hidden gem in the American airline industry — a carrier that masterfully blends low-cost efficiency with exceptional customer care. For travelers seeking dependable service, sun-drenched destinations, and great value without compromising comfort, Sun Country consistently delivers. From its hometown hub in Minneapolis–Saint Paul, the airline has built a reputation for being not only budget-friendly but also remarkably personal, professional, and reliable.
                    </p>
                </div>

                <section className="space-y-6 mb-10">
                    <h2 className="text-2xl font-semibold">🏆 Value That Goes the Extra Mile</h2>
                    <p>
                        Sun Country’s ultra-low-cost carrier (ULCC) model is designed with one goal in mind — giving passengers control over their travel experience while keeping fares competitively low. Unlike traditional airlines, Sun Country unbundles its services, so you only pay for what you actually use. This approach makes it incredibly attractive for price-conscious travelers who want to customize their flight experience without extra fluff.
                    </p>
                    <h3 className="font-bold">💡 What We Love:</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li>Transparent pricing with no hidden fees</li>
                        <li>Affordable base fares for both domestic and international routes</li>
                        <li>Optional add-ons for seat selection, bags, snacks, and upgrades</li>
                        <li>Frequent sales and seasonal deals</li>
                    </ul>
                </section>

                <section className="space-y-6 mb-10">
                    <h2 className="text-2xl font-semibold">✈️ Comfort Without Compromise</h2>
                    <p>
                        Despite its budget status, Sun Country impresses with its modern Boeing 737-800 fleet, offering a cleaner, more comfortable ride than many other low-cost carriers. Seats are ergonomically designed, and the airline offers three cabin experiences to meet different needs:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Standard Economy: Affordable, clean, and comfortable.</li>
                        <li>Better: Extra legroom, early boarding, and a preferred location in the cabin.</li>
                        <li>Best: Premium seats with maximum legroom, priority boarding, and the most amenities.</li>
                    </ul>
                    <p>🧳 The airline also offers:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>A complimentary personal item</li>
                        <li>Paid options for carry-on and checked bags</li>
                        <li>Special discounts when baggage is booked in advance online</li>
                    </ul>
                </section>

                <section className="space-y-6 mb-10">
                    <h2 className="text-2xl font-semibold">🌍 Destination-Focused Network</h2>
                    <p>
                        True to its name, Sun Country connects travelers with sunny, leisure-centric destinations — and does it with impressive reach for a low-cost airline. The airline serves over 80 destinations across the U.S., Mexico, Central America, and the Caribbean, with a sharp focus on vacation hot spots, cultural cities, and seasonal escapes.
                    </p>
                    <h3 className="font-bold">Popular routes include:</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li>Minneapolis to Las Vegas, Phoenix, Orlando, and Fort Myers</li>
                        <li>Direct flights to Cancun, Costa Rica, and the Dominican Republic</li>
                        <li>Convenient seasonal service to smaller regional airports and ski towns</li>
                    </ul>
                    <p>
                        🌐 Whether you’re looking for beach vibes, desert heat, mountain air, or city adventures, Sun Country gets you there with low fares and on-time performance.
                    </p>
                </section>

                <section className="space-y-6 mb-10">
                    <h2 className="text-2xl font-semibold">🤝 Customer Experience That Feels Personal</h2>
                    <p>
                        Sun Country may be low-cost, but it’s rich in hospitality. Passengers frequently praise the airline’s friendly flight attendants, easy check-in process, and streamlined airport operations. The staff is known for their genuine Midwestern charm — polite, helpful, and always smiling.
                    </p>
                    <p>📱 Bonus: Their mobile app and website are intuitive and user-friendly, making it simple to:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Book and manage trips</li>
                        <li>Add extras like baggage or seats</li>
                        <li>Check in and download boarding passes</li>
                        <li>Track flight status in real time</li>
                    </ul>
                </section>

                <section className="space-y-6 mb-10">
                    <h2 className="text-2xl font-semibold">📦 More Than Just Passenger Flights – The Amazon Advantage</h2>
                    <p>
                        A unique feature of Sun Country is its dual revenue model, which includes a growing cargo division. The airline operates cargo flights on behalf of Amazon Air, helping keep aircraft and crews active even during off-peak travel seasons. This diversification boosts operational stability — a smart business move that translates to fewer cancellations and more reliability for passengers.
                    </p>
                </section>

                <section className="space-y-6 mb-10">
                    <h2 className="text-2xl font-semibold">🌱 Focus on Sustainability & Community</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Based in Minnesota, it supports local organizations and charities</li>
                        <li>Invests in fuel-efficient operations and route optimization</li>
                        <li>Actively participates in reducing its environmental impact</li>
                    </ul>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">💬 Final Verdict: A High-Value Airline with Heart</h2>
                    <p>
                        Sun Country Airlines is more than just a low-cost alternative — it’s a carrier that understands the modern traveler. From customizable booking options to heartfelt service, it makes flying accessible, enjoyable, and even a bit nostalgic. In a time when air travel often feels impersonal or overpriced, Sun Country reminds us that flying can still be fun, friendly, and fair.
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>✅ Affordable</li>
                        <li>✅ Reliable</li>
                        <li>✅ Friendly Service</li>
                        <li>✅ Great Vacation Destinations</li>
                    </ul>
                    <p>
                        So whether you're heading out for a quick weekend getaway, a family reunion, or a tropical vacation, Sun Country Airlines offers a refreshing travel experience — one that’s affordable but doesn’t cut corners on comfort, care, or convenience.
                    </p>
                </section>
            </div>
            <div>
                <ContactSection name="Alaska Airlines" isSide={true} />

            </div>
        </div>
    );
}
