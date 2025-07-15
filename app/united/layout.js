// app/layout.js or app/layout.tsx

export const metadata = {
  title: "United Airline Customer Service Number",
  description: "United Airlines provides seamless customer support. Contact us for help with bookings, cancellations, and inquiries.",
  charset: "utf-8",
  keywords: [
    "United Airline", 
    "flight booking", 
    "flight customer service", 
    "airline customer service", 
    "United Airlines phone number"
  ],
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
