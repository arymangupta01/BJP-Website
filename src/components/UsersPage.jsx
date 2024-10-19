import React, { useState, useRef } from "react";
import UsersPageNav from "./UsersPageNav";
import {
  MdAddAPhoto,
  MdUploadFile,
  MdLocationPin,
  MdRememberMe,
} from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaAddressCard, FaIdCardAlt, FaHeart, FaFolder } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CgAttachment } from "react-icons/cg";
import { RiFlagFill } from "react-icons/ri";
import { BsShieldFillCheck } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./FlipCard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const UsersPage = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [message, setMessage] = useState("");

  const usersData = [
    {
      image: "https://www.bjp.org/files/photo-gallery/img-20210402-wa0117.jpg",
      message:
        "BJP National President Shri J.P. Nadda addressing a public meeting in East Guwahati (Assam).",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n0fxAyKwP2hYrw_gE6hK9EYbnb2y5DLS7Q&s",
      message:
        "Bharatiya Janata Party is crucial as it came at a time when the party is undertaking several initiatives to restructure the organisation ahead of the upcoming Lok Sabha elections 2024.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFykW4c1EvjNi3WfGTCLAB9n-ColLHvcZBw&s",
      message:
        "Major shake-up in BJP’s UP leadership likely as party top brass holds meetings.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n0fxAyKwP2hYrw_gE6hK9EYbnb2y5DLS7Q&s",
      message:
        "यूपी उपचुनाव को लेकर आज दिल्ली में बीजेपी की बड़ी बैठक, शाह-योगी समेत ये नेता होंगे शामिल",
    },
  ];

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  const handlePostImage = () => {
    if (image) {
      setUploadedImage(image);
      setImage("");
      toast.success("Post Published!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const data = {
    labels: ["Favour", "Non-favour", "Neutral"],
    datasets: [
      {
        label: "Post's Trend Analysis",
        data: [40, 30, 30],
        backgroundColor: ["#4CCB4C", "#D3D3D3", "#F04040"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000",
        },
      },
      title: {
        display: true,
        text: "Post's Trend Analysis",
        color: "#000",
        font: {
          size: 18,
        },
      },
    },
  };

  const [isTrendingOpen, setTrendingOpen] = useState(false);
  const [isLatestOpen, setLatestOpen] = useState(false);
  const [isHistoryOpen, setHistoryOpen] = useState(false);

  const [isUpcomingOpen, setUpcomingOpen] = useState(false);
  const [isEventOpen, setEventOpen] = useState(false);
  const [isDevelopmentOpen, setDevelopmentOpen] = useState(false);

  const newsItems = [
    {
      text: "Yogi's next step to uplift the Bhagwa Sants to provide more security.",
      trend: "up",
    },
    {
      text: "On camera: Girl rescued after falling into water-filled pit in Uttar Pradesh.",
      trend: "up",
    },
    { text: "Tiger attach to be continue in Lakheempur.", trend: "down" },
    {
      text: "BJP to comeup with next master stroke for election.",
      trend: "up",
    },
  ];

  const profileData = [
    {profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRzK8KQmnTQw87SgkSPuoIH9JK4dMGONxruaX8mN-uIWRqZtFQyhUozYfyua21DQW4go&usqp=CAU"},
    {profileImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Amit_Shah_photographed_during_the_first_Union_Cabinet_Meeting_of_the_18th_Lok_Sabha_%28cropped%29.jpg"},
    {profileImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Amit_Shah_photographed_during_the_first_Union_Cabinet_Meeting_of_the_18th_Lok_Sabha_%28cropped%29.jpg"},
    {profileImage: "https://www.jkbjp.in/wp-content/uploads/2016/10/Amit-Shah-Ji-14.jpg"},
    {profileImage: "https://lh3.googleusercontent.com/tMnos857awnWGpjTWTOlll4r8T_G9HNWuGUpwp1vyrOxgJyoEZk21l5uXw7v0CeakHPEVtBb4TH8ntpnKjrcWMlUWQ=s0"},
    {profileImage: "https://m.media-amazon.com/images/I/71E7tAfzF2L.jpg"},
  ];

  return (
    <>
      <UsersPageNav />
      <ToastContainer />
      <div className="w-full h-screen bg-white relative flex">
        <div className="overflow-auto overflow-x-hidden">
          {/* Profile information */}
          <div className="h-auto w-[350px] border-[1px] border-gray-300 px-4 mt-5 mx-5 rounded-md shadow-lg">
            <div className="flex gap-4 px-2 py-3 rounded-full">
              <img
                className="rounded-full border-2 border-gray-300 w-[120px] h-[120px]"
                src="https://www.amitshah.co.in/storage/uploads/1/1679578400-641c55204809a.png"
                alt="Amit Shah"
              />
              <h1 className="flex font-semibold text-xl items-center justify-center">
                Amit Shah
              </h1>
            </div>
            <div className="px-3 py-5 flex gap-3 mt-1">
              <div className="mt-1.5 mx-2 flex flex-col gap-4 ">
                <FaAddressCard size={25} color="#F5821F" />
                <FaIdCardAlt size={25} color="#F5821F" />
                <MdRememberMe size={25} color="#F5821F" />
                <MdLocationPin size={25} color="#F5821F" />
              </div>
              <div>
                <ul className="text-black">
                  <li className="py-2 border-t-[1px] border-gray-300">Bhartiya Janata Party</li>
                  <li className="py-2 border-t-[1px] border-gray-300">Politician</li>
                  <li className="py-2 border-t-[1px] border-gray-300">Member of Parliament, Lok Sabha</li>
                  <li className="py-2 border-t-[1px] border-gray-300">Delhi, India</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Drag n Drop information */}
          <div className="w-[350px] mx-auto mt-5 border-[1px] border-gray-300 bg-white rounded-lg shadow-md p-3">
            {/* Upcoming Events */}
            <div className="pb-2">
              <button
                onClick={() => setUpcomingOpen(!isUpcomingOpen)}
                className="text-left w-full flex items-center justify-between font-semibold text-gray-700"
              >
                <span>Upcoming Events</span>
                <span>
                  {isUpcomingOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isUpcomingOpen && (
                <ul className="mt-4">
                  {newsItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center py-2 space-x-2 border-t"
                    >
                      <span>
                        {item.trend === "up" ? (
                          <FaArrowUp className="text-green-500" />
                        ) : (
                          <FaArrowDown className="text-red-500" />
                        )}
                      </span>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Event History */}
            <div className="border-t py-2">
              <button
                onClick={() => setEventOpen(!isEventOpen)}
                className="text-left w-full flex items-center justify-between font-semibold text-gray-700"
              >
                <span>Event History</span>
                <span>
                  {isEventOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isEventOpen && (
                <p className="mt-2 text-sm text-gray-600">
                 Event history content...
                </p>
              )}
            </div>

            {/* Development */}
            <div className="border-t py-2">
              <button
                onClick={() => setDevelopmentOpen(!isDevelopmentOpen)}
                className="text-left w-full flex items-center justify-between font-semibold text-gray-700"
              >
                <span>Development</span>
                <span>
                  {isDevelopmentOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isDevelopmentOpen && (
                <p className="mt-2 text-sm text-gray-600">Development content...</p>
              )}
            </div>
          </div>
          {/* Profile photos */}
          <div className="flex flex-wrap w-[350px] mt-10 mb-5 mx-auto ">
              {profileData.map((item,index)=>{
                return(
                  <div key={index} className="w-[105px] h-[130px] mx-1 cursor-pointer hover:border-[#F5821F] border-[0px] transition-colors duration-500">
                    <img className="w-full h-full" src={item.profileImage} alt="Profile"/>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="flex-1 ml-2 overflow-y-auto no-scrollbar ">
          <div className="px-5 py-5 mt-5 rounded-md w-[724px] border-[1px] shadow-lg border-gray-300">
            <div className="flex">
              <input
                className="w-[750px] h-[50px] border-[1px] border-[#F5821F] focus:border-[#F5821F] rounded-md transition-colors duration-500 "
                type="text"
                onChange={handleMessageChange}
                placeholder="Enter a message for the post"
              />
              <MdUploadFile
                className="mx-2 cursor-pointer"
                size={50}
                color="#F5821F"
                onClick={handlePostImage}
              />
              <input
                className="cursor-pointer"
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>

            <div>
              {image && (
                <div className="object-contain w-[180px] h-[100px] mt-4">
                  <img
                    className="w-full h-full"
                    src={image}
                    alt="Uploaded Preview"
                  />
                </div>
              )}
              <div className="flex">
                <div className="mt-3">
                  <MdAddAPhoto
                    className="cursor-pointer mx-[60px]"
                    onClick={handleImageClick}
                    color="#F5821F"
                    size={20}
                  />
                  <h1 className="text-xs mx-[40px] font-semibold text-[#F5821F]">
                    ADD PHOTO
                  </h1>
                </div>

                <div className="mt-3">
                  <CgAttachment
                    className="cursor-pointer mx-[80px]"
                    onClick={handleImageClick}
                    color="#F5821F"
                    size={20}
                  />
                  <h1 className="text-xs mx-[40px] font-semibold text-[#F5821F]">
                    ADD ATTACHMENT
                  </h1>
                </div>

                <div className="mt-3">
                  <FaLocationDot
                    className="cursor-pointer mx-[50px]"
                    onClick={handleImageClick}
                    color="#F5821F"
                    size={20}
                  />
                  <h1 className="text-xs mx-[40px] font-semibold text-[#F5821F]">
                    NEAR BY
                  </h1>
                </div>

                <div className="mt-3">
                  <FaFolder
                    className="cursor-pointer mx-[55px]"
                    onClick={handleImageClick}
                    color="#F5821F"
                    size={20}
                  />
                  <h1 className="text-xs mx-[40px] font-semibold text-[#F5821F]">
                    ADD POST
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[724px] h-[180px] flex gap-10 items-center justify-around">
            <div>
              <FaHeart className="ml-3 mb-2" size={30} color="#FD4FB3" />
              <h1 className="font-bold text-3xl">16K</h1>
              <h1 className="font-normal">Total Posts</h1>
            </div>
            <div>
              <BsShieldFillCheck
                className="ml-3 mb-2"
                size={30}
                color="#4CCB4C"
              />
              <h1 className="font-bold text-3xl">30K</h1>
              <h1 className="font-normal">Total Visits</h1>
            </div>
            <div>
              <RiFlagFill className="ml-3 mb-2" size={30} color="#F04040" />
              <h1 className="font-bold text-3xl">1000</h1>
              <h1 className="font-normal">Live Users</h1>
            </div>
          </div>

          {/*uploaded image post */}
          {uploadedImage && (
            <div className="shadow-lg rounded-md border-[1px] border-gray-300 w-[732px] mb-6">
              <div className="flex items-center px-4 py-4 gap-4">
                <div className="rounded-full w-[40px] h-[40px] bg-[#F5821F]">
                  <h1 className="text-white font-medium px-2.5 py-2">AS</h1>
                </div>
                <div>
                  <h1 className="text-md font-normal">Amit Shah</h1>
                </div>
                <CiMenuKebab size={25} className="ml-auto" />
              </div>
              <div>
                <img
                  className="w-full h-[450px]"
                  src={uploadedImage}
                  alt="Posted Image"
                />
                <p className="px-4 py-2 text-lg text-black">{message}</p>
              </div>
            </div>
          )}

          {/*user posts */}
          {usersData.map((item, index) => (
            <div
              key={index}
              className="shadow-lg rounded-md border-[1px] border-gray-300 w-[724px] mb-6"
            >
              <div className="flex items-center px-4 py-4 gap-4">
                <div className="rounded-full w-[40px] h-[40px] bg-[#F5821F]">
                  <h1 className="text-white font-medium px-2.5 py-2">AS</h1>
                </div>
                <div>
                  <h1 className="text-md font-normal">Amit Shah</h1>
                </div>
                <CiMenuKebab size={25} className="ml-auto" />
              </div>
              <div>
                <img
                  className="w-full h-[450px]"
                  src={item.image}
                  alt="Posted Image"
                />
                <p className="px-4 py-2 text-lg text-black">{item.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[380px] h-screen overflow-y-auto ">
          <div className="w-[320px] mx-auto mt-5 p-5 border-[1px] rounded-lg shadow-lg  border-gray-300">
            <h1 className="text-center text-lg font-semibold">
              Post's Trend Analysis
            </h1>
            <Pie data={data} options={options} />
          </div>

          <div className="w-[320px] mx-auto mt-5 border-[1px] border-gray-300 bg-white rounded-lg shadow-md p-3">
            {/* Trending News */}
            <div className="pb-2">
              <button
                onClick={() => setTrendingOpen(!isTrendingOpen)}
                className="text-left w-full flex items-center justify-between font-semibold text-gray-700"
              >
                <span>Trending News</span>
                <span>
                  {isTrendingOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isTrendingOpen && (
                <ul className="mt-4">
                  {newsItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center py-2 space-x-2 border-t"
                    >
                      <span>
                        {item.trend === "up" ? (
                          <FaArrowUp className="text-green-500" />
                        ) : (
                          <FaArrowDown className="text-red-500" />
                        )}
                      </span>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Latest News */}
            <div className="border-t py-2">
              <button
                onClick={() => setLatestOpen(!isLatestOpen)}
                className="text-left w-full flex items-center justify-between font-semibold text-gray-700"
              >
                <span>Latest News</span>
                <span>
                  {isLatestOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isLatestOpen && (
                <p className="mt-2 text-sm text-gray-600">
                  Latest news content...
                </p>
              )}
            </div>

            {/* History */}
            <div className="border-t py-2">
              <button
                onClick={() => setHistoryOpen(!isHistoryOpen)}
                className="text-left w-full flex items-center justify-between font-semibold text-gray-700"
              >
                <span>History</span>
                <span>
                  {isHistoryOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isHistoryOpen && (
                <p className="mt-2 text-sm text-gray-600">History content...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
