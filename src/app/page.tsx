import Image from "next/image";
import Link from "next/link";
import Login from "./Login/page";
import Loading from "./loading";
import { Suspense } from "react";
import Home from "./Home/page";
import Course from "./Course/page";
import Pro from "./Pro/page";
import Mentor from "./Mentor/page";
import Join from "./Join/page";
import Activity from "./Activity/page";
import Certificate from "./Certificate/page";
import Push from "./Push/page";
import Footer from "./Footer/page";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
async function Page() {
  return (
    <div className="">
      <div className=" w-full px-4 md:px-8 lg:px-16 py-4 bg-black fixed  transition-all duration-300 h-[49px] md:h-[105px] flex justify-center items-center">
        <div className="w-full max-w-[1440px] flex justify-between items-center font-ral ">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Loading" width={200} height={200} />
          </Link>
          <div className="hidden md:flex justify-center  w-full items-center text-white text-xs  lg:text-base mx-10 lg:mx-12">
            <ul className="max-w-[407px] w-full flex justify-between">
              <a className="text-md uppercase hover:border-b  " href="">
                Course
              </a>
              <a className="text-md uppercase hover:border-b  " href="">
                About
              </a>
              <a className="text-md uppercase hover:border-b  " href="">
                Contact-Us
              </a>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <a href="/Login">
              <button
                type="button"
                className="bg-pink-500 transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg text-white font-Inter uppercase font-semibold   rounded-2xl border-white border-2  text-xs w-[77px] h-7 md:text-sm md:w-24 md:h-11 lg:text-xl lg:w-32 lg:h-14"
              >
                Sign Up
              </button>
            </a>
            <a href="/Login">
              <button
                type="button"
                className="bg-white transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg text-black font-Inter uppercase font-semibold   rounded-2xl border-white border-2  text-xs w-[77px] h-7 md:text-sm md:w-24 md:h-11 lg:text-xl lg:w-32 lg:h-14 ml-3"
              >
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
      <Home />
      <Course />
      <Pro />
      <Mentor />
      <Join />
      <Activity />
      <Certificate />
      <Push />
      <Footer />
    </div>
  );
}
export default Page;
