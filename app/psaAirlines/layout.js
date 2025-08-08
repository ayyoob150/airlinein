// app/layout.js or app/layout.tsx

export const metadata = {
  title: "PSA Airline Customer Service Number 215-268-8872",
  description: "Looking for PSA Airline customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, PSA Airline get human.",
  charset: "utf-8",
  keywords: "PSA Airline customer service, PSA Airline phone number, PSA Airline customer phone number, PSA Airline customer service phone number, PSA Airline customer service phone, call PSA Airline, PSA Airline support number, PSA Airline customer number, PSA Airline customer service number, PSA Airline 800 number, PSA Airline customer support number, PSA Airline 800, PSA Airline toll free, PSA Airline customer service toll free, PSA Airline customer service 800, PSA Airline customer service 800 number, PSA Airline customer service 800 phone, PSA Airline contact number, PSA Airline contact phone, PSA Airline contact, PSA Airline customer service contact, PSA Airline customer service contact number, PSA Airline customer service email, PSA Airline customer service email address, PSA Airline customer service chat, PSA Airline customer service live chat, contact PSA Airline, contact PSA Airline customer service, PSA Airline.com phone number, PSA Airline.com customer service, Egencia LLC phone number, Egencia LLC customer service, PSA Airline phone number, PSA Airline customer service, PSA Airline get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PSA Airlines, Inc.",
  "url": "https://www.psaairlines.com",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f0/PSA_Airlines_Logo.svg",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/PSA_Airlines_Logo.svg",
  "description": "PSA Airlines, Inc. is an American regional airline and wholly owned subsidiary of American Airlines Group, operating American Eagle regional jet service across the United States.",
  "telephone": "+1-800-235-0986",
  "foundingDate": "1979",
  "foundingLocation": "Latrobe, Pennsylvania, United States",
  "numberOfEmployees": "≈5,000 (2025)",
  "parentOrganization": {
    "@type": "Organization",
    "name": "American Airlines Group",
    "url": "https://www.aa.com"
  },
  "headquarters": {
    "@type": "PostalAddress",
    "streetAddress": "Charlotte Douglas International Airport",
    "addressLocality": "Charlotte",
    "addressRegion": "North Carolina",
    "postalCode": "28208",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-235-0986",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.facebook.com/psaairlines",
    "https://twitter.com/psaairlines",
    "https://www.linkedin.com/company/psa-airlines"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Dion Flannery",
    "jobTitle": "President & CEO"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "140 (Bombardier CRJ-700 and CRJ-900 aircraft)"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "71"
    },
    {
      "@type": "PropertyValue",
      "name": "Hubs",
      "value": "Charlotte, Dallas/Fort Worth, Philadelphia, Washington National"
    }
  ],
  "tickerSymbol": null
}



const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact PSA Airline customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact PSA Airline by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with PSA Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to PSA Airline reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call PSA Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "PSA Airline Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "PSA Airline Customer Support Service"
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
