// app/layout.js or app/layout.tsx

export const metadata = {
  title: "British Airways Customer Service Number 215-268-8872",
  description: "Looking for British Airways customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, British Airways get human.",
  charset: "utf-8",
  keywords: "British Airways customer service, British Airways phone number, British Airways customer phone number, British Airways customer service phone number, British Airways customer service phone, call British Airways, British Airways support number, British Airways customer number, British Airways customer service number, British Airways 800 number, British Airways customer support number, British Airways 800, British Airways toll free, British Airways customer service toll free, British Airways customer service 800, British Airways customer service 800 number, British Airways customer service 800 phone, British Airways contact number, British Airways contact phone, British Airways contact, British Airways customer service contact, British Airways customer service contact number, British Airways customer service email, British Airways customer service email address, British Airways customer service chat, British Airways customer service live chat, contact British Airways, contact British Airways customer service, British Airways.com phone number, British Airways.com customer service, Egencia LLC phone number, Egencia LLC customer service, British Airways phone number, British Airways customer service, British Airways get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "British Airways",
  "url": "https://www.britishairways.com",
  "logo": "https://www.britishairways.com/etc/designs/britishairways/clientlibs_base/img/logos/ba_logo.png",
  "image": "https://www.britishairways.com/assets/images/fleet/airbus-a350-1000/airbus-a350-1000-hero.jpg",
  "description": "British Airways is the flag carrier airline of the United Kingdom. Headquartered in London, England, it operates flights to over 180 destinations worldwide from its main hub at Heathrow Airport.",
  "telephone": "+44 344 493 0787",
  "foundingDate": "1974-03-31",
  "foundingLocation": "United Kingdom",
  "numberOfEmployees": 27500,
  "memberOf": [
    { "@type": "Organization", "name": "International Airlines Group (IAG)" },
    { "@type": "Organization", "name": "Oneworld Alliance" }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Waterside, Harmondsworth",
    "addressLocality": "London",
    "postalCode": "UB7 0GA",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44 344 493 0787",
    "contactType": "Customer Service",
    "areaServed": ["GB", "Global"],
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/britishairways",
    "https://www.instagram.com/british_airways",
    "https://twitter.com/British_Airways",
    "https://www.linkedin.com/company/british-airways",
    "https://www.youtube.com/user/britishairways"
  ],
  "chiefExecutive": {
    "@type": "Person",
    "name": "Sean Doyle",
    "startDate": "2020-10-12"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Fleet Size",
      "value": "270"
    },
    {
      "@type": "PropertyValue",
      "name": "Destinations Served",
      "value": "182"
    }
  ],
  "tickerSymbol": "IAG:LSE"
}



const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact British Airways customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact British Airways by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with British Airways?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to British Airways reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call British Airways Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "British Airways Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "British Airways Customer Support Service"
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
