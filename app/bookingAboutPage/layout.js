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
const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Booking.com",
  "url": "https://www.booking.com",
  "logo": "https://www.booking.com/logo.png",
  "description": "By investing in technology that takes the friction out of travel, Booking.com seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay.",
  "foundingDate": "1996",
  "foundingLocation": "Enschede, Netherlands",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Booking Holdings",
    "url": "https://www.bookingholdings.com",
    "tickerSymbol": "BKNG"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amsterdam",
    "addressRegion": "Noord‑Holland",
    "addressCountry": "NL"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+1‑212‑419‑xxxx",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/bookingcom",
    "https://www.linkedin.com/company/booking.com",
    "https://www.instagram.com/bookingcom",
    "https://twitter.com/bookingcom",
    "https://www.youtube.com/booking"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Glenn Fogel",
    "jobTitle": "CEO"
  },
  "numberOfEmployees": 17000,
  "memberOf": {
    "@type": "Organization",
    "name": "Booking Holdings"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Languages Supported",
      "value": "43"
    },
    {
      "@type": "PropertyValue",
      "name": "Properties Listed",
       "value": "28 million"
    }
  ]
}
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Booking.com customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Booking.com by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Booking.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Booking.com reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Expedia Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Booking.com Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Booking.com Customer Support Service"
  }
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
