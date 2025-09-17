// app/layout.js or app/layout.tsx

import Script from 'next/script';
import { headers } from 'next/headers';

const headersList = headers();
  const host = headersList.get("host"); 
  const protocol = host?.includes("local") ? "http" : "https";
  const host_url = `${protocol}://${host}`;


export const metadata = {
  title: "Southwest Customer Service Number 215-268-8872",
  description: "Looking for Southwest customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Southwest get human.",
  charset: "utf-8",
  keywords: "Southwest customer service, Southwest phone number, Southwest customer phone number, Southwest customer service phone number, Southwest customer service phone, call Southwest, Southwest support number, Southwest customer number, Southwest customer service number, Southwest 800 number, Southwest customer support number, Southwest 800, Southwest toll free, Southwest customer service toll free, Southwest customer service 800, Southwest customer service 800 number, Southwest customer service 800 phone, Southwest contact number, Southwest contact phone, Southwest contact, Southwest customer service contact, Southwest customer service contact number, Southwest customer service email, Southwest customer service email address, Southwest customer service chat, Southwest customer service live chat, contact Southwest, contact Southwest customer service, Southwest.com phone number, Southwest.com customer service, Egencia LLC phone number, Egencia LLC customer service, Southwest phone number, Southwest customer service, Southwest get human,",
  robots: "index, follow",
  alternates: {
    canonical: `${host_url}/southwestAirlines`,
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Southwest Airlines Co.",
  "url": "https://www.southwest.com",
  "logo": `${host_url}/assets/airline/1280px-Southwest_Airlines_logo_2014.webp`,
  "image":`${host_url}/assets/airline/1280px-Southwest_Airlines_logo_2014.webp`,
  "description": "Southwest Airlines Co., headquartered in Dallas, Texas, is a major U.S. low-cost airline recognized for its extensive point-to-point route network, flexible open seating policy, and customer-centric culture.",
  "telephone": "+1-214-792-4000",
  "foundingDate": "1967-03-15",
  "foundingLocation": {
    "@type": "Place",
    "name": "Dallas, Texas, United States"
  },
  "numberOfEmployees": "Approximately 74,000 (2024)",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2702 Love Field Dr.",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75235",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-435-9792",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.facebook.com/SouthwestAir",
    "https://www.linkedin.com/company/southwest-airlines",
    "https://www.youtube.com/southwestair",
    "https://www.instagram.com/southwestair",
    "https://twitter.com/SouthwestAir"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Herb Kelleher"
    },
    {
      "@type": "Person",
      "name": "Rollin King"
    }
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Robert (Bob) Jordan",
    "startDate": "2022-02-01"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "Approximately 820 Boeing 737 aircraft (2025)"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "121 destinations including the US, Puerto Rico, Mexico, Central America, and the Caribbean"
    }
  ],
  "tickerSymbol": "NASDAQ:LUV"
}



const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Southwest customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Southwest by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Southwest Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Southwest reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Southwest Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Southwest Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Southwest Customer Support Service"
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
