import Image from 'next/image';

export default function Page() {
  return (
    <div className="">
      <div className=" min-h-screen my-10 px-4 sm:px-8 max-w-[94%] mx-auto bg-white rounded-2xl shadow p-6 sm:p-10">
        <div className="mb-6">
          <Image
            src="/assets/home/airline3.png" // Replace with actual image path
            alt="Flight Policy"
            width={800}
            height={200}
            className="rounded-xl w-full h-[200px] object-cover"
          />
        </div>
        <h1 className="text-4xl  text-gray-700 mb-10 text-center">Flight Ticket Terms & Policies</h1>

        <div className="space-y-6 text-gray-700">
          <PolicySection title="Cancellation">
            This is a discounted ticket and is 100% non-refundable once confirmed.
          </PolicySection>

          <PolicySection title="Changes">
            After the reservation is confirmed, any additional changes will incur a change fee plus any fare difference. Discounted tickets often cannot be changed at all. Change fees, once applied, are non-refundable.
          </PolicySection>

          <PolicySection title="Name Corrections">
            Tickets are non-transferable and no name corrections are allowed once the booking is confirmed.
          </PolicySection>

          <PolicySection title="No Show Policy">
            A passenger who does not show up at the airport on time will be considered a "no-show." In such cases, the missed flight and any onward flights will be canceled, and the full amount paid will be forfeited.
          </PolicySection>

          <PolicySection title="Itinerary Review">
            It is the traveler’s responsibility to verify and reconfirm all itinerary details including names, dates, flight numbers, airlines, and airport changes. If you notice any discrepancies, you must contact our customer service agent within 4 hours of the booking completion. If we do not hear from you within this time frame, we will consider the booking as accepted and will not be held responsible for any errors thereafter.
          </PolicySection>

          <PolicySection title="Ticket Issuance">
            Prices are only guaranteed after the ticket has been issued, which may take up to 24 hours. Please call us if you have not received your ticket within that time.
          </PolicySection>

          <PolicySection title="Booking Confirmation">
            In some cases, you may receive a confirmation number before the ticket is issued. The booking process is not complete until you receive the ticket number. Occasionally, due to unforeseen errors, we may not be able to honor the quoted fare.
          </PolicySection>

          <PolicySection title="Passport/Visas/Health Requirements">
            You are responsible for meeting all passport, visa, health, and other travel entry requirements for all countries you are visiting or transiting through. Canadian/US citizens typically need a valid passport for most international travel. Many countries require that your passport be valid for at least six months beyond your return date. Entry can be denied even with valid documents, and we are not liable for denied boarding or deportation.
          </PolicySection>

          <PolicySection title="Credit/Debit Card Authorization">
            By proceeding with payment, you authorize the ticketing agent to charge your card for the total amount indicated.
          </PolicySection>

          <PolicySection title="Basic Economy Tickets">
            All tickets are booked in Basic Economy unless stated otherwise. These fares generally do not include checked baggage and cannot be upgraded.
          </PolicySection>

          <PolicySection title="Special Requests">
            Seat selection, meal requests, frequent flyer points, and other preferences are requests only and are not guaranteed. Any service fee charged for such requests is non-refundable.
          </PolicySection>

          <PolicySection title="Schedule Changes">
            We do our best to inform customers of any schedule changes. However, it is your responsibility to confirm your flight with the airline 24–72 hours before departure.
          </PolicySection>

          <PolicySection title="Customer Responsibility">
            You must reconfirm your flights, regularly check your email for updates, and respond promptly to any schedule changes.
          </PolicySection>
        </div>
      </div>
    </div>
  );
}

function PolicySection({ title, children }) {
  return (
    <section>
      <div className="text-xl font-semibold text-sky-800 mb-3">{title}</div>
      <div className="text-gray-600 text-xl  leading-relaxed space-y-2 mb-8">{children}</div>
    </section>
  );
}