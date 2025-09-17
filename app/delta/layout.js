// app/layout.js or app/layout.tsx


import Script from 'next/script';
import { headers } from 'next/headers';

const headersList = headers();
  const host = headersList.get("host"); 
  const protocol = host?.includes("local") ? "http" : "https";
  const host_url = `${protocol}://${host}`;


export const metadata = {
  title: "Delta Customer Service Number 215-268-8872",
  description: "Looking for Delta customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Delta get human.",
  charset: "utf-8",
  keywords: "Delta customer service, Delta phone number, Delta customer phone number, Delta customer service phone number, Delta customer service phone, call Delta, Delta support number, Delta customer number, Delta customer service number, Delta 800 number, Delta customer support number, Delta 800, Delta toll free, Delta customer service toll free, Delta customer service 800, Delta customer service 800 number, Delta customer service 800 phone, Delta contact number, Delta contact phone, Delta contact, Delta customer service contact, Delta customer service contact number, Delta customer service email, Delta customer service email address, Delta customer service chat, Delta customer service live chat, contact Delta, contact Delta customer service, Delta.com phone number, Delta.com customer service, Egencia LLC phone number, Egencia LLC customer service, Delta phone number, Delta customer service, Delta get human,",
  robots: "index, follow",
  alternates: {
    canonical:`${host_url}/delta`,
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Delta Air Lines",
  "url": "https://www.delta.com",
  "logo": `${host_url}/assets/airline/delta-logo1.webp`,
  "image":  `${host_url}/assets/airline/delta-logo1.webp`,
  "description": "Delta Air Lines, Inc., headquartered in Atlanta, Georgia, is a major U.S. airline operating through nine hubs. Its largest hub, in terms of passenger traffic and flight departures, is Hartsfield–Jackson Atlanta International Airport.",
  "telephone": "+18001236645",
  "foundingDate": "1928-12-03",
  "foundingLocation": "United States",
  "numberOfEmployees": 103000,
  "memberOf": [
    { "@type": "Organization", "name": "SkyTeam" },
    { "@type": "Organization", "name": "SkyTeam Cargo" }
  ],
  "areaServed": { "@type": "Country", "name": "United States" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Atlanta",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+18001236645",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/delta",
    "https://www.linkedin.com/company/delta-air-lines",
    "https://www.youtube.com/delta",
    "https://www.instagram.com/delta"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Ed Bastian",
    "startDate": "2016-05-02"
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Dan Janki",
      "jobTitle": "CFO"
    },
    {
      "@type": "Person",
      "name": "Rahul Samant",
      "jobTitle": "CIO"
    },
    {
      "@type": "Person",
      "name": "Glen W. Hauenstein",
      "jobTitle": "President"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "987"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "311"
    }
  ],
  "tickerSymbol": "DAL"
}


const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Delta customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Delta by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Delta Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Delta reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Delta Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Delta Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Delta Customer Support Service"
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
