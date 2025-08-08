// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Gotogate Customer Service Number 215-268-8872",
  description: "Looking for Gotogate customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Gotogate get human.",
  charset: "utf-8",
  keywords: "Gotogate customer service, Gotogate phone number, Gotogate customer phone number, Gotogate customer service phone number, Gotogate customer service phone, call Gotogate, Gotogate support number, Gotogate customer number, Gotogate customer service number, Gotogate 800 number, Gotogate customer support number, Gotogate 800, Gotogate toll free, Gotogate customer service toll free, Gotogate customer service 800, Gotogate customer service 800 number, Gotogate customer service 800 phone, Gotogate contact number, Gotogate contact phone, Gotogate contact, Gotogate customer service contact, Gotogate customer service contact number, Gotogate customer service email, Gotogate customer service email address, Gotogate customer service chat, Gotogate customer service live chat, contact Gotogate, contact Gotogate customer service, Gotogate.com phone number, Gotogate.com customer service, Egencia LLC phone number, Egencia LLC customer service, Gotogate phone number, Gotogate customer service, Gotogate get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gotogate",
  "url": "https://www.gotogate.com",
  "logo": "https://www.etraveligroup.com/assets/logos/gotogate-logo.svg",
  "description": "Gotogate is a global online travel agency specializing in flight, hotel and cab bookings, operating in over 75 markets and serving ~30 million travellers annually as part of Sweden‑based Etraveli Group.",
  "foundingDate": "1997",
  "foundingLocation": "Uppsala, Sweden",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Etraveli Group AB",
    "url": "https://www.etraveligroup.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Uppsala",
    "addressCountry": "SE"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+1‑786‑405‑8511",
      "availableLanguage": ["English","Spanish"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "Corporate Headquarters",
      "telephone": "+46‑(0)770‑457751",
      "areaServed": "Global",
      "availableLanguage": ["English", "Spanish"]
    }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Etraveli Group AB"
  },
  "sameAs": [
    "https://twitter.com/gotogate",
    "https://www.facebook.com/gotogate"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Markets served",
      "value": "75+"
    },
    {
      "@type": "PropertyValue",
      "name": "Annual customers",
      "value": "30 million"
    }
  ]
}
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Gotogate customer service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Gotogate by calling 1-800-123-6645."
      }
    },
    {
      "@type": "Question",
      "name": "Is AirlineIn affiliated with Gotogate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, AirlineIn is an independent company that assists users in reaching customer service quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I talk to Gotogate reservations?",
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
  "name": "Gotogate Customer Support",
  "telephone": "+1-800-123-4567",
  "jobTitle": "Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Gotogate Customer Support Service"
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
