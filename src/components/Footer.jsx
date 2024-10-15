import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="sec7">
      <div className="relative mt-[90px] bg-[#F5821F]">
        <div className="w-full overflow-hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-[#ffffff]"
            ></path>
          </svg>
        </div>

        <div className="w-full h-full flex">
          <div className="w-[25%] h-full mx-[50px] ">
            <img
              className="w-[250px] h-[230px] mx-10"
              src="https://testpublic.ashutoshtech.com/images/sj.png"
              alt="Party Logo"
            />
            <h1 className="text-white font-bold text-2xl mx-[55px] mt-4">
              ABOUT THE PARTY
            </h1>
            <div className="text-white text-lg mx-[53px] mt-1 ">
              <h2>Our Philosophy</h2>
              <h2>History of the party</h2>
              <h2>Integral Humanism</h2>
            </div>
          </div>

          <div className="w-[25%] h-full py-[80px] px-10">
            <h1 className="text-white font-bold text-2xl mx-[55px] mt-4">
              MORCHA
            </h1>
            <div className="text-white text-lg mx-[53px] mt-1 ">
              <h2>Mahila Morcha</h2>
              <h2>Kissan Morcha</h2>
              <h2>Yuva Morcha</h2>
              <h2>Kissan Morcha</h2>
              <h2>Yuva Morcha</h2>
            </div>
            <h1 className="text-white font-bold text-2xl mx-[55px] mt-4">
              LEGAL
            </h1>
            <div className="text-white text-lg mx-[53px] mt-1 ">
              <h2>Privacy Notice</h2>
              <h2>Terms Of Use</h2>
            </div>
          </div>

          <div className="w-[25%] h-full py-[75px]">
            <h1 className="text-white font-bold text-2xl mx-[55px] mt-4">
              MEDIA RESOURCES
            </h1>
            <div className="text-white text-lg mx-[53px] mt-1 ">
              <h2>Press Release</h2>
              <h2>Speeches</h2>
              <h2>Photo Gallery</h2>
              <h2>Video Gallery</h2>
              <h2>Interviews and Articles</h2>
            </div>
          </div>


          <div className="w-[25%] h-full mr-10">
            <div className="mt-[85px]">
              <h1 className="text-white font-bold text-2xl mx-[55px] mt-4">
                CONNECT WITH ME
              </h1>
              <div className="text-white text-md mx-[53px] mt-1 ">
                <h2>Have a support question?</h2>
              </div>
              <button className="rounded-3xl w-[180px] h-[40px] mx-[55px] mt-3 bg-[#f51f1f] text-xs text-white font-medium p-2">
                GET IN TOUCH
              </button>
            </div>

            <div className="mt-[70px] px-[55px]">
              <h1 className="text-white font-bold text-xl">OUR CONTACT INFO</h1>
              <div className="flex">
                <div>
                  <IoMdMail
                    size={18}
                    color="#ffffff"
                    className="my-1 mx-2 mb-1.5"
                  />
                  <FaPhoneAlt
                    size={18}
                    color="#ffffff"
                    className="my-1 mx-2 mb-2"
                  />
                  <FaAddressCard size={18} color="#ffffff" className="my-1 mx-2" />
                </div>
                <div className="text-white text-md">
                  <h1>bjp.offcial@gmail.org.in</h1>
                  <h1>+91 9999999999</h1>
                  <h1>
                    305/306, Amarnath Tower, Off Yari Road, Vesawa, Mumbai,
                    Maharashtra 400061
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-red-600 py-4 mt-10 flex justify-center items-center space-x-6">
          <div className="bg-orange-600 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <FaLinkedin className="text-white text-2xl" />
          </div>
          <div className="bg-orange-600 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <FaTwitter className="text-white text-2xl" />
          </div>
          <div className="bg-orange-600 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <FaYoutube className="text-white text-2xl" />
          </div>
          <div className="bg-orange-600 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <FaGithub className="text-white text-2xl" />
          </div>
        </div>
        <div className="bg-red-600">
          <div className="text-white text-center text-sm">
            © 2024 | All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
