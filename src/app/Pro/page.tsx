import Image from "next/image";
function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full py-[42px] md:py-28 md:p-7 mt-10 sm:px-2 bg-bs min-h-screen">
      <div className="w-full flex flex-col max-w-[1440px]">
        <div className="hidden sm:block font-ral text-[26px] sm:text-4xl lg:text-[55px] font-medium text-white px-9 text-center md:self-start lg:leading-[3.5rem]">
          Why learning with &nbsp;
          <span className="text-pink-500">Neat Skill</span>
          <br />
          give you a one up
          <br />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-5 lg:mt-10">
            <div className="mx-[84px] sm:mx-24 md:ml-10 md:mr-10 lg:mr-16 ">
                <Image src="/pro.jpg"   height={500} width={600} alt="pro" />

            </div>
            <div className=" flex flex-col justify-center w-full lg:min-w-[460px] lg:max-w-[460px] mt-[58px] lg:mt-auto ">
                <p className="text-white bg-gradient-to-r from-pink-500 to-red-500 p-4 md:p-6  rounded-r-3xl md:rounded-3xl w-7/12 md:w-3/4 md:mr-20 text-xs sm:text-sm md:text-base lg:text-xl">
                Go beyond Pre-Recorded Courses with Neat Skills and clear your doubts.
                </p>
                <p className="text-white bg-gradient-to-r from-pink-500 to-red-500 p-4 md:p-6 mt-5 lg:mt-[78px]  rounded-l-3xl md:rounded-3xl w-8/12  md:w-3/4 md:ml-20   text-xs sm:text-sm md:text-base lg:text-xl self-end">
                Our Online classes allows teacher and student to set their own pace of learning and there is added flexibility in setting a schedule that fits everyone.
        </p>    
        <p className="text-white  bg-gradient-to-r from-pink-500 to-red-500 p-4 md:p-6 mt-5 lg:mt-[78px] rounded-r-3xl md:rounded-3xl w-9/12  md:w-3/4 md:mr-20   text-xs sm:text-sm md:text-base lg:text-xl">
        Interactive problem-solving is more effective than watching lectures. Reinforce your learning with interactive quizzes.
        </p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Page;
