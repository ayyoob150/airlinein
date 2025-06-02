const FlightCard = ({ destination, price, departure, imageUrl }) => (
    <div className=" bg-primary/20 shadow-lg rounded-lg overflow-hidden w-[290px] md:w-[300px]">
      <img src={imageUrl} alt={destination} className="w-full h-48 object-contain bg-white" />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{destination}</h3>
        <p className="text-gray-500">Departure: {departure}</p>
        <p className="text-2xl font-bold mt-2">{price}</p>
        <a href="#contact" className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded-full hover:bg-blue-500">Book Now</a>
      </div>
    </div>
  );
  
  const FlightsSection = () => (
    <section id="flights" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Our Flights</h2>
        <div className="flex justify-center flex-wrap gap-5">
          <FlightCard destination="New York" price="$299" departure="April 5, 2025" imageUrl="/assets/home/delta.png" />
          <FlightCard destination="Los Angeles" price="$350" departure="April 10, 2025" imageUrl="/assets/home/jetblue.png" />
          <FlightCard destination="Paris" price="$750" departure="April 15, 2025" imageUrl="/assets/home/spirit.png" />
          <FlightCard destination="Paris" price="$750" departure="April 15, 2025" imageUrl="/assets/home/unite.png" />

        </div>
      </div>
    </section>
  );
  
  export default FlightsSection;
  