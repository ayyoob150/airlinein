// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Sun Country Customer Service Number 215-268-8872",
  description: "Looking for Sun Country customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Sun Country get human.",
  charset: "utf-8",
  keywords: "Sun Country customer service, Sun Country phone number, Sun Country customer phone number, Sun Country customer service phone number, Sun Country customer service phone, call Sun Country, Sun Country support number, Sun Country customer number, Sun Country customer service number, Sun Country 800 number, Sun Country customer support number, Sun Country 800, Sun Country toll free, Sun Country customer service toll free, Sun Country customer service 800, Sun Country customer service 800 number, Sun Country customer service 800 phone, Sun Country contact number, Sun Country contact phone, Sun Country contact, Sun Country customer service contact, Sun Country customer service contact number, Sun Country customer service email, Sun Country customer service email address, Sun Country customer service chat, Sun Country customer service live chat, contact Sun Country, contact Sun Country customer service, Sun Country.com phone number, Sun Country.com customer service, Egencia LLC phone number, Egencia LLC customer service, Sun Country phone number, Sun Country customer service, Sun Country get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sun Country Airlines",
  "url": "https://www.suncountry.com",
  "logo": "https://www.suncountry.com/dam/jcr:08fdb810-013e-4b64-9b79-fbd00c94d3f5/logo.png",
  "description": "A hybrid low-cost U.S. airline offering scheduled, charter, and cargo services, headquartered in Minneapolis, Minnesota.",
  "telephone": "+1-800-359-6786",
  "foundingDate": "1982-07-02",
  "foundingLocation": "Mendota Heights, Minnesota, United States",
  "numberOfEmployees": "about 2,500",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Minneapolis",
    "addressRegion": "MN",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-359-6786",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English"]
  },
  "tickerSymbol": "NASDAQ:SNCY",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "executive": {
    "@type": "Person",
    "name": "Jude Bricker",
    "jobTitle": "Chief Executive Officer",
    "startDate": "2017"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Passenger Aircraft",
      "value": "43 Boeing 737-800"
    },
    {
      "@type": "PropertyValue",
      "name": "Freighter Aircraft",
      "value": "14 Boeing 737-800 freighters"
    }
  ]
}



const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Sun Country customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Sun Country by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Sun Country Airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Sun Country reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Sun Country Airline Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sun Country Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Sun Country Customer Support Service"
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
