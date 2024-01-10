import Image from "next/image"
function Page() {
    return (
        <div className="flex flex-col py-11 lg:py-[125px] w-full bg-bs justify-center items-center">
            <div className="max-w-[1440px] space-y-4 ">
                <div className="flex w-full pl-[22px] sm:pl-16 lg:pl-[84px]">
<p className="text-[15px] sm:text-xl md:text-2xl lg:text-[32px] self-start text-white text-center">
A number of available learning 
<br />
activities that will
<br />
<span className="text-pink-500">
shock you
</span>
</p>
                </div>
                <div className="w-full px-5 sm:px-14 md:px-28 lg:px-48">
<Image className="w-[1300px]  mix-blend object-contain"  src="/act.png" alt="page" width={1000} height={500} />
                </div>

            </div>
        </div>
    )
}

export default Page