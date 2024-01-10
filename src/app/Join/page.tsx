import Image from "next/image";
function Page() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-bs ">
        <div className="w-full py-4 px-4 text-white relative space-y-20 flex flex-col items-center">
                <Image className="absolute top-[-20px] right-0 w-1/2 z-1 lg:w-1/5" src="/curve1.jpg" alt="bg" height={400} width={400} />
                <Image className="absolute z-1 bottom-[-150px] scale-110 -rotate-[15deg] -translate-x-[40%] left-0 w-1/2 z-10 lg:w-1/5" src="/curve2.jpg" alt="bg" height={400} width={400} />
            
        <div  className="w-full md:px-16 grid md:grid-cols-2 max-w-[1440px] space-y-8">
            <div className="md:w-full h-full justify-center items-center flex">
                <Image className="rounded-2xl w-[500px] z-10  " src="/study.png" alt="mentor" height={250} width={200} />

            </div>

            <div className="flex flex-col justify-center space-y-6 z-10">
                <h1 className="lg:text-3xl text-2xl font-medium md:text-start text-center uppercase md:flex hidden">
                    Join Our Neat Skill Community

                </h1>
                <p className="font-normal md:text-lg text-base md:flex items-center md:text-start text-center hidden">
                Learn any skill (coding , AI/ML , art , business, stock market , marketing , video editing and much more) at just one nominal monthly subscription cequivalent to your sim card plan
                </p>
                <div className="space-y-4 md:py-10">
                    <div className="space-y-2 md:px-20">
                        <div className="flex space-x-6">
                            <Image className=" w-[16px] h-[12px] " src="/rect.png" alt="mentor" height={50} width={50} />
                            <h1 className="font-semibold text-xl">
                            Easily accessible
                            </h1>

                        </div>
                        <p className="flex flex-col ml-10 font-normal text-base">
                        Learn at the comfort of your home , with regular assessments and doubt sessions.

                        </p>
                    </div>
                    <div className="space-y-2 md:px-20">
                        <div className="flex space-x-6">
                            <Image className=" w-[16px] h-[12px] " src="/rect.png" alt="mentor" height={50} width={50} />
                            <h1 className="font-semibold text-xl">
                            Easily accessible
                            </h1>

                        </div>
                        <p className="flex flex-col ml-10 font-normal text-base">
                        Learn at the comfort of your home , with regular assessments and doubt sessions.

                        </p>
                    </div>
                    <div className="space-y-2 md:px-20">
                        <div className="flex space-x-6">
                            <Image className=" w-[16px] h-[12px] " src="/rect.png" alt="mentor" height={50} width={50} />
                            <h1 className="font-semibold text-xl">
                            Easily accessible
                            </h1>

                        </div>
                        <p className="flex flex-col ml-10 font-normal text-base">
                        Learn at the comfort of your home , with regular assessments and doubt sessions.

                        </p>
                    </div>
                </div>
                <div className="flex justify-center pt-5 pb-24">

                <a href="">
            <button
              type="button"
              className="text-xs text-white rounded m-2 md:text-xl transition duration-300 ease-in-out transform hover:scale-105 lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-6  flex items-center "
              >
              Subscribe Now
            </button>
          </a>
                </div>

            </div>

        </div>
        </div>
        </div>
    )
}

export default Page;