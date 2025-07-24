// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Kiwi Customer Service Number 215-268-8872",
  description: "Looking for Kiwi customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Kiwi get human.",
  charset: "utf-8",
  keywords: "Kiwi customer service, Kiwi phone number, Kiwi customer phone number, Kiwi customer service phone number, Kiwi customer service phone, call Kiwi, Kiwi support number, Kiwi customer number, Kiwi customer service number, Kiwi 800 number, Kiwi customer support number, Kiwi 800, Kiwi toll free, Kiwi customer service toll free, Kiwi customer service 800, Kiwi customer service 800 number, Kiwi customer service 800 phone, Kiwi contact number, Kiwi contact phone, Kiwi contact, Kiwi customer service contact, Kiwi customer service contact number, Kiwi customer service email, Kiwi customer service email address, Kiwi customer service chat, Kiwi customer service live chat, contact Kiwi, contact Kiwi customer service, Kiwi.com phone number, Kiwi.com customer service, Egencia LLC phone number, Egencia LLC customer service, Kiwi phone number, Kiwi customer service, Kiwi get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const org ={
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kiwi.com",
  "alternateName": "SkyPicker.com",
  "url": "https://www.kiwi.com/",
  "logo": "https://assets.kiwi.com/logo.svg",
  "image": "https://www.kiwi.com/assets/hero.jpg",
  "description": "Kiwi.com is a Czech online travel agency and fare aggregator, offering virtual interlining across 750+ carriers and ground transportation.",
  "foundingDate": "2012",
  "founders": [
    {
      "@type": "Person",
      "name": "Oliver Dlouhý"
    },
    {
      "@type": "Person",
      "name": "Jozef Képesi"
    }
  ],
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brno",
      "addressCountry": "CZ"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lazaretní 925/9",
    "addressLocality": "Brno",
    "postalCode": "61500",
    "addressCountry": "CZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-206-481-7200",
    "contactType": "Customer Service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Spanish"]
  },
  "telephone": "+420123456789",
  "email": "contact@kiwi.com",
  "numberOfEmployees": 1700,
  "founder": {
    "@type": "Person",
    "name": "Oliver Dlouhý"
  },
  "owner": [
    {
      "@type": "Organization",
      "name": "General Atlantic",
      "percentageOwned": "53.5%"
    },
    {
      "@type": "Person",
      "name": "Oliver Dlouhý",
      "percentageOwned": "22.4%"
    }
  ],
  "areaServed": "Worldwide",
  "sameAs": [
    "https://www.facebook.com/kiwicom247",
    "https://www.linkedin.com/company/kiwicom",
    "https://www.twitter.com/kiwicom"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Annual Revenue (2021)",
      "value": "CZK 17.2 bn"
    },
    {
      "@type": "PropertyValue",
      "name": "Number of employees",
      "value": "1700"
    }
  ]
}

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Kiwi customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Kiwi by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIN affiliated with Kiwi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Kiwi reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Expedia Reservations directly or use their website to manage your booking."
      }
    }
  ]
}
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kiwi Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Kiwi Customer Support Service"
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
