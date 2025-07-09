import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FlightsSection from "@/components/FlightsSection";
import CallQRCode from "@/components/qrcode/CallQrCode";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Home = () => (
  <div className="bg-[#F0F2F3]">
    {/* <SEO/> */}
    <div className="flex flex-wrap justify-between gap-5 pt-12">
      <div className="mx-auto w-[90%] md:w-[600px] md:mt-2">
        <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500 shadow-drop">
          Effortless Flight Services – Accurate Assistance with Every Call
        </h3>
        <p className="relative mt-3 font-extralight text-lg md:text-2xl text-slate-800 z-[10]">
          Our website offers personalized support with every service call,
          ensuring a smooth, hassle-free experience. By minimizing errors and
          simplifying tasks, we make sure your flight services are faster and
          more efficient. All you need to do is reach out, and we'll provide you
          with the best solutions for your travel needs.
        </p>
        <div className="absolute w-[200px] md:w-[600px] h-[300px] flex items-center justify-center mt-[-250px]">
          <div className="w-[200px] md:w-[600px] h-[200px] rounded-full bg-fuchsia-50 opacity-30 blur-3xl absolute" />
          <div className="w-[200px] md:w-[400px] h-[150px] rounded-full bg-fuchsia-50 opacity-60 blur-2xl absolute" />
          <div className="w-[200px] md:w-[300px] h-[200px] rounded-full bg-fuchsia-100 opacity-80 blur-xl absolute" />
        </div>
        <div className="">
          <div className="mt-8 font-bold text-lg  text-slate-700">
            Customer Service
          </div>
          <div className="mt-3 flex items-center gap-2">
            <PhoneIcon className='w-8 h-8 text-primary/90 '/> 
            <a
              href="tel:+12152688872"
              className=" font-semibold text-2xl md:text-4xl  text-primary/90"
            >
             +1 (215) 268-8872
            </a>
          </div>
          <div className="flex ">
            <a
              href="tel:+12152688872"
              className="px-3 md:px-6 py-3 text-slate-100 bg-primary rounded-md mt-4 w-24 md:w-28 font-bold flex justify-center items-center"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 w-[260px] md:w-[420px] h-[220px] md:h-[420px] mx-auto ">
        <img
          className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline11.png"
          alt="Delta customer serice"
        />
        <img
          className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline7.png"
          alt="Delta customer serice"
        />
        <img
          className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline15.png"
          alt="Delta customer serice"
        />
        <img
          className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline8.png"
          alt="Delta customer serice"
        />
      </div>
     

      <div className=" flex flex-wrap justify-center gap-4 md:gap-16 mt-16 w-[90%] md:w-[70%] mx-auto">
        <div className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 w-fit h-88 p-2 rounded-xl shadow-lg">
          <div className=" rounded-lg w-fit p-6 bg-white ">
            <CallQRCode phoneNumber="+12152688872" />
          </div>
          <div className="text-[#00478f80] font-bold text-3xl mt-5.5 text-center">
            Call us
          </div>
        </div>
        <div className="max-w-[600px]">
          <div className="mt-10 text-5xl font-semibold  text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500 ">For quick call !</div>
          <div className="mt-2 text-4xl font-semibold  text-primary/90 ">Scan Now !</div>
          <div className="mt-3 text-3xl font-extralight  text-slate-800 ">We provide best customer executive to assist you on call, To make you life stresless and enjouful. We always happy to help you.</div>

        </div>
      </div>


 <div className="mt-16 mx-4 md:mx-10  flex lg:justify-between gap-5 flex-wrap justify-center bg-gradient-to-br from-fuchsia-50 to-violet-50">
        <div className="lg:w-[60%]">
          <h2 className="px-6 pt-8 text-3xl font-semibold   text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-500 to-violet-500  ">
            How we works! Seamless Travel Support, Designed Around You
          </h2>
          <h3 className="px-6 pt-2 font-semibold text-slate-800">Effortless Journeys from Start to Finish</h3>
          <p className="px-6  text-slate-800 text-sm lg:text-base font-light">
            At our platform, we've built more than just a service — we've created an experience designed to make your journey effortless. From the moment you reach out to us, every step is carefully crafted to prioritize speed, clarity, and convenience. Our intelligent system ensures that all your requests are handled with precision, allowing you to focus on what matters most — your travel. Whether it's booking a flight, managing a change, or resolving a query, we’re committed to making the process simple and seamless.
          </p>
          <h3 className="px-6 pt-2 font-semibold text-slate-800">Expert Support, When It Matters Most</h3>

          <p className="px-6  text-slate-800 text-sm lg:text-base font-light">Our team of trained experts is always ready to support you. With every service interaction, you can expect accurate guidance and real-time updates tailored to your specific needs. We’ve eliminated the frustration of long waits and repeated information by integrating smart data handling and personalized service flows. This not only reduces the chance of errors but also significantly cuts down on response time, giving you faster solutions without compromising on quality.</p>
        <h3 className="px-6 pt-2 font-semibold text-slate-800">Reliable Solutions, Right on Time</h3>
        <p className="px-6  text-slate-800 text-sm lg:text-base font-light">We know that in air travel, timing and clarity are everything. That’s why we’ve streamlined our backend systems and optimized our customer service workflows to align perfectly with your schedule. No matter the complexity of your request, you’ll always be presented with the most relevant and reliable options. When you choose our platform, you’re choosing peace of mind — knowing that whenever you need us, we’re here with the right solution, right when you need it.</p></div>
        <img
          className="w-full h-[300px] lg:w-[350px] lg:h-full  px-6 lg:px-0"
          src="/assets/home/airline13.png"
          alt="Delta customer serice"
        />
      </div>
    </div>
    <FlightsSection />
    <AboutSection />
    <ContactSection />
  </div>
);

export default Home;
