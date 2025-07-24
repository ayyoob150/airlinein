// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Booking Customer Service Number 215-268-8872",
  description: "Looking for Booking customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Booking get human.",
  charset: "utf-8",
  keywords: "Booking customer service, Booking phone number, Booking customer phone number, Booking customer service phone number, Booking customer service phone, call Booking, Booking support number, Booking customer number, Booking customer service number, Booking 800 number, Booking customer support number, Booking 800, Booking toll free, Booking customer service toll free, Booking customer service 800, Booking customer service 800 number, Booking customer service 800 phone, Booking contact number, Booking contact phone, Booking contact, Booking customer service contact, Booking customer service contact number, Booking customer service email, Booking customer service email address, Booking customer service chat, Booking customer service live chat, contact Booking, contact Booking customer service, Booking.com phone number, Booking.com customer service, Egencia LLC phone number, Egencia LLC customer service, Booking phone number, Booking customer service, Booking get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(org)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />
      {children}
    </section>
  );
}
