// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Expedia Customer Service Number 215-268-8872",
  description: "Looking for Expedia customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Expedia get human.",
  charset: "utf-8",
  keywords: "Expedia customer service, Expedia phone number, Expedia customer phone number, Expedia customer service phone number, Expedia customer service phone, call Expedia, Expedia support number, Expedia customer number, Expedia customer service number, Expedia 800 number, Expedia customer support number, Expedia 800, Expedia toll free, Expedia customer service toll free, Expedia customer service 800, Expedia customer service 800 number, Expedia customer service 800 phone, Expedia contact number, Expedia contact phone, Expedia contact, Expedia customer service contact, Expedia customer service contact number, Expedia customer service email, Expedia customer service email address, Expedia customer service chat, Expedia customer service live chat, contact Expedia, contact Expedia customer service, Expedia.com phone number, Expedia.com customer service, Egencia LLC phone number, Egencia LLC customer service, Expedia phone number, Expedia customer service, Expedia get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};
const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Expedia Group, Inc.",
  "url": "https://www.expediagroup.com",
  "logo": "https://logos-world.net/wp-content/uploads/2020/04/Expedia-Logo.png",
  "image": "https://www.expediagroup.com/content/dam/expedia-group/global/images/our-brands.jpg",
  "description": "Expedia Group, Inc. is an American travel technology company operating online travel booking brands including Expedia, Hotels.com, Vrbo, Travelocity, Hotwire, Orbitz, CarRentals.com, Trivago and more.",
  "telephone": "+1-206-481-7200",
  "foundingDate": "1996-10-22",
  "foundingLocation": "Seattle, Washington, United States",
  "numberOfEmployees": 16500,
  "memberOf": [
    { "@type": "Organization", "name": "Expedia Group" }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1111 Expedia Group Way West",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-206-481-7200",
    "contactType": "Customer Service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/expediagroup",
    "https://twitter.com/expediagroup",
    "https://www.linkedin.com/company/expedia-group",
    "https://www.instagram.com/expediagroup"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Ariane Gorin",
    "startDate": "2024-05"
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Barry Diller",
      "jobTitle": "Executive Chairman"
    },
    {
      "@type": "Person",
      "name": "Julie Whalen",
      "jobTitle": "CFO"
    },
    {
      "@type": "Person",
      "name": "Brad Bentley",
      "jobTitle": "COO"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Brands",
      "value": "Expedia, Hotels.com, Vrbo, Travelocity, Hotwire, Orbitz, CarRentals.com, Trivago, Egencia, Expedia Cruises, ebookers, CheapTickets"
    },
    {
      "@type": "PropertyValue",
      "name": "Ticker Symbol",
      "value": "EXPE"
    }
  ],
  "tickerSymbol": "NASDAQ:EXPE"
}

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Expedia customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Expedia by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Expedia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Expedia reservations?",
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
  "name": "Expedia Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Expedia Customer Support Service"
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
