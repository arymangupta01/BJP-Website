import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
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
    <div className="h-[2150px] relative z-50 bg-[#FBEBEA] ">
      <div className="flex z-50 relative justify-center  pt-[25px]">
      <div className="w-FULL">
        <h2 className="text-6xl font-semibold text-gray-700 mb-7">
          <span className="text-[#F5821F] text-9xl font-semibold ">PARTY</span>{" "}
          PRESIDENTS
        </h2>

        {timelineData.map((item, index) => {
          return (
            <ul key={index}>
              <li className="relative flex items-baseline gap-8 pb-5">
                <div className="before:absolute before:left-[36px] before:h-full before:w-[2px] before:bg-gray-400 mt-10">
                  <div
                    onClick={() => handleVideoClick(item.videoLink)}
                    className="cursor-pointer relative"
                  >
                    <FaCircle
                      size={75}
                      className="transform hover:bg-[#F5821F] rounded-full border-[6px] border-[#F5821F] -translate-x-[1px] text-[#FBEBEA]"
                    />
                    <FaCirclePlay
                      size={25}
                      className="absolute left-9 top-[37px] transform -translate-x-1/2 -translate-y-1/2 text-[#F5821F]"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-600">{item.name}</p>
                  <img
                    className="rounded-lg w-52 h-[300px]"
                    src={item.image}
                    alt={item.name}
                  />
                  <p className="text-sm font-semibold text-gray-600">{item.year}</p>
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
