const FlightCard = ({ title, imageUrl }) => (
    <div className=" shadow-lg rounded-lg overflow-hidden w-[290px] md:w-[300px]">
      <img src={imageUrl} alt={title} className="w-full h-48 object-contain bg-white" />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <a href="#contact" className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded-full hover:bg-blue-500">See</a>
      </div>
    </div>
  );
  
  const FlightsSection = () => (
    <section id="flights" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Flights</h2>
        <div className="flex justify-center flex-wrap gap-5">
          <FlightCard title="Delta Airline" imageUrl="/assets/home/delta.png" />
          <FlightCard title="JetBlue Airline" imageUrl="/assets/home/jetblue.png" />
          <FlightCard title="Spirit Airline" imageUrl="/assets/home/spirit.png" />
          <FlightCard title="United Airline" imageUrl="/assets/home/unite.png" />
        </div>
      </div>
    </section>
  );
  
  export default FlightsSection;
  