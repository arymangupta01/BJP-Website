import React, { useState, useEffect } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import Appointment from "./Appointment";
import Nav from "./Nav";
import Draggable from "react-draggable";

const HomePage = () => {
  const homeData = [
    {
      image: "https://www.bjp.org/files/banner_images_desktop/1920-X-1080.jpg",
    },
    {
      image:
        "https://www.bjp.org/files/banner_images_desktop/Missed-call-Eng-%281920-X-1080%29_1.jpg",
    },
    {
      image:
        "https://www.bjp.org/files/banner_images_desktop/Budget-2024-%281920X-1080%29_10.jpg",
    },
    {
      image:
        "https://www.bjp.org/files/banner_images_desktop/banner-main-atalji-e_1_0.jpg",
    },
    {
      image:
        "https://www.bjp.org/files/banner_images_desktop/Budget-2024-%281920X-1080%29_10.jpg",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrev = () => {
    return setCurrIndex((prevIndex) =>
      prevIndex === 0 ? homeData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    return setCurrIndex((prevIndex) =>
      prevIndex === homeData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrIndex(index);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, 
      behavior: "smooth",
    });
  };

  const [showAppointment, setShowAppointment] = useState(false);

  const handleAppointment = () => {
    setShowAppointment(!showAppointment);
  };

  const {image} = homeData[currIndex];

  return (
    <div id="sec1" className="w-full h-screen relative overflow-hidden ">
      {showNav && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Nav />
        </div>
      )}

      <div className="flex justify-center items-center">
        {homeData.map((item, index) => {
          return (
            <img
              className="flex justify-center items-center object-contain"
              key={index}
              src={image}
              alt=""
            />
          );
        })}
      </div>

      <div className="bg-black/20 absolute top-[50%] left-5 rounded-full text-white cursor-pointer text-2xl -translate-x-0 translate-y-[-50%]">
        <RiArrowLeftWideFill onClick={handlePrev} size={30} />
      </div>

      <div className="bg-black/20 absolute top-[50%] right-5 rounded-full text-white cursor-pointer text-2xl -translate-x-0 translate-y-[-50%] ">
        <RiArrowRightWideFill onClick={handleNext} size={30} />
      </div>

      <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-2">
        {homeData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              currIndex === index ? "bg-[#F5821F]" : "bg-[#F6BC5E]"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>


      <div className="absolute bottom-96 px-4 right-0 flex flex-col justify-center gap-5 ">
        <a
          href="https://www.facebook.com/BJP4India"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF
            className="text-blue-500 hover:text-blue-800 transition-colors duration-200"
            size={25}
          />
        </a>
        <a
          href="https://x.com/BJP4India"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
            size={25}
          />
        </a>
        <a
          href="https://www.instagram.com/bjp4india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-pink-400 hover:text-pink-800 transition-colors duration-200"
            size={25}
          />
        </a>
        <a
          href="https://www.youtube.com/BJP4India"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube
            className="text-red-400 hover:text-red-700 transition-colors duration-200"
            size={25}
          />
        </a>
      </div>

      <div
        onClick={handleScrollDown}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center cursor-pointer"
      >
        <div className="w-[35px]  h-[65px] border-[3px] border-gray-500 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      <Draggable>
        <div
          className="fixed z-50 bottom-10 right-10 bg-[#F5821F] w-[50px] h-[50px] text-white p-3 rounded-full cursor-pointer shadow-lg"
          onClick={handleAppointment}
        >
          <SlCalender size={25} />
        </div>
      </Draggable>

      <Link to="/users">
        <Draggable>
          <div className="fixed z-50 bottom-[105px] right-10 bg-[#F5821F] w-[50px] h-[50px] text-white p-3 rounded-full cursor-pointer shadow-lg ">
            <FaUserCircle size={25} />
          </div>
        </Draggable>
      </Link>

      {showAppointment && <Appointment onClose={handleAppointment} />}
    </div>
  );
};

export default HomePage;
