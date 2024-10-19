import React, { useState } from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'


const PresidentPage = () => {

  const presidentData = [
    {image : "https://www.bjp.org/files/party-president-banner-images/President-Slide_0.jpg", name : "National President Shri Jagat Prakash Nadda "},
    {image : "https://www.bjp.org/files/party-president-banner-images/President-Slide_2-min.jpg", name : "Shri "},
    {image : "https://www.bjp.org/files/party-president-banner-images/President-Slide_3-min.jpg", name : "Shri "}
  ]

  const [curr, setCurr] = useState(0);
  const { image: presidentImage } = presidentData[curr];

  const presidentHandleDotClick = (index) => {
    setCurr(index);
  };

  const [text] = useTypewriter({
    words : [' Sabka Saath, Sabka Vikas','Beti Bachao, Beti Padhao', ' Swachh Bharat Abhiyan',' Achhe Din Aane Wale Hain'],
    loop : true,
    delay: 500,
  })

  return (
    <div id="sec2" className='w-full h-screen relative overflow-hidden '>
      <div className="flex justify-center items-center">
        {presidentData.map((item, index) => {
          return (
            <img
              className=" opacity- flex justify-center items-center object-contain"
              key={index}
              src={ presidentImage}
              alt=""
            />
            
          );
        })}
      </div>

      {/* Text Typewriter */}

      

      <div className="absolute bottom-[50%] right-0 left-0 text-center ">
        <h1 className='inline-flex items-center rounded-md bg-white bg-opacity-60 p-2 pb-4'>
          <span className='text-7xl font-semibold  text-white ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }} >BJP Says:</span>
          <span className='text-7xl font-semibold  text-[#F5821F]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }} > {text}</span>
          <span className='text-7xl font-semibold  text-[#F5821F]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }} ><Cursor  /></span>
        </h1>
      </div>

       {/* Dot Slider */}
       <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-2">
        {presidentData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              curr === index ? "bg-[#F5821F]" : "bg-[#F6BC5E]"
            }`}
            onClick={() => presidentHandleDotClick(index)}
          ></div>
        ))}
      </div>

    </div>
  )
}

export default PresidentPage