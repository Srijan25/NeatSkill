import Image from "next/image";
function Page() {
  return (
    <div className="flex justify-center items-center h-screen md:h-full w-full bg-[#0D0E14] text-white font-raleway ">
      <div className="bg-[#1E1E1E] w-[90%] rounded-2xl px-5 py-9 md:pt-[110px] md:pb-[129px] max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className=" text-2xl md:text-3xl flex flex-col items-center bg-[url('/pink_rect.png')] bg-bottom bg-contain bg-no-repeat">
            Meet Our
            <span className=""> Mentors</span>
            <div className="bg-[#DA2C84] transform -rotate-2 w-full origin-bottom-right h-1 mt-[-10px] ml-[10px]"></div>
          </div>
          <div className="text-sm md:text-base md:w-1/2 pt-4 px-4 md:pl-8">
            Neat Skills offers the world’s best classes from the world’s best
            practitioners. It’s like having a mentor at your fingertips - no
            matter where you are
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20">
        <div className="h-full m-8 w-[147px] md:w-[291px] relative rounded-10 overflow-hidden border-2 rounded-md border-white flex justify-center items-end">
            <Image className="relative top-0 left-0 h-full w-full object-cover" src="/srijan.jpg" alt="mentor" width={300} height={600} />
            <div className="border-[0.2px] absolute backdrop-blur border-neutral-300 z-10 flex items-center justify-center flex-col acrylic w-[82px] h-[40px] mb-4 md:w-[186px] md:h-[89px] md:mb-4">
                <h1 className="font-bold text-[9px] md:text-xl md:mb-2 ">
                    Srijan Kumar Sah
                </h1>
                <p className="text-[7px] md:text-base text-center px-2">
                        Full-Stack Web Developer
                </p>

            </div>

        </div>
        <div className="h-full m-8 w-[147px] md:w-[291px] relative rounded-10 overflow-hidden border-2 rounded-md border-white flex justify-center items-end">
            <Image className="relative top-0 left-0 h-full w-full object-cover" src="/srijan.jpg" alt="mentor" width={300} height={600} />
            <div className="border-[0.2px] absolute backdrop-blur border-neutral-300 z-10 flex items-center justify-center flex-col acrylic w-[82px] h-[40px] mb-4 md:w-[186px] md:h-[89px] md:mb-4">
                <h1 className="font-bold text-[9px] md:text-xl md:mb-2 ">
                    Srijan Kumar Sah
                </h1>
                <p className="text-[7px] md:text-base text-center px-2">
                        Full-Stack Web Developer
                </p>

            </div>

        </div>
        <div className="h-full m-8 w-[147px] md:w-[291px] relative rounded-10 overflow-hidden border-2 rounded-md border-white flex justify-center items-end">
            <Image className="relative top-0 left-0 h-full w-full object-cover" src="/srijan.jpg" alt="mentor" width={300} height={600} />
            <div className="border-[0.2px] absolute backdrop-blur border-neutral-300 z-10 flex items-center justify-center flex-col acrylic w-[82px] h-[40px] mb-4 md:w-[186px] md:h-[89px] md:mb-4">
                <h1 className="font-bold text-[9px] md:text-xl md:mb-2 ">
                    Srijan Kumar Sah
                </h1>
                <p className="text-[7px] md:text-base text-center px-2">
                        Full-Stack Web Developer
                </p>

            </div>

        </div>

        </div>
        
      </div>
    </div>
  );
}

export default Page;
