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
                            src="/assets/suncountry.png"
                            alt="Sun Country Airlines History"
                            width={250}
                            height={90}
                            className="rounded h-[90px] w-[150px] sm:w-[280px] bg-white  object-contain"
                        />
                    </div>
                </div>
                <div className="text- mb-10">
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
                        🌞 Affordability Meets Friendly Midwestern Service
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
                <ContactSection name="Sun Country Airlines" isSide={true} />

            </div>
        </div>
    );
}
