import { CalendarDaysIcon, ClockIcon, ComputerDesktopIcon, CurrencyDollarIcon, GlobeAltIcon, PhoneIcon, ShoppingBagIcon, TicketIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline'

const ContactSection = ({name}) => (
  <section id="contact" className="pb-16 pt-5 p-8 ">
    <div className="mt-2 mb-8 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500">Get in Touch, Talk to our Team</div>


    <div className='mx-3 md:mx-8 bg-white px-6 pt-3 pb-8 my-6 rounded shadow'>

      <div className=' px-6 py-4 my-4 rounded-2xl bg-gradient-to-l from-pink-800 to-fuchsia-900'>
        <h2 className="text-[22px] font-semibold text-gray-50 mb-4">Customer Support</h2>
        <p className="text-gray-100 text-lg mb-3 ">
          We are happy to assist you with everything!
        </p>
        <p className="text-gray-300 text-base">
          Let us know how we can help you. Our team works 24x7 to guide and help you with any queries or changes in your travel plan.
          <br />
          <span className="font-medium">Here are ways how you can reach us:</span>
        </p>
      </div>


      <h1 className='mt-8 mb-4 font-medium text-transparent bg-clip-text bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-xl md:text-3xl'>{name || "AilineIn"} customer service number</h1>
      <div className='flex gap-2 mt-2 items-center'>
        <PhoneIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded   ' />
        <a
          href="tel:+12152688872"
          className="font-semibold text-lg md:text-2xl  text-blue-800 hover:underline"
        >
          +1 (215) 268-8872
        </a>
      </div>
      <div className='mt-2 text-medium text-slate-700'>Executive are waiting to hear your concern. Don't wait just dial the number. We provide all services on call.</div>
      <div className='flex justify-between flex-wrap gap-3 mt-3'>

        <div>

          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><GlobeAltIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' /> 24*7 supprt available</div>
          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><UserGroupIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' /> 1000+ customer executive</div>
          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><ClockIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' /> Flight Status</div>

        </div>
        <div>
          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><ComputerDesktopIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' />Booking</div>
          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><CalendarDaysIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' />Date Chnage</div>
          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><XCircleIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' />Cancellation</div>


        </div>
        <div>

          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><CurrencyDollarIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' />Refund</div>
          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><ShoppingBagIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' />Baggage</div>
          <div className='mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center'><TicketIcon className='w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded ' />Name Correction</div>


        </div>
      </div>

    </div>


    <div className="shadow-lg rounded-lg  p-6  md:pb-26 bg-white mx-3 md:mx-8 ">
      <div className="text-fuchsia-600 text-sm font-bold text-center my-4">EXPERTISE IN ALL FLIGHT PASSENGER SERVICES</div>
      <div className=" flex gap-8 justify-around flex-wrap mt-12">
        <div className="p-5 shadow-lg rounded-lg  z-10 bg-white border border-slate-100 w-[190px] ">
          <div className='text-2xl text-center font-semibold text-slate-700'>3.8<span className="text-orange-600">+</span> million</div>
          <div className="text-sm text-center mt-1 text-slate-500">people trust</div>
        </div>
        <div className="p-5 shadow-lg rounded-lg z-10 bg-white border border-slate-100 w-[190px]">
          <div className='text-2xl text-center font-semibold text-slate-700'>120<span className="text-orange-600">+</span> million</div>
          <div className="text-sm text-center mt-1 text-slate-500">problem solved</div>
        </div>
        <div className="p-5 shadow-lg rounded-lg z-10 bg-white border border-slate-100 w-[190px]">
          <div className='text-2xl text-center font-semibold text-slate-700'>8<span className="text-orange-600">+</span> year</div>
          <div className="text-sm text-center mt-1 text-slate-500">in service</div>
        </div>
        <div className="p-5 shadow-lg rounded-lg z-10 bg-white border border-slate-100 w-[190px]">
          <div className='text-2xl text-center font-semibold text-slate-700'>190,300<span className="text-orange-600">+</span></div>
          <div className="text-sm text-center mt-1 text-slate-500">got review 5+ star</div>
        </div>
        <div className="absolute w-[91%] rounded h-20 bg-gradient-to-bl from-pink-500 to-fuchsia-500 mt-20 hidden md:block "></div>

      </div>

    </div>
  </section>
);

export default ContactSection;
