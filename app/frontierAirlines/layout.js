// app/layout.js or app/layout.tsx

import Script from 'next/script';
import { headers } from 'next/headers';

const headersList = headers();
  const host = headersList.get("host"); 
  const protocol = host?.includes("local") ? "http" : "https";
  const host_url = `${protocol}://${host}`;

export const metadata = {
  title: "Frontier Customer Service Number 215-268-8872",
  description: "Looking for Frontier customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Frontier get human.",
  charset: "utf-8",
  keywords: "Frontier customer service, Frontier phone number, Frontier customer phone number, Frontier customer service phone number, Frontier customer service phone, call Frontier, Frontier support number, Frontier customer number, Frontier customer service number, Frontier 800 number, Frontier customer support number, Frontier 800, Frontier toll free, Frontier customer service toll free, Frontier customer service 800, Frontier customer service 800 number, Frontier customer service 800 phone, Frontier contact number, Frontier contact phone, Frontier contact, Frontier customer service contact, Frontier customer service contact number, Frontier customer service email, Frontier customer service email address, Frontier customer service chat, Frontier customer service live chat, contact Frontier, contact Frontier customer service, Frontier.com phone number, Frontier.com customer service, Egencia LLC phone number, Egencia LLC customer service, Frontier phone number, Frontier customer service, Frontier get human,",
  robots: "index, follow",
  alternates: {
    canonical: `${host_url}/frontierAirlines`,
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Frontier Airlines",
  "url": "https://www.flyfrontier.com",
  "logo": `${host_url}/assets/airline/frontier.webp`,
  "image":`${host_url}/assets/airline/frontier.webp`,
  "description": "Frontier Airlines is an American ultra low-cost carrier headquartered in Denver, Colorado, operating flights to over 115 destinations across the United States, Mexico, the Caribbean, and Central America.",
  "telephone": "+1-801-401-9000",
  "foundingDate": "1994-02-08",
  "foundingLocation": {
    "@type": "Place",
    "name": "Denver, Colorado, United States"
  },
  "numberOfEmployees": 4700,
  "memberOf": {
    "@type": "Organization",
    "name": "Indigo Partners"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Mexico" },
    { "@type": "Country", "name": "Caribbean" },
    { "@type": "Country", "name": "Central America" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4545 Airport Way",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80239",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-801-401-9000",
    "contactType": "Customer Service",
    "areaServed": ["US", "MX", "Caribbean", "Central America"],
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/flyfrontier",
    "https://www.instagram.com/flyfrontier",
    "https://twitter.com/FlyFrontier",
    "https://www.linkedin.com/company/frontier-airlines"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Barry L. Biffle",
    "startDate": "2015-06-01"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "136"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "115+"
    }
  ],
  "tickerSymbol": "NASDAQ:ULCC"
}


const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Frontier customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Frontier by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Frontier Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Frontier reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Frontier Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Frontier Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Frontier Customer Support Service"
  }
};
export default function RootLayout({ children }) {
  return (
    <section>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(org)
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq)
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />
      {children}
    </section>
  );
}
