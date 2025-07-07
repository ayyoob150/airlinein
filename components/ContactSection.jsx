const ContactSection = () => (
    <section id="contact" className="py-16 bg-pink-50 p-8 ">
      <div className="shadow-md rounded-lg  p-6  md:pb-26 bg-white mx-3 md:mx-8">
      <h1 className="mt-4 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500">Get in Touch, Talk to our Team</h1>
       <div className=" flex gap-8 justify-around flex-wrap mt-12">
         <div className="p-5 shadow-md rounded-lg  z-10 bg-white border border-slate-100 w-[181px] ">
          <div className='text-2xl text-center font-semibold text-slate-700'>3.8<span className="text-orange-600">+</span> million</div>
          <div className="text-sm text-center mt-1 text-slate-500">people trust</div>
        </div>
        <div className="p-5 shadow-md rounded-lg z-10 bg-white border border-slate-100 w-[181px]">
          <div className='text-2xl text-center font-semibold text-slate-700'>120<span className="text-orange-600">+</span> million</div>
          <div className="text-sm text-center mt-1 text-slate-500">problem solved</div>
        </div>
        <div className="p-5 shadow-md rounded-lg z-10 bg-white border border-slate-100 w-[181px]">
          <div className='text-2xl text-center font-semibold text-slate-700'>8<span className="text-orange-600">+</span> year</div>
          <div className="text-sm text-center mt-1 text-slate-500">in service</div>
        </div>
        <div className="p-5 shadow-md rounded-lg z-10 bg-white border border-slate-100 w-[181px]">
          <div className='text-2xl text-center font-semibold text-slate-700'>190,300<span className="text-orange-600">+</span></div>
          <div className="text-sm text-center mt-1 text-slate-500">got review 5+ star</div>
        </div>
      <div className="absolute w-[91%] rounded h-20 bg-gradient-to-bl from-pink-500 to-fuchsia-500 mt-20 hidden md:block "></div>

       </div>

      </div>
    </section>
  );
  
  export default ContactSection;
  