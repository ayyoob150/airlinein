// app/layout.js or app/layout.tsx

import Script from 'next/script';
import { headers } from 'next/headers';

const headersList = headers();
  const host = headersList.get("host"); 
  const protocol = host?.includes("local") ? "http" : "https";
  const host_url = `${protocol}://${host}`;

export const metadata = {
  title: "Kiwi Customer Service Number 215-268-8872",
  description: "Looking for Kiwi customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, Kiwi get human.",
  charset: "utf-8",
  keywords: "Kiwi customer service, Kiwi phone number, Kiwi customer phone number, Kiwi customer service phone number, Kiwi customer service phone, call Kiwi, Kiwi support number, Kiwi customer number, Kiwi customer service number, Kiwi 800 number, Kiwi customer support number, Kiwi 800, Kiwi toll free, Kiwi customer service toll free, Kiwi customer service 800, Kiwi customer service 800 number, Kiwi customer service 800 phone, Kiwi contact number, Kiwi contact phone, Kiwi contact, Kiwi customer service contact, Kiwi customer service contact number, Kiwi customer service email, Kiwi customer service email address, Kiwi customer service chat, Kiwi customer service live chat, contact Kiwi, contact Kiwi customer service, Kiwi.com phone number, Kiwi.com customer service, Egencia LLC phone number, Egencia LLC customer service, Kiwi phone number, Kiwi customer service, Kiwi get human,",
  robots: "index, follow",
  alternates: {
    canonical: `${host_url}/kiwi`,
  },
  viewport: "width=device-width, initial-scale=1",
};

const org ={
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kiwi.com",
  "alternateName": "SkyPicker.com",
  "url": "https://www.kiwi.com/",
  "logo": `${host_url}/assets/airline/kiwi.webp`,
  "image": `${host_url}/assets/airline/kiwi.webp`,
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
      "name": "Is AirlineIn affiliated with Kiwi?",
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



{/* <script data-ad-client="ca-pub-5211547430456695" async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></cript>
<link rel="canonical" href="https://gethuman.com/phone-number/Expedia" />
<link rel="shortcut icon" href="https://gethuman.com/dist/img/logo-32-cropped.png" />
<link rel="icon" href="https://gethuman.com/dist/img/logo-32-cropped.png" />
<link rel="apple-touch-icon" href="https://gethuman.com/dist/img/logo-60.png" />
<link rel="apple-touch-icon" sizes="76x76" href="https://gethuman.com/dist/img/logo-76.png" />
<link rel="apple-touch-icon" sizes="120x120" href="https://gethuman.com/dist/img/logo-120.png" />
<link rel="apple-touch-icon" sizes="152x152" href="https://gethuman.com/dist/img/logo-152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="https://gethuman.com/dist/img/logo-180.png" />
<link rel="amphtml" href="/a/phone-number/Expedia" /><meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" /><meta property="og:title" content="Expedia Customer Service Phone Number 800-397-3342: Call Support" />
<meta property="og:description" content="Expedia's best customer service contact information, when to call, what to say, and free AI tools that can call and talk to customer support for you." />
<meta property="og:url" content="https://gethuman.com/phone-number/Expedia" />
<meta property="og:site_name" content="gethuman.com" />
<meta property="og:image" content="https://gethuman.com/dist/img/logo-v-500.png" />
<meta property="og:image:width" content="500" /><meta property="og:image:height" content="500" />
<meta property="og:image:alt" content="Expedia's best customer service contact information, when to call, what to say, and free AI tools that can call and talk to customer support for you." />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@gethumancom" />
<meta property="og:updated_time" content="2025-07-24T15:48:35+00:00" />
<meta property="article:tag" content="Expedia customer service, Expedia phone number, Expedia customer phone number, Expedia customer service phone number, Expedia customer service phone, call Expedia, Expedia support number, Expedia customer number, Expedia customer service number, Expedia 800 number, Expedia customer support number, Expedia 800, Expedia toll free, Expedia customer service toll free, Expedia customer service 800, Expedia customer service 800 number, Expedia customer service 800 phone, Expedia contact number, Expedia contact phone, Expedia contact, Expedia customer service contact, Expedia customer service contact number, Expedia customer service email, Expedia customer service email address, Expedia customer service chat, Expedia customer service live chat, contact Expedia, contact Expedia customer service, Expedia.com phone number, Expedia.com customer service, Egencia LLC phone number, Egencia LLC customer service, Expedia phone number, Expedia customer service" /><meta property="article:section" content="Travel - General" />
<meta property="article:published_time" content="2009-02-23T11:44:31+00:00" />
<meta property="article:modified_time" content="2025-07-24T15:48:35+00:00" />
<script type="application/ld+json">{
                            "@context": "http://schema.org",
                            "@type": "Article",
                            "mainEntityOfPage": "https://gethuman.com/phone-number/Expedia",
                            "publisher": {
                                
            "@type": "Organization",
            "name": "GetHuman",
            "url": "https://gethuman.com",
            "email": "hello@gethuman.com",
            "telephone": "+1 617-651-0250",
            "image": "https://gethuman.com/dist/img/logo-gethuman-left.png",
            "logo": {
                "@type": "ImageObject",
                "url": "https://gethuman.com/dist/img/logo-gethuman-left.png"
            },
            "description": "Contact companies faster and fix customer services issues easier.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chestnut Hill",
                "addressRegion": "MA",
                "postalCode": "02467",
                "streetAddress": "675 VFW Parkway, Unit 328",
                "addressCountry": "US"
            }
        
                            },
                            "headline": "Expedia Customer Service Phone Number 800-397-3342: Call Support",
                            "datePublished": "2009-02-23T11:44:31+00:00",
                            "dateModified": "2025-07-24T15:48:35+00:00",
                            "author": {
                "@type": "Person",
                "name": "Christian Allen",
                "email": "hello+christian@gethuman.com",
                "image": "img/christian-headshot-96.png",
                "url": "https://www.linkedin.com/in/christiantallen/"
            },
                            "description": "Expedia's best customer service contact information, when to call, what to say, and free AI tools that can call and talk to customer support for you.",
                            "image": "https://gethuman.com/dist/img/logo-v-500.png"
                        }</cript> */}