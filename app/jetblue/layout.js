// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Jetblue Airline Customer Service Number 215-268-8872",
  description: "Looking for Jetblue airline customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Jetblue airline get human.",
  charset: "utf-8",
  keywords: "Jetblue airline customer service, Jetblue airline phone number, Jetblue airline customer phone number, Jetblue airline customer service phone number, Jetblue airline customer service phone, call Jetblue airline, Jetblue airline support number, Jetblue airline customer number, Jetblue airline customer service number, Jetblue airline 800 number, Jetblue airline customer support number, Jetblue airline 800, Jetblue airline toll free, Jetblue airline customer service toll free, Jetblue airline customer service 800, Jetblue airline customer service 800 number, Jetblue airline customer service 800 phone, Jetblue airline contact number, Jetblue airline contact phone, Jetblue airline contact, Jetblue airline customer service contact, Jetblue airline customer service contact number, Jetblue airline customer service email, Jetblue airline customer service email address, Jetblue airline customer service chat, Jetblue airline customer service live chat, contact Jetblue airline, contact Jetblue airline customer service, Jetblue airline.com phone number, Jetblue airline.com customer service, Egencia LLC phone number, Egencia LLC customer service, Jetblue airline phone number, Jetblue airline customer service, Jetblue airline get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Airline",
  "name": "JetBlue Airways",
  "url": "https://www.jetblue.com",
  "logo": "https://www.jetblue.com/content/dam/jetblue/common/logos/jetblue-logo.svg",
  "image": "https://www.jetblue.com/content/dam/jetblue/common/planes/jetblue-airbus-a321.jpg",
  "description": "JetBlue Airways Corporation is an American low-cost airline headquartered in Long Island City, New York City.",
  "telephone": "+1 (800) 538‑2583",
  "foundingDate": "1998-08-14",
  "foundingLocation": "Long Island City, Queens, New York, USA",
  "numberOfEmployees": "≈23000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "27‑01 Queens Plaza North",
    "addressLocality": "Long Island City",
    "addressRegion": "NY",
    "postalCode": "11101",
    "addressCountry": "US"
  },
  "headquarters": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Long Island City",
      "addressRegion": "NY",
      "addressCountry": "US"
    }
  },
  "iataCode": "B6",
  "icaoCode": "JBU",
  "callSign": "JETBLUE",
  "fleetSize": "286",
  "destinations": "114",
  "memberOf": [],
  "areaServed": {
    "@type": "Country",
    "name": [
      "United States",
      "Canada",
      "Mexico",
      "Caribbean",
      "Central America",
      "Europe"
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 (800) 538‑2583",
    "contactType": "Customer Service",
    "areaServed": ["US", "CA", "MX"],
    "availableLanguage": ["English", "Spanish"]
  },
  "founder": {
    "@type": "Person",
    "name": "David Neeleman"
  },
  "chiefExecutive": {
    "@type": "Person",
    "name": "Joanna Geraghty",
    "startDate": "2024-02"
  },
  "employee": [
    { "@type": "Person", "name": "Marty St. George", "jobTitle": "President" },
    { "@type": "Person", "name": "Warren Christie", "jobTitle": "Chief Operating Officer" },
    { "@type": "Person", "name": "Carol Clements", "jobTitle": "Chief Digital & Technology Officer" }
  ],
  "tickerSymbol": "NASDAQ:JBLU",
  "sameAs": [
    "https://www.facebook.com/jetblue",
    "https://twitter.com/jetblue",
    "https://www.instagram.com/jetblue",
    "https://www.linkedin.com/company/jetblue",
    "https://www.youtube.com/jetblue"
  ],
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Founded", "value": "1998" },
    { "@type": "PropertyValue", "name": "Commenced operations", "value": "2000-02-11" },
    { "@type": "PropertyValue", "name": "Fleet Size", "value": "286" },
    { "@type": "PropertyValue", "name": "Destinations", "value": "114" },
    { "@type": "PropertyValue", "name": "Employees", "value": "23000" }
  ]
}

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Jetblue Airline customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Jetblue Airline by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIN affiliated with Jetblue Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that helps users contact customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Jetblue Airline reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Jetblue Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jetblue Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Jetblue Customer Support Service"
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
