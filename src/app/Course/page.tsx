import Image from "next/image";
function Page() {
  return (
    <>
      <div className="w-full py-10 md:py-16 flex items-center justify-center flex-col font-raleway min-h-screen ">
        <div className="flex flex-col max-w-[90%] md:flex-row justify-around text-white text-2xl lg:text-3xl mx-auto">
          <div className="flex flex-col items-center justify-evenly">
            <div className="flex justify-center items-center text-center font-semibold  lg:text-4xl">
              Explore our <br /> Course
            </div>
          </div>
          <div className="flex justify-center">
            <div className="pt-2 m-4 md:pt-0 w-3/4 md:w-7/12 text-sm lg:text-xl font-normal justify-between text-center flex items-center text-white">
              You dont need to have any prior knowledge to take our classes.
              You just need curiosity and the desire to learn.
            </div>
          </div>
          <a href="">
            <button
              type="button"
              className="text-xs  text-white m-2 md:text-xl transition duration-300 ease-in-out transform hover:scale-105 lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-6 hover:bg-[#e1348b] flex items-center "
            >
              Explore Course
            </button>
          </a>
        </div>

        <div className="flex  flex-wrap md:w-[90%] w-[90%] items-center mx-auto lg:mt-20 mt-12 max-w-[1440px]">
          <div className="w-full lg:mt-16 mt-10 flex flex-wrap flex-col">
            <div className="flex scrollbar-hide gap-10 flex-wrap ">
              <div className="shrink-0 rounded-2xl border-2  border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  ">
                <div className="flex justify-between ">
                  <Image
                    src="/prog.png"
                    className="md:w-[80px] md:h-[80px] w-[70px] h-[70px]  object-contain"
                    alt="Loading"
                    width={200}
                    height={200}
                  />
                  <div className="text-[10px] pt-3 md:pt-0 md:text-sm text-[#E1348B] ">
                    <span className="mr-3">Lesson</span>
                    <span>Begineer</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full overflow-hidden">
                  <h1 className="text-[#ffffff8c] text-[6px] md:text-[14px] md:text-sm font-medium">
                    Course
                  </h1>
                  <h2 className="text-white  md:text-2xl font-medium">
                    {" "}
                    Christmas update
                  </h2>
                  <p className="font-raleway text-left text-white text-[10px] md:text-[0.8rem]  overflow-hidden overflow-ellipsis leading-normal tracking-wide md:line-clamp-3 line-clamp-2">
                    Update coming soon
                  </p>
                </div>
                <div className="flex justify-end pt-4 ">
                  <a href="">
                    <button
                      type="button"
                      className="text-xs text-white  m-2 md:text-xl  lg:text-2xl border-pink-500 md:border-2 h-[22px] md:h-[40px] mt-2 px-2  flex items-center "
                    >
                      Explore
                    </button>
                  </a>
                </div>
              </div>
              <div className="shrink-0 rounded-2xl border-2  border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  ">
                <div className="flex justify-between ">
                  <Image
                    src="/prog.png"
                    className="md:w-[80px] md:h-[80px] w-[70px] h-[70px]  object-contain"
                    alt="Loading"
                    width={200}
                    height={200}
                  />
                  <div className="text-[10px] pt-3 md:pt-0 md:text-sm text-[#E1348B] ">
                    <span className="mr-3">Lesson</span>
                    <span>Begineer</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full overflow-hidden">
                  <h1 className="text-[#ffffff8c] text-[6px] md:text-[14px] md:text-sm font-medium">
                    Course
                  </h1>
                  <h2 className="text-white  md:text-2xl font-medium">
                    {" "}
                    Christmas update
                  </h2>
                  <p className="font-raleway text-left text-white text-[10px] md:text-[0.8rem]  overflow-hidden overflow-ellipsis leading-normal tracking-wide md:line-clamp-3 line-clamp-2">
                    Update coming soon
                  </p>
                </div>
                <div className="flex justify-end pt-4 ">
                  <a href="">
                    <button
                      type="button"
                      className="text-xs text-white  m-2 md:text-xl  lg:text-2xl border-pink-500 md:border-2 h-[22px] md:h-[40px] mt-2 px-2  flex items-center "
                    >
                      Explore
                    </button>
                  </a>
                </div>
              </div>
              <div className="shrink-0 rounded-2xl border-2  border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  ">
                <div className="flex justify-between ">
                  <Image
                    src="/prog.png"
                    className="md:w-[80px] md:h-[80px] w-[70px] h-[70px]  object-contain"
                    alt="Loading"
                    width={200}
                    height={200}
                  />
                  <div className="text-[10px] pt-3 md:pt-0 md:text-sm text-[#E1348B] ">
                    <span className="mr-3">Lesson</span>
                    <span>Begineer</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full overflow-hidden">
                  <h1 className="text-[#ffffff8c] text-[6px] md:text-[14px] md:text-sm font-medium">
                    Course
                  </h1>
                  <h2 className="text-white  md:text-2xl font-medium">
                    {" "}
                    Christmas update
                  </h2>
                  <p className="font-raleway text-left text-white text-[10px] md:text-[0.8rem]  overflow-hidden overflow-ellipsis leading-normal tracking-wide md:line-clamp-3 line-clamp-2">
                    Update coming soon
                  </p>
                </div>
                <div className="flex justify-end pt-4 ">
                  <a href="">
                    <button
                      type="button"
                      className="text-xs text-white  m-2 md:text-xl  lg:text-2xl border-pink-500 md:border-2 h-[22px] md:h-[40px] mt-2 px-2  flex items-center "
                    >
                      Explore
                    </button>
                  </a>
                </div>
              </div>

              <div className="shrink-0 rounded-2xl border-2  border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  ">
                <div className="flex justify-between ">
                  <Image
                    src="/prog.png"
                    className="md:w-[80px] md:h-[80px] w-[70px] h-[70px]  object-contain"
                    alt="Loading"
                    width={200}
                    height={200}
                  />
                  <div className="text-[10px] pt-3 md:pt-0 md:text-sm text-[#E1348B] ">
                    <span className="mr-3">Lesson</span>
                    <span>Begineer</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full overflow-hidden">
                  <h1 className="text-[#ffffff8c] text-[6px] md:text-[14px] md:text-sm font-medium">
                    Course
                  </h1>
                  <h2 className="text-white  md:text-2xl font-medium">
                    {" "}
                    Christmas update
                  </h2>
                  <p className="font-raleway text-left text-white text-[10px] md:text-[0.8rem]  overflow-hidden overflow-ellipsis leading-normal tracking-wide md:line-clamp-3 line-clamp-2">
                    Update coming soon
                  </p>
                </div>
                <div className="flex justify-end pt-4 ">
                  <a href="">
                    <button
                      type="button"
                      className="text-xs text-white  m-2 md:text-xl  lg:text-2xl border-pink-500 md:border-2 h-[22px] md:h-[40px] mt-2 px-2  flex items-center "
                    >
                      Explore
                    </button>
                  </a>
                </div>
              </div>



            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
