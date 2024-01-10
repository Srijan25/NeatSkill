import Image from "next/image"

async function Page() {
   return (
    <div>
    <div className="pt-[49px] md:py-[105px] min-h-screen flex flex-col justify-center items-center bg-bs z-10 ">
     <div className="w-full h-full grid grid-rows-2 max-w-[1440px] lg:grid-rows-none lg:grid-cols-2">
        <div className=" justify-center flex items-center row-span-1 lg:row-auto lg:col-span-1">
          <div className="mx-7 lg:ml-[92px] pt-3 mt-[24px] md:mt-0">
            <div className="text-white font-ral lg:text-left lg:text-[86px] md:text-[76px] sm:text-[50px] text-[32px] text-center font-semibold tracking-thight2 mx-2 md:mx-0">Lets Learn</div>
            {/* <br /> */}
            <div className="text-white font-ral lg:text-left lg:text-[86px] md:text-[76px] sm:text-[50px] text-[32px] text-center font-semibold tracking-thight2 mx-2 md:mx-0">beyond</div>
            {/* <br /> */}
            <div className="text-white font-ral lg:text-left lg:text-[86px] md:text-[76px] sm:text-[50px] text-[32px] text-center font-semibold tracking-thight2 mx-2 md:mx-0">the limits</div>
            {/* <br /> */}
            <div className="text-white text-center lg:mx-0 md:text-xl mt-7 lg:text-left px-2">
                <p>Educational Programs that will help you start , grow and upskill. Book a demo class today !!</p>
            </div>
            <br />
            <div className="w-full flex  justify-center lg:justify-start">
            <div className="hidden md:flex items-center m-2">
          <a href="">
            <button
              type="button"
              className="  text-xs text-white m-2 md:text-xl transition duration-300 ease-in-out transform hover:scale-105 lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-6 hover:bg-[#e1348b] flex items-center"
            >
            Start Learning
            </button>
          </a>
          <a href="">
            <button
              type="button"
              className="text-xs text-black bg-pink-500 m-2 md:text-xl transition duration-300 ease-in-out transform hover:scale-105 lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-6 hover:bg-[#e1348b] flex items-center "
            >
              Watch Demo
            </button>
          </a>
        </div>
            </div>
            
          </div>
        </div>
          <div className="lg:col-span-1  lg:row-auto row-span-1 justify-center hidden lg:flex items-center lg:mr-[92px]">
            <Image src="/next.jpg" alt="Loading" width={600} height={600} />
          </div>
      </div>
    </div>
    </div>
    );
}

    

export default Page;
