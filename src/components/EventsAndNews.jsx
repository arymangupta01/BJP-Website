import React from "react";
import { CiLocationOn } from "react-icons/ci";

const EventsAndNews = () => {
  const eventData = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcduMUlOHh0XuvlO-wkW4S6NjC1rFW0lMn-A&s",
      title: "Women Empowerment Week",
      name: "Amit Shah",
      location: "Ramleela Groud, Meerut, U.P",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeicLpqlXHi4n6UxAUS2SNCWvN2p51hhJ_6A&s",
      title: "New Hospital Inauguration",
      name: "Shri Narendra Modi",
      location: "Meerut Industrial Area, Meerut, U.P",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw467gFnRMKIvSbw96X1E23VCjQjFy8FwoMw&s",
      title: "Meerut IT Park - Inauguration",
      name: "Yogi Adityanath",
      location: "New Commercial Area, Meerut, U.P",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FGh7i8SBpfJN8LzBjQnBh8P8XZ7_-2k9zA&s",
      title: "Jewellery Shop Inauguration",
      name: "Arvind Kejriwal",
      location: "Mishra Bazar, Meerut, U.P",
    },
  ];

  return (
    <div className="w-full h-full ">
      <h1 className="font-semibold text-4xl text-center mt-5 decoration-4 underline underline-offset-[12px] decoration-[#F5821F] ">
        <span className="text-[#F5821F]">Events &</span>
        <span> News</span>
      </h1>
      <div className="flex gap-4 px-4 mt-[55px]">
        <div className="w-[33%] border-[1px] rounded-md border-gray-200 overflow-hidden shadow-lg ">
          <div className="w-full h-[45px] bg-[#F5821F]">
            <h1 className="text-white font-semibold text-md px-3 pt-2.5 ">
              Current Events
            </h1>
          </div>
          <div>
          {eventData.map((item, index) => {
              return (
                <div className="w-[570px] h-[180px] border-t-[1px] border-[#F5821F] flex gap-2">
                  <div>
                    <img
                      className="w-[90px] h-[100px] mx-3 my-6 object-cover rounded-xl"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <h1 className="font-semibold text-lg">
                      {item.title}
                    </h1>
                    <h2 className="text-[#f5231f] text-sm font-semibold ">
                      {item.name}
                    </h2>
                    <div className="relative left-[150px] bottom-4">
                      <div className="bg-[#f5821F] w-[140px] h-[70px] flex px-2 ">
                        <h2 className="text-5xl text-white mt-3">11</h2>
                        <h1 className="text-md font-semibold text-white mt-3 mx-2">
                          October 2024
                        </h1>
                      </div>
                    </div>
                    <div className="rounded-2xl w-[300px] h-[32px] border-[1px] border-[#F5821F] flex justify-center items-center gap-2 -mt-1">
                    <CiLocationOn color="#F5821F" size={20} />
                      <h1 className=" text-center text-sm text-[#F5821F] font-normal">
                        {item.location}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
        <div className="w-[33%] border-[1px] rounded-md border-gray-200 overflow-hidden shadow-lg">
            <div className="w-full h-[45px] bg-[#F5821F]">
            <h1 className="text-white font-semibold text-md px-3 pt-2.5 ">
              Upcoming Events
            </h1>
          </div>
          <div>
          {eventData.map((item, index) => {
              return (
                <div className="w-[570px] h-[180px] border-t-[1px] border-[#F5821F] flex gap-2">
                  <div>
                    <img
                      className="w-[90px] h-[100px] mx-3 my-6 object-cover rounded-xl"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <h1 className="font-semibold text-lg">
                      {item.title}
                    </h1>
                    <h2 className="text-[#f5231f] text-sm font-semibold ">
                      {item.name}
                    </h2>
                    <div className="relative left-[150px] bottom-4">
                      <div className="bg-[#f5821F] w-[140px] h-[70px] flex px-2 ">
                        <h2 className="text-5xl text-white mt-3">11</h2>
                        <h1 className="text-md font-semibold text-white mt-3 mx-2">
                          October 2024
                        </h1>
                      </div>
                    </div>
                    <div className="rounded-2xl w-[300px] h-[32px] border-[1px] border-[#F5821F] flex justify-center items-center gap-2 -mt-1">
                    <CiLocationOn color="#F5821F" size={20} />
                      <h1 className=" text-center text-sm text-[#F5821F] font-normal">
                        {item.location}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[33%] border-[1px] rounded-md border-gray-200 overflow-hidden shadow-lg">
            <div className="w-full h-[45px] bg-[#F5821F]">
            <h1 className="text-white font-semibold text-md px-3 pt-2.5 ">
              Past Events
            </h1>
          </div>
          <div>
          {eventData.map((item, index) => {
              return (
                <div className="w-[570px] h-[180px] border-t-[1px] border-[#F5821F] flex gap-2">
                  <div>
                    <img
                      className="w-[90px] h-[100px] mx-3 my-6 object-cover rounded-xl"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <h1 className="font-semibold text-lg">
                      {item.title}
                    </h1>
                    <h2 className="text-[#f5231f] text-sm font-semibold ">
                      {item.name}
                    </h2>
                    <div className="relative left-[150px] bottom-4">
                      <div className="bg-[#f5821F] w-[140px] h-[70px] flex px-2 ">
                        <h2 className="text-5xl text-white mt-3">11</h2>
                        <h1 className="text-md font-semibold text-white mt-3 mx-2">
                          October 2024
                        </h1>
                      </div>
                    </div>
                    <div className="rounded-2xl w-[300px] h-[32px] border-[1px] border-[#F5821F] flex justify-center items-center gap-2 -mt-1">
                    <CiLocationOn color="#F5821F" size={20} />
                      <h1 className=" text-center text-sm text-[#F5821F] font-normal">
                        {item.location}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndNews;
