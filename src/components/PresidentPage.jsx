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
    words : ['Sabka Saath, Sabka Vikas','Beti Bachao, Beti Padhao', 'Swachh Bharat Abhiyan','Achhe Din Aane Wale Hain'],
    loop : true,
    delay: 500,
  })

  return (
    <div className='w-full h-screen relative overflow-hidden '>
      <div className="flex justify-center items-center">
        {presidentData.map((item, index) => {
          return (
            <img
              className=" opacity-40 flex justify-center items-center object-contain"
              key={index}
              src={ presidentImage}
              alt=""
            />
            
          );
        })}
      </div>

      {/* Text Typewriter */}

      <h1 className="font-semibold absolute bottom-[80%] -translate-x-[450px] right-0 text-center">
          <span className='text-[#F5821F] text-8xl'>BJP</span> 
          <span className='text-[#374151] text-6xl'> Says:</span>
        </h1>

      <div className="absolute bottom-[70%] -translate-x-[250px] right-0 text-center">
        <h1>
          <span className='text-5xl font-thin text-[#F6BC5E]'>{text}
            
          </span>
          <span className='text-5xl text-[#F5821F]'><Cursor  /></span>
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