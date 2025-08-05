import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import React from "react";

export default function Page() {
    return (
        <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
            <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px] text-lg">
                <div className="flex justify-between gap-6 items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                        PSA Airlines
                    </h1>
                    <Image
                        src="data:image/jpeg;base64,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"
                        alt="PSA Airlines History"
                        width={250}
                        height={90}
                        className="rounded h-[90px] w-[150px] sm:w-[280px] bg-white object-contain py-2"
                    />
                </div>
                <div className="mb-10 text-">
                    <p className="text-lg md:text-lg text-gray-700">
                        PSA Airlines, a wholly owned subsidiary of American Airlines Group, is one of the key regional players in the U.S. aviation industry. With its operations flying under the American Eagle brand, PSA is an essential component of American Airlines’ regional network, connecting smaller cities and communities to major hubs across the United States.
                    </p>
                </div>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🛫 Overview and Background</h2>
                    <p className="text-gray-700">
                        Originally founded in 1980 in Dayton, Ohio, PSA Airlines has evolved from a small regional operator into a critical regional partner for American Airlines. The current iteration of PSA Airlines should not be confused with the original Pacific Southwest Airlines, which merged with US Airways (and eventually American Airlines). The name “PSA” was revived to honor that legacy, but the current PSA Airlines operates solely as a feeder airline for American Eagle.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Headquartered in Dayton, Ohio, PSA runs its major maintenance and administrative facilities from this location while operating flights out of strategic hubs including:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>Charlotte Douglas International Airport (CLT)</li>
                        <li>Philadelphia International Airport (PHL)</li>
                        <li>Washington Reagan National Airport (DCA)</li>
                        <li>Dayton International Airport (DAY)</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🛩️ Fleet and Operations</h2>
                    <p className="text-gray-700">
                        PSA Airlines operates one of the youngest and most modern regional fleets in the country, composed entirely of Bombardier CRJ Series regional jets, which are ideal for short-haul routes. Their current fleet includes:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>CRJ200 (50 seats)</li>
                        <li>CRJ700 (65-70 seats)</li>
                        <li>CRJ900 (76-78 seats)</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        These aircraft are equipped to deliver a seamless and comfortable experience for passengers traveling shorter distances. The CRJ900 aircraft, in particular, feature two-class configurations with First Class, Main Cabin Extra, and Main Cabin seating options — offering elevated service even on regional routes.
                    </p>
                    <p className="text-gray-700 mt-2">
                        PSA conducts over 900 daily flights, connecting 100+ cities across the U.S. to American Airlines’ mainline network. As part of the Oneworld alliance (through American), PSA ensures that passengers have smooth connections to international and domestic destinations around the globe.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">👩‍✈️ Workforce and Culture</h2>
                    <p className="text-gray-700">
                        PSA Airlines employs over 5,000 aviation professionals, including pilots, flight attendants, maintenance teams, and ground operations staff. The airline has made significant investments in:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>Pilot and crew training programs</li>
                        <li>Safety initiatives</li>
                        <li>Diversity and inclusion policies</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        Their pilot pipeline programs are among the most sought after in the regional industry, offering a clear and structured pathway to join American Airlines as a mainline pilot. PSA has also received recognition for its safety record, operational reliability, and commitment to employee development.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">📦 Role Within American Airlines</h2>
                    <p className="text-gray-700">
                        As a regional airline, PSA plays a crucial role in feeding passengers from smaller markets into American Airlines’ massive global network. It allows American to serve cities that would not be economically feasible for larger aircraft, thereby expanding route options for travelers and maintaining a strong competitive edge in domestic air travel.
                    </p>
                    <p className="text-gray-700 mt-2">
                        PSA operates under a Capacity Purchase Agreement (CPA) with American Airlines, which means American controls scheduling, ticketing, and pricing, while PSA operates the flights and manages the crews and aircraft. This model has enabled PSA to focus on operational efficiency, customer service, and fleet reliability.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🛠️ Maintenance & Safety</h2>
                    <p className="text-gray-700">
                        PSA is FAA Part 121 certified and has an exceptional safety and maintenance track record. Their maintenance bases, located primarily in Dayton and Charlotte, are fully equipped with modern tools, highly trained technicians, and advanced aircraft diagnostic systems. The airline’s Safety Management System (SMS) ensures proactive risk management and strict regulatory compliance.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🌟 Highlights and Recognition</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Top-tier training programs for pilots and flight attendants</li>
                        <li>Strong promotion pipeline to American Airlines</li>
                        <li>Modern, efficient all-jet fleet</li>
                        <li>Robust operational reliability</li>
                        <li>Over 40 years of service in regional aviation</li>
                        <li>Strategic importance to American Airlines’ domestic network</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🌍 Looking Ahead</h2>
                    <p className="text-gray-700">
                        As the demand for regional travel rebounds and major airlines seek greater connectivity to underserved markets, PSA Airlines remains well-positioned for growth. With continued support from American Airlines Group and ongoing investments in personnel and technology, PSA is primed to enhance regional accessibility, improve passenger experiences, and strengthen its position as one of the most reliable regional carriers in the U.S.
                    </p>
                </section>
                <div className="mb-10 text-">
                    <h2 className="text-2xl font-semibold mb-4">
                        🌟 A Regional Powerhouse Elevating American Eagle’s Service ✈️🦅
                    </h2>
                    <p className="text-lg md:text-lg text-gray-700">
                        When it comes to efficient, reliable, and high-quality regional air travel in the United States, PSA Airlines quietly but powerfully plays a pivotal role in keeping the skies connected. As a wholly owned subsidiary of American Airlines Group, PSA operates exclusively under the American Eagle banner — and it’s much more than just a feeder airline. It’s a finely tuned operation with a strong commitment to safety, professionalism, and passenger satisfaction.
                    </p>
                    <p className="text-lg md:text-lg text-gray-700 mt-4">
                        Whether you're flying from a small Midwest city to a major coastal hub or connecting across the Eastern Seaboard, PSA Airlines delivers a consistently smooth and dependable travel experience that mirrors the service standards of its parent company.
                    </p>
                </div>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🛫 Seamless Connectivity with a Personal Touch</h2>
                    <p className="text-gray-700">
                        PSA Airlines specializes in short- to medium-haul routes, offering frequent connections from smaller communities to major American Airlines hubs like Charlotte (CLT), Philadelphia (PHL), and Washington DC (DCA). This regional network is essential in keeping underserved cities accessible and integrated with the larger national and international air travel ecosystem.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Passengers often remark on PSA's on-time performance, efficient boarding, and well-coordinated flight schedules — all of which help make connecting flights through American Airlines’ larger network easier and less stressful. Despite being a regional airline, PSA maintains the professional polish and high safety standards associated with mainline carriers.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">💺 Modern, Comfortable Aircraft</h2>
                    <p className="text-gray-700">
                        PSA operates an all-jet fleet of Bombardier CRJ aircraft, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>CRJ200 (50-seat configuration)</li>
                        <li>CRJ700 (65–70 seats)</li>
                        <li>CRJ900 (up to 78 seats, with two-class cabins)</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        These jets are modern, efficient, and surprisingly comfortable for regional flights. The CRJ900 aircraft feature First Class seating, spacious overhead bins, and enhanced in-cabin lighting — a pleasant surprise for those used to cramped regional aircraft. Cleanliness and cabin comfort are consistently praised by travelers, and PSA’s crews work diligently to ensure passengers feel well taken care of throughout the flight.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">👨‍✈️ Professional, Friendly Crews</h2>
                    <p className="text-gray-700">
                        One of PSA’s standout features is its crew professionalism and courtesy. Pilots and flight attendants frequently receive compliments for their friendly demeanor, clear communication, and attention to detail. Even on short flights, PSA staff make a genuine effort to ensure passengers feel welcome, informed, and appreciated.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Behind the scenes, PSA invests heavily in pilot and flight attendant training, including state-of-the-art simulators, ongoing safety courses, and crew resource management programs. These investments show in every flight: crews are not only well-trained, but also exude confidence and care — both in the air and on the ground.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🔧 Safety and Maintenance Excellence</h2>
                    <p className="text-gray-700">
                        Safety is a non-negotiable priority for PSA Airlines, and the company maintains one of the most respected maintenance programs in the regional aviation sector. With FAA Part 121 certification, a robust Safety Management System (SMS), and advanced in-house maintenance capabilities, PSA takes a proactive approach to aircraft reliability and safety compliance.
                    </p>
                    <p className="text-gray-700 mt-2">
                        The airline’s primary maintenance bases in Dayton, Charlotte, and other strategic locations ensure quick turnaround and meticulous inspections. This results in fewer delays, fewer cancellations, and a much higher level of trust from frequent flyers.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">📈 Career-Focused and Growth-Oriented</h2>
                    <p className="text-gray-700">
                        While passengers benefit from PSA’s smooth service, those working behind the scenes enjoy excellent career opportunities. PSA Airlines is known for being a gateway to the major leagues of aviation — particularly for pilots, many of whom transition from PSA to American Airlines through established pipeline programs.
                    </p>
                    <p className="text-gray-700 mt-2">
                        This pilot development program and emphasis on internal promotion not only make PSA a highly desirable place to work but also contribute to the airline’s stability and consistency in operations.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🌐 Part of Something Bigger: The American Airlines Network</h2>
                    <p className="text-gray-700">
                        Because PSA operates exclusively under the American Eagle brand, passengers can book flights through American Airlines and earn AAdvantage miles, enjoy seamless baggage transfers, and access international routes via American’s global network and Oneworld alliance partnerships.
                    </p>
                    <p className="text-gray-700 mt-2">
                        This integration ensures that flying PSA doesn't feel like flying a smaller airline — it feels like flying American, with all the benefits, loyalty rewards, and service expectations that come with it.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">🏆 Why Passengers Love PSA Airlines</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>✔️ Reliable operations and great on-time performance</li>
                        <li>✔️ Clean, comfortable, and quiet cabins</li>
                        <li>✔️ Friendly and attentive flight crews</li>
                        <li>✔️ Top-tier safety and maintenance</li>
                        <li>✔️ Smooth connection to American Airlines flights</li>
                        <li>✔️ Professionalism that exceeds expectations for a regional carrier</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl md:text-2xl font-semibold mb-4">✈️ Final Thoughts: A Quiet Force with a Strong Legacy</h2>
                    <p className="text-gray-700">
                        Though PSA Airlines may not be a household name to every traveler, it is undeniably one of the most vital and well-regarded regional airlines in the U.S. With a track record of safety, a fleet of modern jets, and a passionate team committed to operational excellence, PSA continues to earn the trust of both passengers and professionals alike.
                    </p>
                    <p className="text-gray-700 mt-2">
                        For those seeking a reliable and pleasant flying experience on regional routes, PSA Airlines delivers on every front — and serves as a key connector in the broader American Airlines family.
                    </p>
                </section>
            </div>
            <div>
                <ContactSection name="PSA Airlines" isSide={true} />

            </div>
        </div>
    );
}
