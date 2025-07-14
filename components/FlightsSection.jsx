const FlightCard = ({ title, imageUrl, description, subDescription, padding }) => (
  <div className=" shadow-lg rounded-lg overflow-hidden w-[300px]">
    <img src={imageUrl} alt={title} className={`${padding} h-48 object-contain bg-white w-[300px]`} />
    <div className="p-4 bg-gradient-to-bl from-violet-800 to-fuchsia-900">
      <div className="text-start h-[216px]">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-slate-100 w-full font-semibold">{description}</p>
        <p className="mt-1 text-sm text-slate-200">{subDescription}</p>
      </div>
      <a href="/" className="inline-block mt-4 bg-gradient-to-tl from-violet-500 to-fuchsia-700 shadow w-full text-white py-2 px-4 rounded-full font-bold">View</a>
    </div>
  </div>
);

const FlightsSection = () => (
  <section id="flights" className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-12">Flights</h2>
      <div className="flex justify-center flex-wrap gap-5">
        <FlightCard title="Fly with Delta – Comfort Meets Reliability" description='Experience award-winning service, extensive global reach, and modern onboard amenities.' subDescription='From premium cabins to free in-flight entertainment, Delta ensures a seamless journey across continents.' imageUrl="/assets/home/delta.png" />
        <FlightCard title="JetBlue – Fly Better, Feel Better" description='Known for extra legroom, free Wi-Fi, and award-winning service on every flight.' subDescription='JetBlue brings comfort and innovation together for a refreshing travel experience.' imageUrl="/assets/home/jetblue.png" padding={'p-17'} />
        <FlightCard title=" Save More with Spirit Airlines" description='Enjoy ultra-low fares to destinations across the U.S. Latin America, and the Caribbean.' subDescription='Ideal for budget-conscious travelers, Spirit offers customizable travel options to suit your needs.' imageUrl="/assets/home/spirit.png" padding={'p-17'} />
        <FlightCard title="United – Connecting the World" description='Fly to over 300 destinations with one of the largest airline networks globally.' subDescription='From Economy to Polaris Business Class, United offers travel solutions for every journey.' imageUrl="/assets/home/unite.png" />
      </div>
    </div>
  </section>
);

export default FlightsSection;
