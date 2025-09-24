import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import React from "react";

export default function Page() {
    return (
        <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
            <div className="text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px]">
                <section>
                    <div className="flex justify-between gap-6 items-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                            Expedia.com
                        </h1>
                        <Image
                            src="/assets/expedia.png"
                            alt="expedia history"
                            width={250}
                            height={90}
                            className="rounded h-[100px] w-[100px] sm:w-[120px] sm:h-[110px] object-"
                        />
                    </div>
                    <p>
                        Expedia.com stands as one of the leading global online travel platforms, offering a seamless way for travelers to book everything they need for their trips—from flights and hotels to car rentals, cruises, vacation bundles, and on-the-ground experiences. It’s a go-to site for millions looking to plan and manage their travel easily and affordably.
                    </p>
                    <Image
      src="/assets/image/Expedia.jpg"
      alt="Fleet Overview"
      width={1200}
      height={600}
      className="rounded-2xl shadow-md mt-5 h-70"
    />
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Background & Origins</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Established:</strong> 1996, originally as part of Microsoft</li>
                        <li><strong>Founder:</strong> Rich Barton, who later launched Zillow</li>
                        <li><strong>Headquarters:</strong> Seattle, Washington, USA</li>
                        <li><strong>Parent Company:</strong> Expedia Group, Inc.</li>
                        <li><strong>Publicly Traded:</strong> Yes — listed on NASDAQ under the symbol EXPE</li>
                    </ul>
                    <p>
                        Expedia was a pioneer in bringing travel booking online, transforming the way people plan vacations and disrupting the traditional travel agent model.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">What You Can Book with Expedia</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Airfare:</strong> Search and book domestic or international flights with hundreds of airlines.</li>
                        <li><strong>Accommodations:</strong> Choose from over a million hotels, resorts, and lodges worldwide.</li>
                        <li><strong>Car Rentals:</strong> Rent vehicles from top brands such as <strong>Hertz</strong>, <strong>Avis</strong>, and <strong>Enterprise</strong>.</li>
                        <li><strong>Vacation Packages:</strong> Combine flights, hotels, and cars for added savings.</li>
                        <li><strong>Cruise Vacations:</strong> Reserve spots on major cruise lines, often with bundled deals.</li>
                        <li><strong>Activities & Experiences:</strong> Book tours, tickets, and attractions for destinations around the world.</li>
                        <li><strong>Last-Minute Deals:</strong> Great for spontaneous travelers looking for quick getaways.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Key Features & Benefits</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Price Match Guarantee:</strong> If you find a cheaper deal elsewhere, Expedia will refund the difference.</li>
                        <li><strong>Expedia Rewards:</strong> Earn and redeem points on bookings for discounts on future trips.</li>
                        <li><strong>Travel Insurance:</strong> Optional protection for trip cancellations, delays, and health emergencies.</li>
                        <li><strong>Mobile App:</strong> Manage your trips, receive updates, and make new bookings on the go.</li>
                        <li><strong>Bundle & Save:</strong> Book multiple services together (e.g., flight + hotel) to unlock exclusive pricing.</li>
                        <li><strong>Customer Reviews:</strong> Read verified feedback from travelers before you book.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Expedia Group: Brands & Subsidiaries</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Hotels.com</li>
                        <li>Vrbo (Vacation rentals)</li>
                        <li>Trivago (Hotel comparison engine, partly owned)</li>
                        <li>Orbitz</li>
                        <li>Travelocity</li>
                        <li>Hotwire</li>
                        <li>Expedia Cruises</li>
                    </ul>
                    <p>Note: Egencia, their corporate travel branch, was sold to American Express GBT in 2021.</p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">How Expedia Makes Money</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Merchant Model:</strong> Buys inventory (like hotel rooms) in bulk at a discount and resells it at a markup.</li>
                        <li><strong>Agency Model:</strong> Acts as a middleman, taking a commission from bookings made through the site.</li>
                        <li><strong>Advertising Model:</strong> Generates revenue through ads, especially on properties like Trivago.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Market Presence</h2>
                    <p>
                        Expedia ranks among the top three global online travel companies, competing with the likes of Booking.com, Airbnb, and Google Travel. With millions of monthly users, it maintains a strong presence across both desktop and mobile platforms.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Challenges & Customer Feedback</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Customer Support Delays:</strong> Especially during high-volume events like the COVID-19 pandemic.</li>
                        <li><strong>Hidden Costs:</strong> Some users report unexpected fees at the final stages of booking.</li>
                        <li><strong>Supplier Disputes:</strong> Occasionally, disagreements arise between Expedia and travel providers over cancellations and terms.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Innovation & Technology</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>AI & Machine Learning:</strong> For smarter, more personalized travel suggestions.</li>
                        <li><strong>ChatGPT Integration:</strong> Helps users plan trips through interactive tools.</li>
                        <li><strong>"One Key" Loyalty Program:</strong> A unified rewards system that spans Expedia, Hotels.com, and Vrbo.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Why Choose Expedia?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>A one-stop shop for all travel needs</li>
                        <li>Competitive prices, especially on bundled trips</li>
                        <li>A rewards program that adds value for regular travelers</li>
                        <li>Trusted for side-by-side comparisons across a huge inventory of providers</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Honest Review of Expedia.com</h2>
                    <p><strong>Overall Rating: ★★★★☆ (4.7/5)</strong></p>
                    <p>
                        “Planning my trip through Expedia was easy, budget-friendly, and surprisingly stress-free. It's a reliable hub for everything travel-related—simple, efficient, and full of value.”
                    </p>
                    <h3 className="text-2xl font-semibold mt-6">All-in-One Booking Convenience</h3>
                    <p>
                        One of Expedia's strongest features is its ability to consolidate all aspects of travel into a single, easy-to-use platform.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Flights, stays, and rentals neatly categorized</li>
                        <li>Quick side-by-side comparisons for pricing and features</li>
                        <li>Filters make it simple to find exactly what you need</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-6">Excellent Value with Bundled Deals</h3>
                    <p>
                        Expedia frequently promotes savings when you book a combination of services—like a flight plus hotel package. I personally saved over $300 compared to booking them separately.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6">Expedia Rewards: Worth Joining</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Points earned on flights, hotels, and more</li>
                        <li>VIP Access to special hotel perks and offers</li>
                        <li>Points stay active with regular booking activity</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-6">User-Friendly Mobile App</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Access all bookings without Wi-Fi</li>
                        <li>Get instant flight updates and gate changes</li>
                        <li>Built-in navigation to hotels and attractions</li>
                        <li>Airline check-in integration</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-6">Reliable Reviews and Accurate Listings</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>High-quality photos and 360° views</li>
                        <li>Full list of amenities</li>
                        <li>Clear cancellation and refund terms</li>

                        <Image
      src="/assets/image/reliable.webp"
      alt="Fleet Overview"
      width={1200}
      height={600}
      className="rounded-2xl shadow-md mt-5 h-70"
    />

                    </ul>

                    <h3 className="text-2xl font-semibold mt-6">Customer Support That Responds</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>24/7 live chat</li>
                        <li>Phone support (toll-free)</li>
                        <li>DIY tools for changes, cancellations, and refunds</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-6">Smooth Refund Experience</h3>
                    <p>
                        I had to cancel a prior trip due to a family matter, and since I had chosen a refundable booking, Expedia processed the refund quickly—no arguments, no paperwork.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6">Final Take</h3>
                    <p>
                        If you're looking for a dependable travel planning site, Expedia delivers across the board. It’s ideal for both detailed planners and spontaneous travelers.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6">Final Verdict: Recommended</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Best Suited For:</strong> Families, solo travelers, couples, and frequent flyers</li>
                        <li><strong>What Stands Out:</strong> Great deals when bundling</li>
                        <li>Easy-to-use mobile experience</li>
                        <li>Reward points that actually pay off</li>
                        <li>Honest, verified hotel reviews</li>
                    </ul>

                    <p><strong>Minor Downsides:</strong> Customer support can get delayed during peak travel seasons</p>
                </section>
            </div>
            <div>
                <ContactSection name="Expedia.com" isSide={true} />

            </div>
        </div>
    );
}
