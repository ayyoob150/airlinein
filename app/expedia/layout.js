// app/layout.js or app/layout.tsx

export const metadata = {
  title: "Expedia Customer Service Number 215-268-8872",
  description: "Looking for Expedia customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, we can contact them for you.",
  charset: "utf-8",
  keywords: "Expedia customer service, Expedia phone number, Expedia customer phone number, Expedia customer service phone number, Expedia customer service phone, call Expedia, Expedia support number, Expedia customer number, Expedia customer service number, Expedia 800 number, Expedia customer support number, Expedia 800, Expedia toll free, Expedia customer service toll free, Expedia customer service 800, Expedia customer service 800 number, Expedia customer service 800 phone, Expedia contact number, Expedia contact phone, Expedia contact, Expedia customer service contact, Expedia customer service contact number, Expedia customer service email, Expedia customer service email address, Expedia customer service chat, Expedia customer service live chat, contact Expedia, contact Expedia customer service, Expedia.com phone number, Expedia.com customer service, Egencia LLC phone number, Egencia LLC customer service, Expedia phone number, Expedia customer service",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com", // replace with your actual domain
  },
  openGraph: {
    title: "United Airline Customer Service",
    description: "Reach United Airlines customer support for booking and flight assistance.",
    url: "https://yourdomain.com",
    siteName: "United Airline",
    images: [
      {
        url: "/og-image.jpg", // optional: replace with your image path
        width: 1200,
        height: 630,
        alt: "United Airline Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "United Airline Customer Service",
    description: "Fast and reliable support for flight bookings and cancellations.",
    images: ["/twitter-card.jpg"], // optional
  },
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
