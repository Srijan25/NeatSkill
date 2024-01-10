import Image from "next/image";
function Page(){
return (
    <div className="bg-bs  flex flex-col justify-center items-center bg-[#0D0E14;] lg:px-[62px] md:px-12 md:min-h-screen py-12 md:py-36 lg:py-56">
<div className="flex  justify-center items-center w-full max-w-[1280px]  bg-[#DA2C84;] text-white rounded-3xl  py-2 px-5 md:py-4 md:px-16 ">
<div className="h-full w-7/12 space-y-3 sm:space-y-4  md:space-y-5 lg:space-y-7 pr-4 md:pr-16 ">
<h1 className="text-sm sm:text-xl md:text-3xl lg:text-[40px] lg:leading-[132%]">
The great aim of education is not knowledge, but action.
</h1>
<a href="">
            <button
              type="button"
              className="text-xs text-white bg-black m-2 md:text-xl transition duration-300 ease-in-out transform hover:scale-105 lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-8  flex items-center "
            >
              Sign-up &rarr; 
            </button>
          </a>
</div>
<div className="w-5/12">

          <Image src="/limit.png" alt="Loading" width={1500} height={1500} />
</div>

</div>
    </div>
)}
export default Page;
