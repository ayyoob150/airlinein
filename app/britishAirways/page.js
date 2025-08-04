import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
            <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
                <section>
                    <div className="flex justify-between gap-6 items-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                            British Airways
                        </h1>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/sco/thumb/4/42/British_Airways_Logo.svg/1200px-British_Airways_Logo.svg.png"
                            alt="British Airways History"
                            width={250}
                            height={90}
                            className="rounded h-[90px] w-[150px] sm:w-[280px] bg-white p-2"
                        />
                    </div>
                    <p className="text-lg leading-relaxed mt-2">
                        British Airways (BA) is the flag carrier airline of the United Kingdom and one of the most recognized names in global aviation. Headquartered in London, England, and operating from its primary hub at London Heathrow Airport (LHR), British Airways is known for its legacy, premium service, global connectivity, and commitment to innovation and sustainability.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🏛️ History and Background</h2>
                    <ul className="text-lg leading-relaxed list-disc list-inside mt-2">
                        <li>Founded: August 25, 1919 (as Aircraft Transport and Travel Limited); formed as British Airways in 1974 after a merger.</li>
                        <li>Founding Members: Merger of BOAC (British Overseas Airways Corporation) and BEA (British European Airways).</li>
                        <li>Parent Company: International Airlines Group (IAG), which also owns Iberia, Aer Lingus, and Vueling.</li>
                        <li>Milestone: First airline to offer jet passenger services and one of the pioneers in supersonic passenger flight through Concorde (in partnership with Air France).</li>
                    </ul>
                </section>

                <section>
                    <div className="text-lg space-y-2">
                        <p><strong>Full Name:</strong> British Airways plc</p>
                        <p><strong>IATA Code:</strong> BA</p>
                        <p><strong>ICAO Code:</strong> BAW</p>
                        <p><strong>Callsign:</strong> SPEEDBIRD</p>
                        <p><strong>Founded:</strong> 1974 (as British Airways, origins go back to 1919)</p>
                        <p><strong>Headquarters:</strong> Waterside, Harmondsworth, near Heathrow Airport, London, UK</p>
                        <p><strong>Parent Company:</strong> International Airlines Group (IAG)</p>
                        <p><strong>Main Hub:</strong> London Heathrow Airport (LHR)</p>
                        <p><strong>Secondary Hub:</strong> London Gatwick Airport (LGW)</p>
                        <p><strong>Fleet Size:</strong> Approx. 250+ aircraft</p>
                        <p><strong>Destinations:</strong> Over 180 across 80+ countries</p>
                        <p><strong>Alliance:</strong> Oneworld (founding member)</p>
                        <p><strong>CEO:</strong> Sean Doyle (as of 2025)</p>
                        <p><strong>Website:</strong> <a href="https://www.britishairways.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.britishairways.com</a></p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10">🕰️ History</h2>
                    <div className="text-lg mt-4 space-y-6">
                        <div>
                            <h3 className="text-2xl font-medium">Early Beginnings:</h3>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li><strong>1919:</strong> Aircraft Transport and Travel Limited (AT&T) operated the world's first daily international scheduled air service between London and Paris.</li>
                                <li><strong>1930s:</strong> Multiple airlines merged into Imperial Airways and British Airways Ltd.</li>
                                <li><strong>1939:</strong> Imperial Airways and British Airways Ltd were merged to form British Overseas Airways Corporation (BOAC) and British European Airways (BEA).</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">British Airways Formation:</h3>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li><strong>1974:</strong> BA was formed by merging BOAC and BEA, becoming the UK’s flag carrier.</li>
                                <li><strong>1987:</strong> Privatized by the UK Government under Margaret Thatcher.</li>
                                <li><strong>2011:</strong> Merged with Spanish airline Iberia to form International Airlines Group (IAG) (still operates as separate brands).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🌐 Global Network</h2>
                    <p className="text-lg leading-relaxed mt-2">
                        Destinations: Over 200 destinations across 80+ countries on six continents.
                    </p>
                    <p className="text-lg mt-2">Major Hubs:</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>London Heathrow (Primary)</li>
                        <li>London Gatwick</li>
                    </ul>
                    <p className="text-lg mt-2">Popular Routes:</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>London to New York (JFK)</li>
                        <li>London to Dubai</li>
                        <li>London to Hong Kong</li>
                        <li>London to Singapore</li>
                        <li>London to Johannesburg</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🛫 Fleet</h2>
                    <p className="text-lg mt-2">British Airways operates a modern and diverse fleet of more than 250 aircraft, consisting of:</p>
                    <p className="text-lg mt-2">✈️ Long-Haul Aircraft:</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Boeing 777</li>
                        <li>Boeing 787 Dreamliner</li>
                        <li>Airbus A350 XWB</li>
                        <li>Airbus A380 (double-decker)</li>
                    </ul>
                    <p className="text-lg mt-2">🛩️ Short-Haul & Medium-Haul Aircraft:</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Airbus A320 family (A319, A320, A321)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🛎️ Cabin Classes & Services</h2>
                    <div className="space-y-4 text-lg">
                        <div>
                            <p className="font-semibold">👑 First Class</p>
                            <ul className="list-disc list-inside">
                                <li>Lie-flat seats with privacy doors</li>
                                <li>Personal concierge-style service</li>
                                <li>Exclusive lounges</li>
                                <li>Fine dining & luxury amenity kits</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">🏢 Business Class (Club World / Club Europe)</p>
                            <ul className="list-disc list-inside">
                                <li>Fully flat beds on long-haul</li>
                                <li>Direct aisle access (Club Suite)</li>
                                <li>Access to business lounges</li>
                                <li>Enhanced onboard meals</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">💼 Premium Economy (World Traveller Plus)</p>
                            <ul className="list-disc list-inside">
                                <li>Wider seats with extra legroom</li>
                                <li>Enhanced dining and larger baggage allowance</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">🧳 Economy Class (World Traveller / Euro Traveller)</p>
                            <ul className="list-disc list-inside">
                                <li>Ergonomically designed seats</li>
                                <li>Complimentary meals and beverages (long-haul)</li>
                                <li>Buy-on-board menu for short-haul (Euro Traveller)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🏆 Awards & Recognition</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Skytrax 4-Star Airline</li>
                        <li>Best Airline Staff in Europe (Skytrax, past awards)</li>
                        <li>Named one of the most punctual airlines in Europe</li>
                        <li>Rated highly for its lounge offerings and long-haul business class</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🌍 Memberships & Alliances</h2>
                    <p className="text-lg mt-2">Member of Oneworld Alliance (along with American Airlines, Qantas, Cathay Pacific, etc.)</p>
                    <p className="text-lg mt-2">Codeshare agreements with:</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Qatar Airways</li>
                        <li>Finnair</li>
                        <li>Japan Airlines</li>
                        <li>Iberia and others</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">💳 Executive Club – British Airways Loyalty Program</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Avios Points – Earned on flights, shopping, hotels, and car rentals.</li>
                        <li>Tier Levels – Blue, Bronze, Silver, Gold.</li>
                        <li>Benefits – Priority boarding, lounge access, seat selection, and more.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🛡️ Safety & Innovation</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Operates under strict UK Civil Aviation Authority regulations.</li>
                        <li>Regularly ranked among the safest airlines globally.</li>
                        <li>Invests in aircraft maintenance, pilot and crew training, and digital innovations like biometric boarding and mobile app services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🌱 Sustainability and Environment</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Net-zero carbon emissions by 2050</li>
                        <li>Investing in sustainable aviation fuel (SAF)</li>
                        <li>Reducing single-use plastics on board</li>
                        <li>Supporting global reforestation programs</li>
                        <li>Fleet modernization to reduce fuel burn</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🏙️ British Airways Lounges</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Galleries Club Lounges</li>
                        <li>Concorde Room (First Class only)</li>
                        <li>Arrivals Lounge at Heathrow</li>
                    </ul>
                    <p className="text-lg mt-2">Amenities include spa services, fine dining, showers, and business centers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">📱 Digital Experience</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>User-friendly website and mobile app</li>
                        <li>Online check-in, mobile boarding passes</li>
                        <li>Live baggage tracking</li>
                        <li>Inflight Wi-Fi available on select aircraft</li>
                        <li>Avios management and flight booking via app</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">🤝 Customer Experience</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>24/7 customer support</li>
                        <li>Multilingual assistance</li>
                        <li>Accessible travel options</li>
                        <li>Medical and dietary accommodations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">📈 British Airways Today</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Operates hundreds of daily flights</li>
                        <li>Leading transatlantic airline</li>
                        <li>Key player in European, African, and Asia-Pacific travel</li>
                        <li>Major contributor to the UK economy and global tourism</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">✅ Conclusion</h2>
                    <p className="text-lg leading-relaxed mt-2">
                        British Airways represents British excellence in aviation with a strong legacy, world-class service, and forward-thinking approach. Whether you're flying for business, leisure, or global connectivity, BA remains a trusted name with a rich history and a strong future.
                    </p>
                </section>

                <section className="space-y-6">
                    <p>
                        British Airways, the flag carrier of the United Kingdom, is not just an airline—it’s a legacy brand that represents the gold standard in international travel. With a history stretching back over a century, British Airways continues to impress travelers with its commitment to excellence, safety, luxury, and innovation.
                    </p>
                    <p>
                        Whether flying short-haul within Europe or long-haul across the globe, British Airways delivers a consistently premium experience that combines traditional British hospitality with modern convenience and global connectivity.
                    </p>

                    <h2 className="text-2xl font-semibold">✈️ Flight Experience: Comfort Meets Class</h2>
                    <p>
                        British Airways offers a well-curated cabin experience across all classes of travel, ensuring every passenger enjoys a comfortable, well-serviced journey.
                    </p>

                    <h3 className="text-xl font-semibold">🛋️ First Class: The Epitome of Luxury</h3>
                    <ul className="list-disc list-inside">
                        <li>Private suites with lie-flat beds and privacy doors</li>
                        <li>Exclusive access to the Concorde Room—one of the world’s most luxurious airline lounges</li>
                        <li>Personalized service, including a dedicated concierge and à la carte fine dining</li>
                        <li>Luxury bedding by The White Company and amenity kits by Elemis</li>
                    </ul>

                    <h3 className="text-xl font-semibold">💼 Club World (Business Class): Work, Rest, Relax</h3>
                    <ul className="list-disc list-inside">
                        <li>Direct aisle access</li>
                        <li>Fully flat beds</li>
                        <li>Enhanced privacy</li>
                        <li>Noise-reducing headrests and mood lighting</li>
                    </ul>

                    <h3 className="text-xl font-semibold">🌟 World Traveller Plus (Premium Economy): Smart Upgrade</h3>
                    <ul className="list-disc list-inside">
                        <li>Wider seats with extra legroom</li>
                        <li>Premium meals</li>
                        <li>Greater baggage allowance</li>
                        <li>Quieter and more intimate cabin</li>
                    </ul>

                    <h3 className="text-xl font-semibold">🌍 World Traveller (Economy): Comfortable & Value-Driven</h3>
                    <ul className="list-disc list-inside">
                        <li>Well-padded seats with personal entertainment screens</li>
                        <li>Complimentary meals and drinks on long-haul flights</li>
                        <li>Professional and courteous cabin crew</li>
                        <li>Buy-on-board menu for short-haul European flights</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">🧳 Baggage & Check-In: Streamlined and Efficient</h2>
                    <ul className="list-disc list-inside">
                        <li>Generous baggage allowances</li>
                        <li>Online and mobile check-in</li>
                        <li>Bag drop counters and biometric boarding at select airports</li>
                        <li>Efficient boarding process, usually managed by zones and priority levels</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">🏢 Airport Lounges: Premium Comfort On Ground</h2>
                    <ul className="list-disc list-inside">
                        <li>Galleries Lounges for Business and Silver/Gold Executive Club members</li>
                        <li>Concorde Room at Heathrow—high-end luxury with fine dining and private cabanas</li>
                        <li>Business facilities, spa treatments, curated menus, and premium drinks available</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">🌍 Route Network & Connectivity: Fly the World</h2>
                    <p>
                        British Airways connects London to over 200 destinations worldwide, covering:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Major US cities: New York, Los Angeles, Miami, Chicago</li>
                        <li>European hubs: Paris, Rome, Berlin, Amsterdam</li>
                        <li>Asia-Pacific: Tokyo, Singapore, Sydney, Mumbai</li>
                        <li>Africa: Johannesburg, Nairobi, Accra</li>
                    </ul>
                    <p>
                        The airline is also a founding member of the Oneworld Alliance, providing seamless travel and benefits across 13+ major airlines globally.
                    </p>

                    <h2 className="text-2xl font-semibold">🎁 Loyalty Program – Executive Club & Avios</h2>
                    <ul className="list-disc list-inside">
                        <li>Avios points—easy to earn and redeem on flights, hotels, car rentals</li>
                        <li>Tier levels: Blue, Bronze, Silver, Gold—each unlocking new perks</li>
                        <li>Family pooling of points</li>
                        <li>Priority services, additional baggage, and lounge access for upper tiers</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">📲 Technology & Innovation: Always One Step Ahead</h2>
                    <ul className="list-disc list-inside">
                        <li>Award-winning mobile app for check-in, boarding passes, and flight updates</li>
                        <li>Real-time baggage tracking and seat selection</li>
                        <li>High-speed Wi-Fi available on most long-haul aircraft</li>
                        <li>Personalized inflight entertainment with hundreds of hours of movies, shows, music</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">🌱 Sustainability Commitment: Flying Responsibly</h2>
                    <ul className="list-disc list-inside">
                        <li>Goal to reach net-zero carbon emissions by 2050</li>
                        <li>Partnering in sustainable aviation fuel (SAF) development</li>
                        <li>Reducing single-use plastics on board</li>
                        <li>Investing in next-gen fuel-efficient aircraft like the Airbus A350 and Boeing 787 Dreamliner</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">🧑‍✈️ Service Excellence: Professional & Personalized</h2>
                    <ul className="list-disc list-inside">
                        <li>Multi-lingual support</li>
                        <li>Special assistance for elderly and disabled passengers</li>
                        <li>Professionalism and empathy in handling disruptions</li>
                        <li>Swift and helpful customer service across digital and offline channels</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">🏆 Why Passengers Love British Airways</h2>
                    <ul className="list-disc list-inside">
                        <li>✅ Wide global reach</li>
                        <li>✅ Modern, clean, and spacious aircraft</li>
                        <li>✅ British charm and refined service</li>
                        <li>✅ Reliable scheduling and punctuality</li>
                        <li>✅ Rewarding loyalty program</li>
                        <li>✅ Outstanding First and Business Class experiences</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">⭐ Final Verdict: A Premium Airline Worth Flying With</h2>
                    <p>
                        British Airways perfectly blends British tradition, luxury, and innovation into one seamless travel experience. From the moment you book to the moment you land, you’ll notice the attention to detail, the commitment to comfort, and the quality that only a world-class airline can offer.
                    </p>
                    <p>
                        Whether you're flying for business, a romantic getaway, or a family vacation, British Airways offers an elevated travel experience you can trust. It remains a top choice for travelers who expect reliability, professionalism, and elegance in the skies.
                    </p>
                </section>
            </div>
            <div>
                <ContactSection name="British Airways" isSide={true} />
            </div>
        </div>
    );
}
