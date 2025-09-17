// app/layout.js or app/layout.tsx

import Script from 'next/script';
import { headers } from 'next/headers';

const headersList = headers();
  const host = headersList.get("host"); 
  const protocol = host?.includes("local") ? "http" : "https";
  const host_url = `${protocol}://${host}`;

export const metadata = {
  title: "Hawaiian Customer Service Number 215-268-8872",
  description: "Looking for Hawaiian customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Hawaiian get human.",
  charset: "utf-8",
  keywords: "Hawaiian customer service, Hawaiian phone number, Hawaiian customer phone number, Hawaiian customer service phone number, Hawaiian customer service phone, call Hawaiian, Hawaiian support number, Hawaiian customer number, Hawaiian customer service number, Hawaiian 800 number, Hawaiian customer support number, Hawaiian 800, Hawaiian toll free, Hawaiian customer service toll free, Hawaiian customer service 800, Hawaiian customer service 800 number, Hawaiian customer service 800 phone, Hawaiian contact number, Hawaiian contact phone, Hawaiian contact, Hawaiian customer service contact, Hawaiian customer service contact number, Hawaiian customer service email, Hawaiian customer service email address, Hawaiian customer service chat, Hawaiian customer service live chat, contact Hawaiian, contact Hawaiian customer service, Hawaiian.com phone number, Hawaiian.com customer service, Egencia LLC phone number, Egencia LLC customer service, Hawaiian phone number, Hawaiian customer service, Hawaiian get human,",
  robots: "index, follow",
  alternates: {
    canonical: `${host_url}/hawaiianAirlines`,
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hawaiian Airlines",
  "url": "https://www.hawaiianairlines.com",
  "logo": `${host_url}/assets/airline/hawaiian.webp`,
  "image": `${host_url}/assets/airline/hawaiian.webp`,
  "description": "Hawaiian Airlines is the largest airline in Hawaii. Headquartered in Honolulu, it operates flights to, from, and within the Hawaiian Islands, as well as to North America, Asia, and the South Pacific.",
  "telephone": "+18003673555",
  "foundingDate": "1929-01-30",
  "foundingLocation": "Honolulu, Hawaii, United States",
  "numberOfEmployees": 6800,
  "areaServed": {
    "@type": "Place",
    "name": "Pacific Rim, United States, Asia, Oceania"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3375 Koapaka Street",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "postalCode": "96819",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+18003673555",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/HawaiianAirlines",
    "https://www.linkedin.com/company/hawaiian-airlines",
    "https://www.youtube.com/user/HawaiianAirlines",
    "https://www.instagram.com/hawaiianairlines",
    "https://twitter.com/HawaiianAir"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Peter Ingram",
    "startDate": "2018-03-01"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "60"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "31"
    }
  ],
  "tickerSymbol": "NASDAQ:HA",
  "memberOf": [
    {
      "@type": "Organization",
      "name": "IATA"
    }
  ]
}



const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Hawaiian customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Hawaiian by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Hawaiian Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Hawaiian reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Hawaiian Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hawaiian Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Hawaiian Customer Support Service"
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
