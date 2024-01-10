import Image from "next/image";
function Page(){

    return (
<div className="w-full flex justify-center bg-[#16171C] lg:min-h-screen">
<div className="max-w-[1440px] flex justify-center items-center w-full flex-col-reverse md:flex-row  text-white md:px-[75px]  mt-9 mb-[76px] md:my-14 ">
<div className="px-[30px] md:px-0 md:pr-20  lg:py-8 md:w-1/2">
<h4 className="font-ral leading-[112%]  text-2xl lg:text-4xl   font-semibold">
Stand out with a skill
<br />

<span className="text-pink-500">
    Certificate
</span>
</h4>
<p className=" text-[15px]  lg:text-2xl  font-light text-[#DFDFDF] leading-[121%] mt-4">
Earn globally recognized certification and improve your knowledge.</p>
<div className="mt-16 md:mt-12 w-full flex justify-center md:justify-start">
<a href="">
            <button
              type="button"
              className="text-xs text-white m-2 md:text-xl transition duration-300 ease-in-out transform hover:scale-105 lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-6  flex items-center "
            >
              Watch Demo
            </button>
          </a>
          </div>
</div>
<div className="mb-9 md:mb-0 px-9  md:p-0 xl:pr-11 md:w-1/2">
<Image src="/cert.png" alt="Loading" width={600} height={600} />

</div>
</div>
</div>

    )
}

export default Page;