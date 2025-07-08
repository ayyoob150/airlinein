import React from "react";

export default function Page() {
    return (
        <div className="bg-white text-gray-800  px-6 md:px-20 py-10 space-y-14 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center">GoToGate: Review, Ownership, Services & What You Should Know Before Booking</h1>

            <section>
                <h2 className="text-2xl font-semibold">Who Owns GoToGate?</h2>
                <p>GoToGate is part of the Etraveli Group AB, a major European travel tech company headquartered in Uppsala, Sweden. With a workforce of around 2,600 employees, the group also owns other well-known travel brands including:</p>
                <ul className="list-disc pl-6">
                    <li>FlightNetwork</li>
                    <li>Seat24</li>
                    <li>MyTrip</li>
                    <li>TripStack</li>
                </ul>
                <p>GoToGate serves as a global flight search and booking platform, offering flights from over 650 airlines. It's among the largest players in the online travel booking industry, reaching approximately 30 million travelers annually across 77+ countries.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Acquisition Attempt by Booking Holdings</h2>
                <p>In 2021, Booking Holdings (owner of Booking.com, Priceline, and Kayak) proposed a $1.83 billion acquisition of Etraveli Group. However, the European Commission blocked the deal, citing concerns about reduced competition in the online flight booking sector.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Global Reach & Operations</h2>
                <p>GoToGate claims to process enough bookings daily to fill 1,440 Boeing 737 aircrafts—a reflection of its vast scale. However, scale doesn’t always equate to service quality, as you'll discover below.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">What Services Does GoToGate Offer?</h2>
                <h3 className="text-xl font-semibold mt-4">Flight Bookings</h3>
                <p>GoToGate functions primarily as a flight aggregator, scanning hundreds of airlines—major carriers and low-cost options—to present competitive airfare options. These fares are often lower than those listed directly by airlines, though the difference may be due to limited support or added post-purchase fees.</p>

                <h3 className="text-xl font-semibold mt-4">Optional Add-ons</h3>
                <ul className="list-disc pl-6">
                    <li>Baggage allowance</li>
                    <li>Seat selection</li>
                    <li>SMS notifications</li>
                    <li>Flexible or refundable tickets</li>
                </ul>
                <p>Note: These add-ons are often non-refundable and may incur additional charges not clearly outlined upfront.</p>

                <h3 className="text-xl font-semibold mt-4">Hotels & Cars</h3>
                <p>Though flights are their core business, GoToGate also partners with third parties to offer bookings for over 300,000 hotels and various car rental agencies worldwide.</p>

                <h3 className="text-xl font-semibold mt-4">App Features</h3>
                <ul className="list-disc pl-6">
                    <li>Booking management</li>
                    <li>Early check-in features</li>
                    <li>Real-time flight updates</li>
                    <li>Access to boarding passes</li>
                    <li>Limited exclusive promotions like free early check-in</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Common Customer Complaints & Red Flags</h2>
                <h3 className="text-xl font-semibold mt-4">Refunds & Cancellations</h3>
                <ul className="list-disc pl-6">
                    <li>Many users report unexplained delays or denials of refunds—even when airlines have approved them.</li>
                    <li>Refunds are often reduced by service fees, especially if customers didn’t buy premium support packages.</li>
                    <li>COVID-19-related cancellations worsened the situation, with some users waiting months or more for any response.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Hidden Charges</h3>
                <ul className="list-disc pl-6">
                    <li>The advertised price often increases at checkout due to unexpected fees.</li>
                    <li>Basic services like SMS alerts or seat selections may come at a surprise cost—and are typically non-refundable.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Customer Support Woes</h3>
                <ul className="list-disc pl-6">
                    <li>Numerous users describe being stuck in loops with automated bots, offshore agents, or unresponsive teams.</li>
                    <li>Dropped calls, repeated escalation promises, and unresolved tickets are common.</li>
                    <li>GoToGate has earned an “F” rating from the Better Business Bureau (BBB), citing poor complaint handling and transparency.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Booking Errors</h3>
                <ul className="list-disc pl-6">
                    <li>Cases of wrong passenger names, missed connections, or rescheduled flights without notice have been widely reported.</li>
                    <li>In worst-case scenarios, travelers showed up at the airport to find no valid booking at all.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Are There Any Positives?</h2>
                <ul className="list-disc pl-6">
                    <li>Smooth bookings without changes or disruptions tend to go through without issues.</li>
                    <li>Some users who only needed a basic booking (no extras, no changes) found GoToGate to be a cost-effective option.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Final Verdict: Should You Use GoToGate?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold">Pros</h3>
                        <ul className="list-disc pl-6">
                            <li>Often cheaper than booking directly</li>
                            <li>Easy app-based booking and updates</li>
                            <li>Variety of flight options</li>
                            <li>Offers baggage, insurance, and seat selection</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Cons</h3>
                        <ul className="list-disc pl-6">
                            <li>Unclear pricing and hidden fees</li>
                            <li>Refund & cancellation delays</li>
                            <li>Difficult or no customer service</li>
                            <li>Booking errors and support issues</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4 font-semibold">Recommendation:</p>
                <p>GoToGate may be worth considering only if:</p>
                <ul className="list-disc pl-6">
                    <li>You're confident no changes will be needed.</li>
                    <li>You don’t require customer service.</li>
                    <li>You understand and accept the risks.</li>
                </ul>
                <p>For most travelers, especially those seeking reliable customer support and transparent pricing, booking directly with the airline or through a reputable online travel agency (OTA) is the safer route.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Tips for Booking Safely with GoToGate</h2>
                <ul className="list-disc pl-6">
                    <li>Take screenshots of every step—prices, services selected, and totals.</li>
                    <li>Read the terms carefully for refunds, changes, and add-ons.</li>
                    <li>Use a credit card to protect yourself in case of a dispute.</li>
                    <li>Know your legal rights:</li>
                    <ul className="list-disc pl-12">
                        <li>U.S.: 24-hour cancellation window (DOT rules).</li>
                        <li>EU: Protections under the Package Travel Directive.</li>
                    </ul>
                    <li>If support fails, consider filing a chargeback through your credit card or escalating to Etraveli’s corporate contacts.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Useful Resources & Review Platforms</h2>
                <ul className="list-disc pl-6">
                    <li>Etraveli Group - Wikipedia</li>
                    <li>GoToGate — BBB Profile</li>
                    <li>Customer Reviews on Sitejabber</li>
                    <li>Reddit Threads on GoToGate</li>
                    <li>Travel Complaints - ComplaintRoom.in</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Want Help Finding a Better Deal?</h2>
                <p>We can help you compare GoToGate prices with:</p>
                <ul className="list-disc pl-6">
                    <li>Direct airline websites</li>
                    <li>Trusted OTAs like Expedia, Skyscanner, or Google Flights</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">What Travelers Are Saying About GoToGate: Real User Feedback & Ratings</h2>
                <h3 className="text-xl font-semibold mt-4">Positive Reviews from Trustpilot and Other Platforms</h3>
                <ul className="list-disc pl-6">
                    <li><strong>Jennifer Bouras (New Zealand, June 14, 2025):</strong> “I’ve been booking flights through GoToGate for several years now...Highly recommend.”</li>
                    <li><strong>Laila F. (March 17, 2025):</strong> “Fantastic website! ...Well done to the team.”</li>
                    <li><strong>Italo C. (March 8, 2025):</strong> “My experience was excellent... Definitely a site I’d recommend to others.”</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4">User Reviews on Sitejabber & Other Platforms</h3>
                <ul className="list-disc pl-6">
                    <li><strong>Emma (UK):</strong> “Great deals and very user-friendly... Highly recommended!”</li>
                    <li><strong>Paul X. (Utah, June 2025):</strong> “The website is easy to use... Just what I needed.”</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4">Positive Experiences Shared on Better Business Bureau (BBB)</h3>
                <ul className="list-disc pl-6">
                    <li><strong>Marguritte M. (May 3, 2025):</strong> “Booking was super quick and simple...”</li>
                    <li><strong>Kevin S. (February 24, 2025):</strong> “Customer support representative was kind and helpful.”</li>
                    <li><strong>Quince H. (February 15, 2025):</strong> “Using the GoToGate app was a breeze...”</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Key Takeaways from Positive Reviews</h2>
                <ul className="list-disc pl-6">
                    <li>Low-cost fares</li>
                    <li>Smooth booking process</li>
                    <li>Mobile convenience</li>
                    <li>Simple and straightforward booking interface</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Final Thoughts on Positive Feedback</h2>
                <p>These testimonials suggest that when bookings proceed without complications, GoToGate offers excellent value with a hassle-free experience. If you’re comfortable booking flights as-is and don’t anticipate needing extensive support or changes, it can be a reliable, budget-friendly choice.</p>
                <p className="font-semibold">Reminder:</p>
                <p>Always keep records of your bookings and add-ons, and be aware of the potential risks highlighted in mixed or negative reviews. Staying informed ensures you can enjoy the best of what GoToGate offers while protecting yourself from common pitfalls.</p>
            </section>
        </div>
    );
}
