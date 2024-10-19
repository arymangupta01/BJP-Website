import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const timelineData = [
  {
    image:
      "https://www.bjp.org/files/bjp-presidents-images/party-president-1.jpg",
    name: "Shri Atal Bihari Vajpayee",
    year: "1980-1986",
    videoLink: "https://www.youtube.com/embed/DHhVx_1JthI?si=IlYPimwsvyi0CUf3",
  },
  {
    image:
      "https://www.bjp.org/files/bjp-presidents-images/party-president-2.jpg",
    name: "Shri Lal Kishan Adani",
    year: "1986-1990 | 1993-1998 | 2004 - 2005",
    videoLink: "https://www.youtube.com/embed/tAuxjb2skzE?si=JIMoSsye5WAlUzWT",
  },
  {
    image:
      "https://www.bjp.org/files/bjp-presidents-images/party-president-3.jpg",
    name: "Dr. Murli Manohar Joshi",
    year: "1991-1993",
    videoLink: "hhttps://www.youtube.com/embed/pf7LL2s4l1w?si=MHikt3Ud_xumL3yh",
  },
  {
    image:
      "https://www.bjp.org/files/bjp-presidents-images/party-president-4.jpg",
    name: "Shri Kushabhau Thakre",
    year: "1998 - 2000",
    videoLink: "https://www.youtube.com/embed/pf7LL2s4l1w?si=MHikt3Ud_xumL3yh",
  },
];

const Timeline = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div id="sec4" className="h-full bg-[#FBEBEA] mt-10 ">
      <div className="flex relative justify-center  pt-[25px]">
        <div className="w-FULL">
          <h2 className="text-5xl font-semibold text-gray-700 mb-[60px] underline underline-offset-[13px] decoration-[#F5821F]">
            <span className="text-[#F5821F] text-5xl font-semibold ">
              Party
            </span>{" "}
            President
          </h2>

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <ul>
                <li key={index} className="relative flex items-baseline gap-8 pb-[40px]">
                  <div className="absolute -inset-20 mx-auto h-[285px] w-[2px] bg-gray-400 mt-[180px] " onClick={() => handleVideoClick(item.videoLink)}>
                    
                      <div className=" cursor-pointer transform w-[75px] h-[75px] rounded-full border-[6px] hover:bg-[#F5821F] border-[#F5821F] -translate-x-[37px] -translate-y-[90px] text-[#FBEBEA]"  ></div>
                      <FaCirclePlay
                        size={25}
                        className="absolute cursor-pointer -top-[53px] transform -translate-x-1/2 -translate-y-1/2 hover:text-[#F5821F] text-[#F5821F]"
                      />
                    </div>
                  <div className={`flex flex-col relative  ${isEven ? "left-[220px]" : "right-[135px]" }  top-7 `}>
                    <p className="text-lg font-semibold mx-auto text-gray-600">
                      {item.name}
                    </p>
                    <img
                      className="rounded-lg mx-auto w-52 h-[300px]"
                      src={item.image}
                      alt={item.name}
                    />
                    <p className="text-sm font-semibold mx-auto text-gray-600">
                      {item.year}
                    </p>
                  </div>
                </li>
              </ul>
            );
          })}

          {selectedVideo && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="bg-white p-3 rounded-lg shadow-lg relative">
                <AiOutlineClose
                  className="absolute text-white top-3 right-3 text-2xl cursor-pointer"
                  onClick={handleCloseModal}
                />
                <iframe
                  width="560"
                  height="315"
                  src={selectedVideo}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
