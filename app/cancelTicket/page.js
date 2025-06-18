import Image from 'next/image';

export default function Page() {
  return (
    <div className="">
      <div className=" min-h-screen my-10 px-4 sm:px-8 max-w-[80%] mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <div className="mb-10">
          <Image
            src="/assets/home/airline3.png"
            alt="Travel Policy Hero"
            width={800}
            height={200}
            className="rounded-xl w-full h-[200px] object-cover"
          />
        </div>

        <div className="text-4xl font-extralight text-gray-700 mb-10 text-center">Flight Ticket Policies & Guidelines</div>

        <div className="space-y-10 text-lg text-gray-800">
          <PolicySection title="Refund Timeline">
            Refunds usually take 2 to 3 billing cycles to process. In rare cases, it may take up to 6 billing cycles.
          </PolicySection>

          <PolicySection title="Changes to Booking">
            Once your changes are confirmed, any further modifications will incur a change fee plus any fare difference. This fee applies each time you make a change. Most discounted tickets are non-changeable.
            <p className="mt-2 text-red-600 font-semibold">⚠️ Note: Change fees are non-refundable, regardless of the reason.</p>
          </PolicySection>

          <PolicySection title="Name Corrections">
            Tickets are non-transferable. No changes or corrections to passenger names are allowed after confirmation.
          </PolicySection>

          <PolicySection title="No Show Policy">
            If a passenger fails to show up on time at the airport, they will be marked as a No Show. In such cases, the entire booking is canceled, and the full amount paid is forfeited.
          </PolicySection>

          <PolicySection title="Itinerary Confirmation">
            It is the traveler’s responsibility to double-check all details—names, travel dates, flight numbers, airlines, and airports—especially if booked online or with our agent.
            Contact our support team within 4 hours if you find any issues. After 4 hours, your booking will be considered accepted, and we will not be liable for any errors. Please review and save your itinerary.
          </PolicySection>

          <PolicySection title="Price Guarantee">
            Ticket prices are only guaranteed after ticket issuance, which can take up to 24 hours. If you don't receive your ticket within 24 hours, please call us immediately.
          </PolicySection>

          <PolicySection title="Reservation Confirmation">
            Sometimes, you'll get a confirmation number before your ticket is officially issued. The booking is not final until the actual ticket number is generated. In rare cases, due to technical errors, we may be unable to honor a quoted fare.
          </PolicySection>

          <PolicySection title="Passports, Visas & Health Requirements">
            Before you book, make sure you meet all passport, visa, health, and travel requirements of the countries you're visiting or transiting through—even for connecting flights.
            Canadian and U.S. citizens typically need a valid passport. Many countries require passports to be valid for at least six months after your return date. We're not responsible for denied boarding or deportation, even if all documents appear complete.
          </PolicySection>

          <PolicySection title="Credit/Debit Card Authorization">
            By booking, you authorize us to charge your card for the total amount shown.
          </PolicySection>

          <PolicySection title="Basic Economy Tickets">
            Unless stated otherwise, all tickets are in Basic Economy Class, which does not include checked baggage and cannot be upgraded.
          </PolicySection>

          <PolicySection title="Special Requests (Seats, Meals, Frequent Flyer, etc.)">
            All requests for seats, meals, frequent flyer info, etc., are non-guaranteed. We charge a non-refundable service fee to place these requests, but the airline has the final say. It's best to confirm directly with the airline before your departure.
          </PolicySection>

          <PolicySection title="Flight Schedule Changes">
            We try to notify customers of any flight changes. However, we strongly recommend that you reconfirm your flight with the airline within 72 hours of departure.
          </PolicySection>

          <PolicySection title="Your Responsibility as a Traveler">
            Always reconfirm your flights 24 to 72 hours before departure. If you're already traveling, be sure to check your email frequently for updates and respond promptly.
          </PolicySection>

          <div className="mt-10">
            <Image
              src="/assets/home/airline3.png"
              alt="Airport View"
              width={800}
              height={200}
              className="rounded-xl w-full h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicySection({ title, children }) {
  return (
    <section>
      <div className="text-xl font-extralight text-gray-900 mb-3 underline">{title}</div>
      <div className="text-gray-600 text-xl  leading-relaxed space-y-2 mb-8">{children}</div>
    </section>
  );
}