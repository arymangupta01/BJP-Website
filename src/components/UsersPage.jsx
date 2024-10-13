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

const UsersPage = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [message, setMessage] = useState(""); // State to store message

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
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <UsersPageNav />
      <div className="w-full h-screen bg-white relative flex">
        <div>
          <div className="h-auto w-[400px] border-[1px] border-gray-300 px-4 mt-10 mx-5 rounded-md">
            <div className="flex gap-4 px-2 py-3">
              <img
                className="rounded-full w-[120px] h-[120px]"
                src="https://yt3.googleusercontent.com/rOxmp7jqiqRmG4SXcUcyiGpldwzWE7k49DrEkjUH_QjPEHNM6prk5bXl4upySUfAZL_18qSJZg=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <h1 className="flex font-semibold text-xl items-center justify-center">
                Amit Shah
              </h1>
            </div>
            <div className="px-3 py-5 flex gap-3 mt-1">
              <div className="mt-1.5 mx-2 flex flex-col gap-4">
                <FaAddressCard size={25} color="#F5821F"  />
                <FaIdCardAlt size={25} color="#F5821F"  />
                <MdRememberMe size={25} color="#F5821F"  />
                <MdLocationPin size={25} color="#F5821F"  />
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

        <div className=" w-full h-screen relative">
          <div className="px-20 py-10 absolute left-[100px] top-10 right-[50px] rounded-md w-[80%] border-[1px] border-gray-300">
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
            <div className="">
              {image && (
                <div className="object-contain w-[180px] h-[100px]">
                  <img
                    className="w-full h-full -mx-4 "
                    src={image}
                    alt="Uploaded Preview"
                  />
                </div>
              )}
              <MdAddAPhoto
                className="cursor-pointer mx-[60px] mt-3"
                onClick={handleImageClick}
                color="#F5821F"
                size={25}
              />
              <h1 className="text-sm mx-[40px] font-medium text-[#F5821F]">
                Add Photo
              </h1>
            </div>
          </div>

          {uploadedImage && (
            <div className=" absolute top-[300px] left-[100px] rounded-md border-[1px] border-gray-300 w-[80%] h-screen">
              <div className="flex items-center px-4 py-4 gap-4">
                <div className="rounded-full w-[40px] h-[40px] bg-[#F5821F]">
                  <h1 className="text-white font-medium px-2.5 py-2">AS</h1>
                </div>
                <div className="">
                  <h1 className="text-md font-normal">Amit Shah</h1>
                </div>
                <CiMenuKebab
                  size={25}
                  className="absolute left-[700px] right-0"
                />
              </div>
              <div>
                <img
                  className="w-[100%] h-[450px] absolute  top-[80px]"
                  src={uploadedImage}
                  alt="Posted Image"
                />
                <p className="absolute left-[70px] top-[550px] text-lg text-black">
                  {message}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
