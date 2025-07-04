import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FlightsSection from "@/components/FlightsSection";
import CallQRCode from "@/components/qrcode/CallQrCode";
import Image from "next/image";

const Home = () => (
  <div className="bg-[#F0F2F3]">
    {/* <SEO/> */}
    <div className="flex flex-wrap justify-between gap-5 pt-16">
      <div className="mx-auto w-[300px] md:w-[600px] md:mt-12">
        <h3 className="font-bold text-3xl font-sans text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500 shadow-drop">
          Effortless Flight Services – Accurate Assistance with Every Call
        </h3>
        <p className="mt-3 text-sm md:text-lg text-slate-600">
          Our website offers personalized support with every service call,
          ensuring a smooth, hassle-free experience. By minimizing errors and
          simplifying tasks, we make sure your flight services are faster and
          more efficient. All you need to do is reach out, and we'll provide you
          with the best solutions for your travel needs.
        </p>
        <div className="text-end">
          <div className="mt-8 font-bold text-lg font-sans text-slate-700">
            Customer Service
          </div>
          <div className="mt-3">
            <a
              href="tel:+12152688872"
              className=" font-semibold text-4xl  text-primary/90"
            >
              +1 (215) 268-8872
            </a>
          </div>
          <div className="flex justify-end">
            <a
              href="tel:+12152688872"
              className="px-6 py-3 text-slate-100 bg-primary rounded-md mt-4 w-28 font-bold flex justify-center items-center"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 w-[300px] md:w-[500px] mx-auto">
        <img
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline11.png"
          alt="Delta customer serice"
        />
        <img
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline7.png"
          alt="Delta customer serice"
        />
        <img
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline15.png"
          alt="Delta customer serice"
        />
        <img
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover shadow-md rounded-2xl"
          src="/assets/home/airline8.png"
          alt="Delta customer serice"
        />
      </div>
      <div className="mt-16 mx-4 bg-white rounded-2xl shadow flex justify-between gap-5 flex-wrap">
        <div className="w-[60%]">
          <h2 className="pl-4 pt-8 text-3xl font-semibold font-sans  text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-500 to-violet-500  ">
            How we works! 👩‍💻
          </h2>
          <p className="  p-4 font-medium font-sans text-slate-600">
            At our platform, we've designed a system that makes your journey
            seamless. With every service call, our dedicated team provides
            immediate and accurate assistance, reducing errors and saving you
            time. We understand how important it is for flight services to be
            timely and precise, so we've streamlined our process to ensure you
            don’t have to repeat yourself or deal with unnecessary delays. Our
            experts will present you with the best options, making your
            experience smooth and stress-free. You can rely on us to always
            deliver the right solution when you need it the most
          </p>
        </div>
        <img
          className="w-[100px] h-[100px] md:w-[350px] md:h-[300px] object-cover  rounded-e-2xl"
          src="/assets/home/airline13.png"
          alt="Delta customer serice"
        />
      </div>
      <div className=" flex gap-16 mt-16 w-[70%] mx-auto">
        <div className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 w-fit h-88 p-2 rounded-xl shadow-md border border-slate-100">
          <div className=" rounded-lg w-fit p-6 bg-white ">
            <CallQRCode phoneNumber="+12152688872" />
          </div>
          <div className="text-[#00478f80] font-bold text-3xl mt-5.5 text-center">
            Call us
          </div>
        </div>
        <div>
          <div className="mt-10 text-5xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500 ">For quick call !</div>
          <div className="mt-2 text-4xl font-semibold font-sans text-primary/90 ">Scan Now !</div>
          <div className="mt-3 text-lg font-semibold font-sans text-slate-700 ">We provide best customer executive to assist you on call, To make you life stresless and enjouful. We always happy to help you.</div>

        </div>
      </div>
    </div>
    <FlightsSection />
    <AboutSection />
    <ContactSection />
  </div>
);

export default Home;
