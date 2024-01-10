import Image from "next/image";
export default function Loading() {
    return <>
    <Image
    src="/loading.gif"
    alt="Loading"
    className="loading mx-auto my-auto w-1/2 h-1/2 object-contain object-center rounded"
    width={200}
    height={200}

    />
    </>
   
  }