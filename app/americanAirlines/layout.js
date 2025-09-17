// app/layout.js or app/layout.tsx

import Script from "next/script";
import { headers } from "next/headers";

const headersList = headers();
const host = headersList.get("host");
const protocol = host?.includes("local") ? "http" : "https";
const host_url = `${protocol}://${host}`;
/// check
export const metadata = {
  title: "American Airline Customer Service Number 215-268-8872",
  description:
    "Looking for American Airline customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, American Airline get human.",
  charset: "utf-8",
  keywords:
    "American Airline customer service, American Airline phone number, American Airline customer phone number, American Airline customer service phone number, American Airline customer service phone, call American Airline, American Airline support number, American Airline customer number, American Airline customer service number, American Airline 800 number, American Airline customer support number, American Airline 800, American Airline toll free, American Airline customer service toll free, American Airline customer service 800, American Airline customer service 800 number, American Airline customer service 800 phone, American Airline contact number, American Airline contact phone, American Airline contact, American Airline customer service contact, American Airline customer service contact number, American Airline customer service email, American Airline customer service email address, American Airline customer service chat, American Airline customer service live chat, contact American Airline, contact American Airline customer service, American Airline.com phone number, American Airline.com customer service, Egencia LLC phone number, Egencia LLC customer service, American Airline phone number, American Airline customer service, American Airline get human,",
  robots: "index, follow",
  alternates: {
    canonical: `${host_url}/americanAirlines`,
  },
  viewport: "width=device-width, initial-scale=1",
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "American Airlines",
  url: "https://www.aa.com",
  logo: `${host_url}/assets/airline/american.png`,
  image: `${host_url}/assets/airline/american.png`,
  description:
    "American Airlines, headquartered in Fort Worth, Texas, is one of the largest airlines in the world. It operates an extensive international and domestic network with hubs in cities like Dallas/Fort Worth, Charlotte, and Chicago.",
  telephone: "+1-800-433-7300",
  foundingDate: "1930-04-15",
  foundingLocation: {
    "@type": "Country",
    name: "United States",
  },
  numberOfEmployees: 129700,
  memberOf: [
    {
      "@type": "Organization",
      name: "Oneworld",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Mexico" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Japan" },
    { "@type": "Country", name: "Brazil" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Skyview Drive",
    addressLocality: "Fort Worth",
    addressRegion: "TX",
    postalCode: "76155",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-433-7300",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
  sameAs: [
    "https://www.facebook.com/AmericanAirlines",
    "https://www.linkedin.com/company/american-airlines",
    "https://www.youtube.com/americanairlines",
    "https://www.instagram.com/americanair",
    "https://twitter.com/AmericanAir",
  ],
  chiefExecutive: {
    "@type": "Person",
    name: "Robert Isom",
    startDate: "2022-03-31",
  },
  employee: [
    {
      "@type": "Person",
      name: "Devon May",
      jobTitle: "Chief Financial Officer",
    },
    {
      "@type": "Person",
      name: "Ganesh Jayaram",
      jobTitle: "Chief Information Officer",
    },
    {
      "@type": "Person",
      name: "Robert Isom",
      jobTitle: "President & CEO",
    },
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Fleet Size",
      value: "965 (mainline and regional)",
    },
    {
      "@type": "PropertyValue",
      name: "Destinations Served",
      value: "365",
    },
  ],
  tickerSymbol: "NASDAQ:AAL",
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I contact American Airline customer service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact American Airline by calling 1-800-123-6645.",
      },
    },
    {
      "@type": "Question",
      name: "Is AirlineIn affiliated with American Airline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, AirlineIn is an independent company that assists users in reaching customer service quickly.",
      },
    },
    {
      "@type": "Question",
      name: "How do I talk to American Airline reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call American Airline Airline Reservations directly or use their website to manage your booking.",
      },
    },
  ],
};
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "American Airline Customer Support",
  telephone: "+1-800-123-4567",
  jobTitle: "Support Executive",
  worksFor: {
    "@type": "Organization",
    name: "American Airline Customer Support Service",
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
