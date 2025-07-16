// app/layout.js or app/layout.tsx

export const metadata = {
  title: "United Airline Customer Service Number 215-268-8872",
  description: "Looking for United airline customer service? Get the most up-to-date phone numbers, ideal call hours, and step-by-step guidance to resolve your issue—plus, United airline get human.",
  charset: "utf-8",
  keywords: "United airline customer service, United airline phone number, United airline customer phone number, United airline customer service phone number, United airline customer service phone, call United airline, United airline support number, United airline customer number, United airline customer service number, United airline 800 number, United airline customer support number, United airline 800, United airline toll free, United airline customer service toll free, United airline customer service 800, United airline customer service 800 number, United airline customer service 800 phone, United airline contact number, United airline contact phone, United airline contact, United airline customer service contact, United airline customer service contact number, United airline customer service email, United airline customer service email address, United airline customer service chat, United airline customer service live chat, contact United airline, contact United airline customer service, United airline.com phone number, United airline.com customer service, Egencia LLC phone number, Egencia LLC customer service, United airline phone number, United airline customer service, United airline get human,",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
