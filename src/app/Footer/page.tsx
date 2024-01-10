
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { faTwitter, faFacebookF , faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Page() {
  return (
    <div className="w-full max-w-[1440px] px-3 py-5  lg:px-7 lg:py-11  ">
      <div className="w-full px-2 md:w-auto flex justify-between mb-[50px]">
        <a href="/" className="flex items-center">
          <Image src="/logo.jpg" alt="Loading" width={400} height={400} />
        </a>
        </div>
        <div className="ml-80 grid  grid-cols-2  gap-y-6 md:gap-y-0 my-[50px]  md:mb-0 md:px-5 lg:px-10">
          <div
            className="whitespace-nowrap text-white space-y-[7px]  md:xl:space-y-[25px]" >
            <h1 className="text-[20px] md:text-[25px] font-bold">NeatSkill</h1>
            <p className="text-[15px] md:text-[20px] font-medium">About Us</p>
            <p className="text-[15px] md:text-[20px] font-medium">Contact Us</p>
            <p className="text-[15px] md:text-[20px] font-medium">Blog</p>
          </div>
          <div
            className="whitespace-nowrap text-white space-y-[7px]  md:xl:space-y-[25px]" >
            <h1 className="text-[20px] md:text-[25px] font-bold">NeatSkill</h1>
            <p className="text-[15px] md:text-[20px] font-medium">About Us</p>
            <p className="text-[15px] md:text-[20px] font-medium">Contact Us</p>
            <p className="text-[15px] md:text-[20px] font-medium">Blog</p>
          </div>
          
           
                
        </div>
        <div className="hidden md:flex flex-col justify-end text">
            <div className="text-white text-inter text-sm lg:text-xl mb-4 absolute right-40 m-4 ml-8 ">
              <div className="text-[20px] font-bold ml-4">

                Follow Us
              </div>
                <br />
                <div className="flex justify-between w-[200px] p-4" >
                <FontAwesomeIcon icon={faTwitter} className="text-[20px] " />
                <FontAwesomeIcon icon={faFacebookF} className="text-[20px] " />
                <FontAwesomeIcon icon={faInstagram} className="text-[20px] " />
                <FontAwesomeIcon icon={faLinkedinIn} className="text-[20px] " />
                </div>

            </div>
            </div>
            <div className="w-full text-white text-sm text-center p-2 m-4">
            © neatskills.online managed by Provoke Developers Private Limited
            </div>

        
        <div className="px-5 text-white text-sm 32 p-2 text-center  ">
        Address : Provoke Developers Private Limited, C/O Raviraj Kumar, Jai Prakash Nagar, Bhurkunda, Ramgarh, Jharkhand

        </div>
        
    </div>
  );
}

export default Page;
