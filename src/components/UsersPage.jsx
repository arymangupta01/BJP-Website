import React, { useState, useRef } from "react";
import UsersPageNav from "./UsersPageNav";
import {
  MdAddAPhoto,
  MdUploadFile,
  MdLocationPin,
  MdRememberMe,
} from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaAddressCard, FaIdCardAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  return (
    <>
      <UsersPageNav />
      <ToastContainer />
      <div className="w-full h-screen bg-white relative flex">
        <div>
          {/* Profile information */}
          <div className="h-auto w-[400px] border-[1px] border-gray-300 px-4 mt-10 mx-5 rounded-md shadow-lg">
            <div className="flex gap-4 px-2 py-3 rounded-full">
              <img
                className="rounded-full border-2 border-gray-300 w-[120px] h-[120px]"
                src="https://yt3.googleusercontent.com/rOxmp7jqiqRmG4SXcUcyiGpldwzWE7k49DrEkjUH_QjPEHNM6prk5bXl4upySUfAZL_18qSJZg=s900-c-k-c0x00ffffff-no-rj"
                alt="Amit Shah"
              />
              <h1 className="flex font-semibold text-xl items-center justify-center">
                Amit Shah
              </h1>
            </div>
            <div className="px-3 py-5 flex gap-3 mt-1">
              <div className="mt-1.5 mx-2 flex flex-col gap-4">
                <FaAddressCard size={25} color="#F5821F" />
                <FaIdCardAlt size={25} color="#F5821F" />
                <MdRememberMe size={25} color="#F5821F" />
                <MdLocationPin size={25} color="#F5821F" />
              </div>
              <div>
                <ul className="text-black">
                  <li className="py-2">Bhartiya Janata Party</li>
                  <li className="py-2">Politician</li>
                  <li className="py-2">Member of Parliament, Lok Sabha</li>
                  <li className="py-2">Delhi, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
        <div className="flex-1 overflow-y-auto p-6">
          
          <div className="px-20 py-10 mt-4 rounded-md w-[80%] border-[1px] shadow-lg border-gray-300 mb-6">
            <div className="flex">
              <input
                className="w-[700px] h-[50px] border-[1px] border-[#F5821F] focus:border-[#F5821F] rounded-md transition-colors duration-500"
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
              <div className="mt-3">
                <MdAddAPhoto
                  className="cursor-pointer mx-[60px]"
                  onClick={handleImageClick}
                  color="#F5821F"
                  size={25}
                />
                <h1 className="text-sm mx-[40px] font-medium text-[#F5821F]">
                  Add Photo
                </h1>
              </div>
            </div>
          </div>

          {/*uploaded image post */}
          {uploadedImage && (
            <div className="shadow-lg rounded-md border-[1px] border-gray-300 w-full mb-6">
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
                <img className="w-full h-[450px]" src={uploadedImage} alt="Posted Image" />
                <p className="px-4 py-2 text-lg text-black">{message}</p>
              </div>
            </div>
          )}

          {/*user posts */}
          {usersData.map((item, index) => (
            <div
              key={index}
              className="shadow-lg rounded-md border-[1px] border-gray-300 w-full mb-6"
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
                <img className="w-full h-[450px]" src={item.image} alt="Posted Image" />
                <p className="px-4 py-2 text-lg text-black">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
