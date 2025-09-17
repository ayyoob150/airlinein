// app/layout.js or app/layout.tsx

import Script from 'next/script';
import { headers } from 'next/headers';

const headersList = headers();
  const host = headersList.get("host"); 
  const protocol = host?.includes("local") ? "http" : "https";
  const host_url = `${protocol}://${host}`;

export const metadata = {
  title: "United Airline Customer Service Number 215-268-8872",
  description: "Looking for United airline customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, United airline get human.",
  charset: "utf-8",
  keywords: "United airline customer service, United airline phone number, United airline customer phone number, United airline customer service phone number, United airline customer service phone, call United airline, United airline support number, United airline customer number, United airline customer service number, United airline 800 number, United airline customer support number, United airline 800, United airline toll free, United airline customer service toll free, United airline customer service 800, United airline customer service 800 number, United airline customer service 800 phone, United airline contact number, United airline contact phone, United airline contact, United airline customer service contact, United airline customer service contact number, United airline customer service email, United airline customer service email address, United airline customer service chat, United airline customer service live chat, contact United airline, contact United airline customer service, United airline.com phone number, United airline.com customer service, Egencia LLC phone number, Egencia LLC customer service, United airline phone number, United airline customer service, United airline get human,",
  robots: "index, follow",
  alternates: {
    canonical: `${host_url}/united`,
  },
  viewport: "width=device-width, initial-scale=1",
};
const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "United Airlines",
  "url": "https://www.united.com",
  "logo": `${host_url}/assets/airline/unite.webp`,
  "image": `${host_url}/assets/airline/unite.webp`,
  "description": "United Airlines, Inc., headquartered in Chicago, Illinois, is a leading U.S. airline operating through eight major hubs and serving hundreds of destinations worldwide.",
  "telephone": "+18776481111",
  "foundingDate": "1931-03-28",
  "foundingLocation": "Chicago, Illinois, United States",
  "numberOfEmployees": 103218,
  "memberOf": {
    "@type": "Organization",
    "name": "Star Alliance"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chicago",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+18776481111",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/united",
    "https://www.linkedin.com/company/united-airlines",
    "https://www.youtube.com/united",
    "https://www.instagram.com/united"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Scott Kirby",
    "startDate": "2020-12-01"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "1037"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "369"
    }
  ],
  "tickerSymbol": "UAL"
}

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact United Airline customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact United Airline by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with United Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to United Airline reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call United Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "United Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "United Customer Support Service"
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
