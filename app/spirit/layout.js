// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Spirit Airline Customer Service Number 215-268-8872",
  description: "Looking for Spirit airline customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Spirit airline get human.",
  charset: "utf-8",
  keywords: "Spirit airline customer service, Spirit airline phone number, Spirit airline customer phone number, Spirit airline customer service phone number, Spirit airline customer service phone, call Spirit airline, Spirit airline support number, Spirit airline customer number, Spirit airline customer service number, Spirit airline 800 number, Spirit airline customer support number, Spirit airline 800, Spirit airline toll free, Spirit airline customer service toll free, Spirit airline customer service 800, Spirit airline customer service 800 number, Spirit airline customer service 800 phone, Spirit airline contact number, Spirit airline contact phone, Spirit airline contact, Spirit airline customer service contact, Spirit airline customer service contact number, Spirit airline customer service email, Spirit airline customer service email address, Spirit airline customer service chat, Spirit airline customer service live chat, contact Spirit airline, contact Spirit airline customer service, Spirit airline.com phone number, Spirit airline.com customer service, Egencia LLC phone number, Egencia LLC customer service, Spirit airline phone number, Spirit airline customer service, Spirit airline get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Airline",
  "name": "Spirit Airlines",
  "url": "https://www.spirit.com",
  "logo": "https://www.spirit.com/etc/designs/sva/logo.svg",
  "image": "https://a.espncdn.com/i/2025/04/08/spirit_plane.jpg",
  "description": "Spirit Airlines, Inc. is an American ultra‑low‑cost carrier headquartered in Dania Beach, Florida, operating scheduled flights across the United States, the Caribbean, and Latin America.",
  "telephone": "+18884445277",
  "foundingDate": "1983-01-01",
  "foundingLocation": "Macomb County, Michigan, United States",
  "numberOfEmployees": 11331,
  "memberOf": {
    "@type": "Organization",
    "name": "Ultra‑low‑cost Carrier"
  },
  "areaServed": { "@type": "Country", "name": "United States" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dania Beach",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+18884445277",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/SpiritAirlines",
    "https://www.instagram.com/spiritairlines",
    "https://twitter.com/SpiritAirlines"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Dave Davis",
    "startDate": "2025-04-15"
  },
  "employee": [
    {
      "@type": "Person",
      "name": "John Bendoraitis",
      "jobTitle": "Chief Operating Officer"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "195"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "85"
    }
  ],
  "tickerSymbol": "SAVE"
}

const faq ={
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Spirit Airline customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Spirit Airline by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIN affiliated with Spirit Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that helps users contact customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Spirit Airline reservations?",
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
    "name": "Spirit Customer Support",
    "telephone": "+1-800-123-4567",
    "jobTitle": "Support Executive",
    "worksFor": {
      "@type": "Organization",
      "name": "Spirit Customer Support Service"
    }
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(deltaOrg)
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
      </head>
      <body>{children}</body>
    </html>
  );
}
