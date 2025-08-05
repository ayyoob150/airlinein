import Image from 'next/image';


export default function Page() {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto space-y-10">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">✈️ Airline Support Concierge – Fast Help When Airlines Don’t Answer</h1>
        <p className="text-lg">We are NOT the airline. But when the airline won’t pick up, we will.</p>
        <p>We help you get faster answers, resolve booking issues, cancellations, refunds, or flight changes — even when airline support is hard to reach.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded">✅ Flight Change Help</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded">✅ Cancellations & Refund Guidance</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded">✅ Connecting You with the Right Department</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded">✅ Real Human Assistance</span>
        </div>
        <p className="text-sm italic text-gray-600">We are an independent third-party support service, not affiliated with any airline.</p>
      </div>

      {/* What We Can Help With */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">💡 What We Can Help With</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Missed or delayed flights</li>
          <li>Rebooking or rerouting</li>
          <li>Refund and cancellation guidance</li>
          <li>Lost baggage support</li>
          <li>Navigating airline policies</li>
        </ul>
      </div>

      {/* What We Are Not - Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">⚠️ What We Are Not</h2>
        <table className="w-full text-left border rounded overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Not Affiliated</th>
              <th className="p-3">No Ticket Sales</th>
              <th className="p-3">No Payment Processing</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">We are not affiliated with any airline</td>
              <td className="p-3">We do not sell tickets</td>
              <td className="p-3">We do not take airline payments</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: '🔄 Flight Changes',
            content: 'We help you reschedule or change flights when airlines won’t answer.'
          },
          {
            title: '🛑 Cancellations & Refunds',
            content: 'Step-by-step refund support and rights explanation.'
          },
          {
            title: '📍 Missed or Delayed Flights',
            content: 'We offer quick solutions when flights go wrong.'
          },
          {
            title: '🧳 Lost Baggage Support',
            content: 'We help track and report lost or mishandled baggage.'
          },
          {
            title: '🧭 Airline Policy Guidance',
            content: 'Understand fine print and know your rights.'
          },
          {
            title: '🔁 Rerouting Help',
            content: 'We help find alternatives when travel is disrupted.'
          }
        ].map(({ title, content }, idx) => (
          <Card key={idx}>
            <CardContent className="p-5 space-y-2">
              <h3 className="font-semibold text-xl">{title}</h3>
              <p>{content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">👥 Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🧑‍💼 Real Human Assistance – personalized help with real specialists</li>
          <li>⏱️ Fast Response Times – skip long hold queues</li>
          <li>🧠 Expertise in Airline Systems – we know how to work through support channels</li>
          <li>📞 Flexible Support – phone, chat, or WhatsApp</li>
          <li>🔒 Transparent & Ethical – no hidden fees, scams, or impersonation</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">📞 Ready to Get Help?</h2>
        <p>Call us now or start a live chat to get the help you need — fast.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button>📞 Call Us</Button>
          <Button variant="outline">💬 WhatsApp</Button>
          <Button variant="secondary">🧑‍💻 Live Chat</Button>
        </div>
      </div>

      {/* Common Scenarios */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">✈️ Common Scenarios We Help With:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>“I was on hold with the airline for 3 hours — no one picked up.”</li>
          <li>“My flight was canceled, and I can’t rebook.”</li>
          <li>“The airline’s website keeps crashing.”</li>
          <li>“My bags are lost, and no one’s responding.”</li>
          <li>“I need a refund, but the airline keeps denying it.”</li>
        </ul>
      </div>

      {/* Legitimacy Section */}
      <div className="bg-gray-100 p-6 rounded-xl space-y-3">
        <h2 className="text-xl font-semibold">🛡️ A Note on Legitimacy</h2>
        <p>We understand there are scams and impersonators out there. That’s why we’re crystal clear about who we are:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>We are not impersonating airlines</li>
          <li>We never ask for your credit card for airline payments</li>
          <li>We operate under ethical third-party service standards</li>
        </ul>
        <p>Your trust matters to us — and so does your journey.</p>
      </div>

      {/* Footer */}
      <footer className="text-center pt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} [YourBrandName]. All rights reserved.
      </footer>
    </div>
  );
}


export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 shadow-md bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}



export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}



export function Button({ children, className = '', variant = 'default', ...props }) {
  const baseStyle = 'rounded-lg px-5 py-2 font-medium transition-colors';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
