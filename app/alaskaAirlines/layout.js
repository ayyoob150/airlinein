// app/layout.js or app/layout.tsx

import Script from "next/script";
import { headers } from 'next/headers';

const headersList = headers();
  const host = headersList.get("host"); 
  const protocol = host?.includes("local") ? "http" : "https";
  const host_url = `${protocol}://${host}`;


export const metadata = {
  title: "Alaska Customer Service Number 215-268-8872",
  description: "Looking for Alaska Airlines customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Alaska Airlines get human.",
  charset: "utf-8",
  keywords: "Alaska customer service, Alaska phone number, Alaska customer phone number, Alaska customer service phone number, Alaska customer service phone, call Alaska, Alaska support number, Alaska customer number, Alaska customer service number, Alaska 800 number, Alaska customer support number, Alaska 800, Alaska toll free, Alaska customer service toll free, Alaska customer service 800, Alaska customer service 800 number, Alaska customer service 800 phone, Alaska contact number, Alaska contact phone, Alaska contact, Alaska customer service contact, Alaska customer service contact number, Alaska customer service email, Alaska customer service email address, Alaska customer service chat, Alaska customer service live chat, contact Alaska, contact Alaska customer service, Alaska.com phone number, Alaska.com customer service, Egencia LLC phone number, Egencia LLC customer service, Alaska phone number, Alaska customer service, Alaska get human,",
  robots: "index, follow",
  alternates: {
    canonical: `${host_url}/alaskaAirlines`,
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alaska Airlines",
  url: "https://www.alaskaair.com",
  logo:`${host_url}/assets/airline/download.png`,
  image:
   `${host_url}/assets/airline/download.png`,
  description:
    "Alaska Airlines is a major American airline headquartered in SeaTac, Washington, operating flights throughout the United States, as well as to Mexico, Canada, Costa Rica, and Belize.",
  telephone: "+18002527575",
  foundingDate: "1932-04-14",
  foundingLocation: "Anchorage, Alaska, United States",
  numberOfEmployees: 23000,
  memberOf: [
    {
      "@type": "Organization",
      name: "Oneworld",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "SeaTac",
    addressRegion: "WA",
    postalCode: "98188",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+18002527575",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
  sameAs: [
    "https://www.facebook.com/alaskaairlines",
    "https://www.linkedin.com/company/alaska-airlines",
    "https://twitter.com/alaskaair",
    "https://www.instagram.com/alaskaair",
    "https://www.youtube.com/alaskaairlines",
  ],
  chiefExecutive: {
    "@type": "Person",
    name: "Ben Minicucci",
    startDate: "2021-03-31",
  },
  employee: [
    {
      "@type": "Person",
      name: "Shane Tackett",
      jobTitle: "CFO",
    },
    {
      "@type": "Person",
      name: "Charu Jain",
      jobTitle: "Senior Vice President, Merchandising and Innovation",
    },
    {
      "@type": "Person",
      name: "Constance von Muehlen",
      jobTitle: "COO",
    },
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Fleet Size",
      value: "314",
    },
    {
      "@type": "PropertyValue",
      name: "Destinations Served",
      value: "120",
    },
  ],
  tickerSymbol: "ALK",
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I contact Alaska customer service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Alaska by calling 1-800-123-6645.",
      },
    },
    {
      "@type": "Question",
      name: "Is AirlineIn affiliated with Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, AirlineIn is an independent company that assists users in reaching customer service quickly.",
      },
    },
    {
      "@type": "Question",
      name: "How do I talk to Alaska reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call Alaska Airline Reservations directly or use their website to manage your booking.",
      },
    },
  ],
};
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alaska Customer Support",
  telephone: "+1-800-123-4567",
  jobTitle: "Support Executive",
  worksFor: {
    "@type": "Organization",
    name: "Alaska Airlines Customer Support Service",
  },
};
export default function RootLayout({ children }) {
  return (
    <section>
     <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(org),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      {children}
    </section>
  );
}
