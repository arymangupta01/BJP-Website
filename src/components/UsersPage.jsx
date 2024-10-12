import React, { useState, useRef } from "react";
import UsersPageNav from "./UsersPageNav";
import { MdAddAPhoto,MdUploadFile } from "react-icons/md";


const UsersPage = () => {

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageclick = () =>{
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // Create an object URL from the file (Blob)
      setImage(url); // Store the URL in state
    }
  };

  return (
    <>
      <UsersPageNav />
      <div className="w-full h-screen bg-white relative flex">
        <div className="h-full w-[500px] border-4 border-black overflow-y-scroll">
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
          <div className="px-3 py-5">
            <ul className="text-black">
              <li className="py-2">Bhartiya Janata Party</li>
              <li className="py-2">Lorem ipsum dolor sit</li>
              <li className="py-2">Lorem ipsum dolor sit</li>
              <li className="py-2">Lorem ipsum dolor sit</li>
            </ul>
          </div>
        </div>
        <div className="border-2 border-gray-950 w-full relative">
          <div className="px-20 py-10 absolute left-[100px] top-10 right-[50px] rounded-md  border-2 w-[80%] border-green-950  ">
            <div className="flex">
              <input
                className="w-[700px] h-[50px] border-2 border-red-700 rounded-sm "
                type="text"
              />
              <MdUploadFile className="mx-2" size={50}  color="#F5821F"/>
            </div>
            <div className="">
              
              <MdAddAPhoto className="cursor-pointer mx-5 mt-3" onClick={handleImageclick} color="#F5821F" size={25} />
              <h1 className="text-sm font-medium text-[#F5821F]">Add Photo</h1>
              <input className="cursor-pointer" type="file" ref={inputRef} onChange={handleImageChange} style={{display: "none"}} />
            </div>
          </div>
          <div className="border-4 absolute top-[300px] left-[100px] border-black w-[80%] h-auto">
            <div className="flex items-center px-4 py-4 gap-4">
            <div className="rounded-full w-[40px] h-[40px] bg-[#F5821F]">
              <h1 className="text-white font-medium px-2.5 py-2">AS</h1>
            </div>
            <div className="">
              <h1 className="text-md font-normal">Amit Shah</h1>
            </div>
            </div>
            <img className="w-[80%] h-[300px] absolute left-[150px] top-[100px]   " src={image} alt="" />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
