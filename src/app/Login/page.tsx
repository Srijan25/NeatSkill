'use client'
import Image from "next/image";
import Link from "next/link";
import {auth, provider} from '../firebase-config'
import { getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";



function Page() {
  function signIn() {
    console.log("signin");
    signInWithPopup(auth, provider)
    
      .then((result) => {
        console.log(result);
        window.location.href = "/DashBoard";
      })
      .catch((error) => {
        console.log(error);
      });

      
  }

  function signOut() {
    auth.signOut();
    console.log("signout");
  }
  return (
    <div className="">
      <div className="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;">
        <div className="max-w-full md:h-screen grid justify-center md:grid-cols-2 text-center text-white md:overflow-hidden">
          <div className="m-auto w-full">
            <div className="flex justify-center md:pt-0 pt-[10px]">
              <div className="m-auto h-full">
                <div>
                  <Image
                    src="/logo.jpg"
                    alt="Loading"
                    width={200}
                    height={200}
                    className="md:w-[280px] sd:w-[180px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-5 py-3">
              <div className="m-auto w-full relative">
                <div className="absolute inset-0 rounded-[100%] filter blur-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 w-[50%] m-auto"></div>
                  <Image
                    src="/loo.png"
                    alt="Loading"
                    width={200}
                    height={200}
                    className="md:p-10 md:w-[45%] m-auto relative z-10"
                    />
                
              
            </div>
          </div>
              <p className="hidden md:block text-normal text-sm pb-[20px]">
                Start learning right away!
              </p>
          </div>
          <div className="m-auto md:mt-auto md:w-[35vw]">
            <div className="rounded-[25px] p-4 w-full bg-[#15161B] md:bg-[#ffffff05] px-5 space-y-2">
              <h1 className="md:mt-[30px] md:text-2xl">Welcome Back</h1>
              <p className="text-white text-xs pb-5">
                Don t have an account?{" "}
                <a href="" className="text-pink-500">
                  Start for free
                </a>
              </p>
              {/* <Link href="/DashBoard"> */}
              <button className="flex w-[80%] md:w-[60%] h-[50px] m-auto transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg py-2 md:text-sm text-xs text-white items-center justify-center gap-2 xl:p-[2px] lg:p-1.5px border-[1px] border-white rounded-lg" onClick={signIn}>
                <Image
                  className="md:w-[30px] sd:w-[20px]"
                  src="/google.png"
                  alt="Loading"
                  width={40}
                  height={40}
                  />
                <p>Continue with Google</p>
              </button>
              
                  {/* </Link> */}

              <div className="flex w-[80%] m-auto items-center gap-1 text-white">
                <div className="w-[48%] h-0 lg:border-[.5px] md:border-[.3px] sd:border-[.07px] border-[#696969]"></div>
                <h5 className="xl:text-[15px] lg:text-[12px] md:text-[10px] sd:text-[8px]">
                  or
                </h5>
                <div className="w-[48%] h-0 lg:border-[.5px] md:border-[.3px] sd:border-[.07px] border-[#696969]"></div>
              </div>
              <div className="md:pb-5 md:px-10 ">
                <form action="#">
                  <p className="flex flex-start text-sm ml-2 mt-5">Email</p>
                  <div className="flex rounded-[15px] bg-[#ffffff05] items-center">
                    <svg
                      stroke="currentColor"
                      style={{
                        color: "green",
                        width: "30px",
                        marginLeft: "2vh",
                        marginRight: "2vh",
                      }}
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="2.5vh"
                      width="2.5vh"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                    </svg>
                    <input
                      type="text"
                      className="input md:p-3 p-[10px] pr-10 cursor-pointer border-white border-2 focus:border-transparent focus:outline-none rounded-lg bg-transparent w-[100%] text-sm"
                      placeholder="Enter Your Mail"
                    />
                  </div>
                  <p className="flex flex-start text-sm ml-2 mt-6">Password</p>
                  <div className="flex rounded-[15px] mb-6 bg-[#ffffff05] items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      style={{
                        color: "blue",
                        width: "30px",
                        marginLeft: "2vh",
                        marginRight: "2vh",
                      }}
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="2.5vh"
                      width="2.5vh"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                    </svg>
                    <input
                      type="text"
                      className="input border-2 border-white md:p-3 p-[10px] pr-10 cursor-pointer focus:border-transparent focus:outline-none rounded-lg bg-transparent w-[100%] text-sm"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#E1348B] ml-8 transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg md:w-[70%] w-[30%] p-2 rounded-[10px]"
                  >
                    Login
                  </button>
                  <p className="cursor-pointer text-xs font-light pt-2 pb-2 ml-8">
                    Forget Password?
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
