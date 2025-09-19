import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import React from "react";

export default function Page() {
    return (
        <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
            <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
                <div className="flex justify-between gap-6 items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                        American Airlines
                    </h1>
                    <Image
                        src="data:image/png;base64,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"
                        alt="American Airlines History"
                        width={250}
                        height={90}
                        className="rounded h-[90px] w-[150px] sm:w-[280px] bg-white px-4 object-cover"
                    />
                </div>

                <section>
                    <p>American Airlines was born from a consolidation of more than 80 small airlines in the 1930s. Charles Lindbergh, one of aviation’s pioneers, was its first pilot. It became the first airline to fly the Douglas DC-3, which helped usher in the modern era of passenger air travel.</p>
                    <p className="mt-2">Over the decades, American has acquired several other carriers, including Trans World Airlines (TWA) in 2001, and merged with US Airways in 2013 to become the world’s largest airline.</p>
                    <Image src="/assets/image/americans.jpg" alt="JetBlue Fleet" width={300} height={300}  className="w-full h-full mt-4 object-cover rounded-xl" />
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">📌 Basic Information</h2>
                    <ul className="list-disc list-inside">
                        <li>Full Name: American Airlines, Inc.</li>
                        <li>IATA Code: AA</li>
                        <li>ICAO Code: AAL</li>
                        <li>Callsign: AMERICAN</li>
                        <li>Founded: April 15, 1926 (as a mail carrier); rebranded as American Airlines in 1930</li>
                        <li>Headquarters: Fort Worth, Texas, United States</li>
                        <li>Parent Company: American Airlines Group Inc.</li>
                        <li>Main Hub: Dallas/Fort Worth International Airport (DFW)</li>
                        <li>CEO: Robert Isom (as of 2025)</li>
                    </ul>
                </section>



                <section>
                    <h2 className="text-2xl font-semibold mb-2">🌐 Route Network & Destinations</h2>
                    <ul className="list-disc list-inside">
                        <li>Over 350 destinations in more than 60 countries</li>
                        <li>10 major hubs: DFW, CLT, ORD, MIA, PHL, PHX, DCA, JFK, LAX, BOS</li>
                        <li>Global connectivity across North America, South America, Europe, Asia, and the Caribbean</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">✈️ Fleet Information</h2>
                    <ul className="list-disc list-inside">
                        <li>Total Aircraft: 950+ mainline aircraft</li>
                        <li>Boeing: 737-800, 777-200/300ER, 787-8/9 Dreamliner</li>
                        <li>Airbus: A319, A320, A321 (including A321XLR on order)</li>
                        <li>Regional Aircraft: Embraer E175, Bombardier CRJ-700/900</li>
                        <li>Fleet modernization with focus on fuel efficiency</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">👩‍✈️ Cabin Classes & In-Flight Services</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Flagship® First:</strong> Lie-flat seats, premium dining, lounge access</li>
                        <li><strong>Flagship® Business:</strong> Lie-flat seats, priority services, lounge access</li>
                        <li><strong>Premium Economy:</strong> Wider seats, more legroom, amenity kits</li>
                        <li><strong>Main Cabin Extra & Main Cabin:</strong> Extra legroom, snacks, beverages</li>
                        <li><strong>Basic Economy:</strong> Low-cost, limited flexibility</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">🎧 In-Flight Entertainment & Connectivity</h2>
                    <Image src="/assets/image/entertain.jpg" alt="JetBlue Fleet" width={300} height={300}  className="w-full h-full mt-5 mb-5 object-cover rounded-xl" />
                    <ul className="list-disc list-inside">
                        <li>Wi-Fi on nearly all aircraft (paid)</li>
                        <li>Seatback screens or app streaming</li>
                        <li>USB and power outlets in most cabins</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">🧳 Baggage Policy</h2>
                    <ul className="list-disc list-inside">
                        <li>1 personal item + 1 carry-on (free)</li>
                        <li>Checked bags: Main Cabin ($35), Premium often free</li>
                        <li>AAdvantage® members get added benefits</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">💺 Frequent Flyer Program – AAdvantage®</h2>
                    <ul className="list-disc list-inside">
                        <li>Miles earned via flights, cards, hotels, rentals</li>
                        <li>Status tiers: Gold, Platinum, Platinum Pro, Executive Platinum</li>
                        <li>Benefits: Upgrades, priority services, lounge access</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">🌍 Global Alliance: oneworld</h2>
                    <p>Founding member of oneworld. Partners include British Airways, Qatar Airways, Japan Airlines, Qantas, Iberia, Finnair, Cathay Pacific, Alaska Airlines. Enables global mileage earning and code-sharing.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">🌱 Sustainability & Innovation</h2>
                    <ul className="list-disc list-inside">
                        <li>Net-zero carbon by 2050</li>
                        <li>Investments in SAF and efficient aircraft</li>
                        <li>Carbon offsets and reduced plastics</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">🏆 Awards & Recognition</h2>
                    <ul className="list-disc list-inside">
                        <li>Best Domestic Airline (Frequent Business Traveler Awards)</li>
                        <li>Top Employer for Diversity (Forbes)</li>
                        <li>Best Airline Loyalty Program (USA Today’s 10Best)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">📱 Digital Experience</h2>
                    <ul className="list-disc list-inside">
                        <li>Mobile App: check-in, flight tracking, entertainment</li>
                        <li>Self-service kiosks and mobile boarding</li>
                        <li>Real-time rebooking and upgrades via app</li>
                    </ul>
                </section>

                <section className="text">
                    <h2 className="text-2xl font-semibold mb-2">✅ Why Fly with American Airlines?</h2>
                    <p className="mt-2">One of the world’s most connected route networks, with flexible cabin classes, award-winning loyalty programs, strong global partnerships, and a commitment to comfort, innovation, and sustainability.</p>
                </section>
                <h2 className="text-xl sm:text-2xl font-semibold text">🌟 American Airlines Review: A Premier Flying Experience</h2>

                <section>
                    <p>American Airlines isn't just one of the largest airlines in the world—it’s a symbol of consistency, comfort, and cutting-edge air travel. Whether you're flying domestically across the United States or embarking on a long-haul international journey, American Airlines delivers a professional, comfortable, and high-quality travel experience.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🧭 Unmatched Global Connectivity</h2>
                    <p>One of the standout strengths of American Airlines is its expansive global network. With 10 strategic hubs and flights to over 350 destinations across 60+ countries, American ensures travelers are connected to major cities, exotic getaways, and important business centers with unmatched efficiency.</p>
                    <p>From Dallas/Fort Worth (DFW)—its largest hub—to other major airports like Miami, Chicago O’Hare, and New York JFK, seamless connections make travel smooth and stress-free. The airline’s membership in the Oneworld Alliance extends that convenience even further, allowing easy code-share bookings and mileage earning with top-tier partner airlines like British Airways, Qatar Airways, and Japan Airlines.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">✈️ Fleet Comfort & Modern Aircraft</h2>
                    <p>American Airlines operates one of the most modern and fuel-efficient fleets in the industry, offering a wide variety of aircraft designed for passenger comfort, safety, and reliability. Whether you’re flying on a Boeing 787 Dreamliner or an Airbus A321, the aircraft are clean, well-maintained, and equipped with the latest technology.</p>
                    <p>The airline is committed to continuous fleet renewal, replacing older jets with new, more environmentally friendly aircraft to ensure smoother, quieter, and more sustainable flights.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">💼 Class-Leading Cabin Options</h2>
                    <ul className="list-disc list-inside space-y-2 mt-3">
                        <li><strong>🌟 Flagship® First:</strong> An elite, luxury experience with lie-flat seating, chef-inspired meals, exclusive lounges, and dedicated service. Ideal for transcontinental and international business travelers.</li>
                        <li><strong>✨ Flagship® Business:</strong> Fully-reclining seats, priority boarding, premium dining, and access to Flagship® Lounges.</li>
                        <li><strong>💺 Premium Economy:</strong> Enhanced comfort with extra legroom, premium meals, and elevated service on international long-haul flights.</li>
                        <li><strong>👨‍👩‍👧‍👦 Main Cabin & Main Cabin Extra:</strong> Clean, modern seating, free snacks and beverages, and personal seatback screens or streaming options.</li>
                        <li><strong>💡 Basic Economy:</strong> Budget-friendly fares that provide essential access to the American Airlines network while maintaining high standards of safety and reliability.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">📱 Tech-Forward Travel Experience</h2>
                    <p>American Airlines has heavily invested in its digital transformation—and it shows.</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 mt-3">
                        <li>The mobile app is among the most intuitive in the industry, offering mobile check-in, boarding passes, baggage tracking, and real-time updates.</li>
                        <li>In-flight entertainment includes seatback screens or personal device streaming with access to movies, TV, music, and more.</li>
                        <li>Wi-Fi connectivity is available on most aircraft, allowing travelers to stay connected in the sky.</li>
                        <li>Many aircraft feature power outlets and USB ports, a must for business travelers and long flights.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🍽️ Excellent In-Flight Dining & Amenities</h2>
                    <ul className="list-disc list-inside space-y-2 mt-3 mt-3">
                        <li>From complimentary beverages and snacks in the Main Cabin to multi-course gourmet meals in premium cabins, American Airlines consistently delivers satisfying dining experiences.</li>
                        <li>Flagship® Dining in lounges for premium guests</li>
                        <li>Special meal options (vegan, gluten-free, kosher, etc.)</li>
                        <li>Amenity kits, noise-canceling headphones, and plush blankets in long-haul premium cabins</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🧳 Baggage & Boarding Made Easy</h2>
                    <ul className="list-disc list-inside space-y-2 mt-3 mt-3">
                        <li>Generous carry-on allowance (personal item + carry-on included)</li>
                        <li>Streamlined priority boarding for AAdvantage® members, business travelers, and families</li>
                        <li>Self-service kiosks and curbside check-in options in most major airports</li>
                        <li>Checked bag fees are competitive, and loyalty program members often receive free bags depending on status.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🌍 Environmental & Social Responsibility</h2>
                    <ul className="list-disc list-inside space-y-2 mt-3 mt-3">
                        <li>Committed to net-zero carbon emissions by 2050</li>
                        <li>Investing in sustainable aviation fuel (SAF)</li>
                        <li>Partnering with NGOs and governments for eco-initiatives</li>
                        <li>Reducing plastic use and improving aircraft efficiency</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🧠 AAdvantage® Loyalty Program</h2>
                    <p>The AAdvantage® program remains one of the most rewarding frequent flyer programs in the world:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 mt-3">
                        <li>Earn miles through flights, hotels, car rentals, and credit cards</li>
                        <li>Elite tiers include Gold, Platinum, Platinum Pro, and Executive Platinum</li>
                        <li>Benefits include upgrades, bonus miles, priority services, and free checked bags</li>
                        <li>Miles can be redeemed for flights, hotel stays, car rentals, vacation packages, and more.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">💬 Customer Satisfaction & Trust</h2>
                    <ul className="list-disc list-inside space-y-2 mt-3 mt-3">
                        <li>On-time performance</li>
                        <li>Friendly and professional cabin crew</li>
                        <li>Responsive customer service</li>
                        <li>Comfortable lounges and airport experience</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🏆 Awards & Recognition</h2>
                    <ul className="list-disc list-inside space-y-2 mt-3 mt-3">
                        <li>Best North American Airline by Global Traveler</li>
                        <li>Top Airline Loyalty Program (AAdvantage®) by U.S. News & World Report</li>
                        <li>One of America’s Most Responsible Companies by Newsweek</li>
                        <li>Best Domestic Airline for Business Travel by Business Traveler Magazine</li>
                    </ul>
                </section>

                <section className="text">
                    <h2 className="text-2xl font-semibold">✅ Final Verdict: Why Fly American Airlines?</h2>
                    <p className="mt-2">American Airlines consistently proves itself as a world-class airline by delivering a mix of reliability, comfort, innovation, and vast connectivity. Whether you’re booking a short domestic flight or planning an international adventure, American ensures a smooth, safe, and satisfying journey.</p>
                    <p className="mt-2">With industry-leading technology, thoughtfully designed cabins, a robust global network, and a commitment to improving both customer experience and environmental impact, American Airlines is a top choice for travelers who value quality and reach.</p>
                </section>
            </div>
            <div>
                <ContactSection name="American Airlines" isSide={true} />

            </div>
        </div>
    );
}
