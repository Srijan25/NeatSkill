import Image from "next/image";
import Link from "next/link";
function Page() {
  return (
    <div className="">
      <div className="sidebar m-4">
        <Link href="/">
          <div className="sidebar__logo">
            <Image src="/logo.jpg" alt="Loading" width={200} height={200} />
          </div>
        </Link>
        <div className="sidebar__menu text-white m-8">
          <ul>
            <li className="active ">
              <a href="" className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] bg-white p-2"></div>
                <span>Home</span>
              </a>
            </li>
            <div className="w-40 bg-white border-[1px] border-white mt-8 mb-8"></div>
            <li className="active mt-4 ">
              <a href="" className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] bg-white p-2"></div>
                <span>Course</span>
              </a>
            </li>
            <li className="active mt-4 ">
              <a href="" className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] bg-white p-2"></div>
                <span>Schedule</span>
              </a>
            </li>
            <li className="active mt-4 ">
              <a href="" className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] bg-white p-2"></div>
                <span>Study Material</span>
              </a>
            </li>
            <li className="active mt-4 ">
              <a href="" className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] bg-white p-2"></div>
                <span>Home Work</span>
              </a>
            </li>
            <div className="w-40 bg-white border-[1px] border-white mt-8 mb-8"></div>
            <li className="active mt-4 ">
              <a href="" className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] bg-white p-2"></div>
                <span>Chat</span>
              </a>
            </li>
            <li className="active mt-4 ">
              <a href="" className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] bg-white p-2"></div>
                <span>Profile</span>
              </a>
            </li>
          </ul>
          <div className="bg-[#15161B] h-[200px] w-[200px]  rounded-2xl m-4 absolute  left-0 mb-10 ml-10">
            <div className=" m-8  h-full">
              <h1 className="text-white text-xl font-bold">
                Discord <br /> Community
              </h1>

              <p className="text-white text-xs mt-2">150 members</p>
              <a href="">
                <button
                  type="button"
                  className=" text-white bg-pink-500 mt-4 pt-2 pb-2 pl-4 pr-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105   "
                >
                  Join &nbsp; &rarr;
                </button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Page;
