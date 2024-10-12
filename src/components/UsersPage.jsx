import React, { useState } from "react";
import UsersPageNav from "./UsersPageNav";

const UsersPage = () => {
  const [image, setImage] = useState("");

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
      <div className="w-full h-screen bg-zinc-700 relative flex">
        <div className="h-full w-[500px] border-2 border-white overflow-y-scroll">
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
            <ul className="">
              <li className="py-2">Bhartiya Janata Party</li>
              <li className="py-2">Lorem ipsum dolor sit</li>
              <li className="py-2">Lorem ipsum dolor sit</li>
              <li className="py-2">Lorem ipsum dolor sit</li>
            </ul>
          </div>
        </div>
        <div className="flex border-2 w-full h-full">
          <div className="border-2 border-white w-ful">
            <div className="px-20 py-10 flex ">
              <input className="w-[700px] h-[50px] rounded-sm " type="text" />
              <button>Submit</button>
            </div>
            <div>
              <img src={image} alt="" />
              <input type="file" onChange={handleImageChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
