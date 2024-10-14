import React from "react";
import "./FlipCard.css";

const Journey = () => {
  const journeyData = [
    {
      image:
        "https://www.constitutionofindia.net/wp-content/uploads/2022/10/SPMookerjee.jpg",
      title: "Dr Syama Prasad Mookerjee",
      description:
        "Dr Syama Prasad Mookerjee was born on 6 July 1901. He graduated from Calcutta University and became the fellow of the senate in 1923. In 1924 he enrolled himself as an advocate in Calcutta High court. Later on he left for England in 1926 and was admitted as a barrister from Lincoln’s Inn in 1927.",
    },
    {
      image:
        "https://www.bjp.org/files/photo-gallery/shri-atal-bihari-vajpayeeji-3_23.jpg",
      title: "Shri Atal Bihari Vajpayee",
      description:
        "Atal Bihari Vajpayee was the eleventh Prime Minister of India from 16-31 May 1996 and he served again from 19 March 1998 to 13 May 2004. Born on 25 December 1924 in Gwalior, Madhya Pradesh, to Shri Krishna Bihari Vajpayee and Smt. Krishna Devi, Shri Vajpayee is a parliamentarian for over four decades. Shri Vajpayee, a leader of the center-right Bharatiya Janata Party (BJP) and is the only Prime Minister outside the Indian National Congress party to be serve for full term of five-years.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H2C5NPOyUw6SQQY1tDyMUbDyUhgVOICkPg&s",
      title: "Shri Lal Krishna Advani",
      description:
        "Lal Krishna Advani is an Indian politician and a senior leader of the Bharatiya Janata Party (BJP). Advani was born on 8 November 1927 in Karachi, to Kishanchand D Advani and Gyani Devi. Advani has worked as a volunteer of Rashtriya Swayamsevak Sangh, a right-wing Hindu nationalist organization. He became a member of Bharatiya Jana Sangh and after working for various positions in the Jana Sangh party, he became its President in 1973. He was also a member of Rajya Sabha from Gujarat from 1976 to 1982.",
    },
    {
      image:
        "https://www.constitutionofindia.net/wp-content/uploads/2022/10/SPMookerjee.jpg",
      title: "Dr. Murli Manohar Joshi",
      description:
        "Dr. Murli Manohar Joshi is an Indian politician and is a leading member of the Bharatiya Janata Party. He was the President of BJP between the period of 1991 & 1993. Presently he is the MP for Kanpur. Later in the NDA regime, he became the Union Human Resources Development minister of India. He is familiar for his vision on Indian socio-politics and for his association with the RSS.",
    },
    {
      image:
        "https://www.bjp.org/files/photo-gallery/shri-atal-bihari-vajpayeeji-3_23.jpg",
      title: "Late Shri Kushabhau Thakre",
      description:
        "Kushabhau Thakre was born at Dhar in Madhya Pradesh on 15 August 1922. He pursued his education in Dhar and Gwalior. He was admitted into RSS Rashtriya Swayamsevak Sangh and advanced in Jana Sangh in 1942. Later on he joined Janata Party during the time the parties merged. He was imprisoned for 19 years along with opposition leaders during emergency in 1977–1979 and was elected to parliament through by elections from Madhya Pradesh in 1979.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H2C5NPOyUw6SQQY1tDyMUbDyUhgVOICkPg&s",
      title: "Late Shri K. Jana Krishnamurthy",
      description:
        "Krishnamurthy is a former Union Law Minister and a member of Indian parliament. He was the second person from Tamil Nadu after Kamaraj to lead a national party in India. Being an active member of Rashtriya Swayamsevak Sangh (RSS), Krishnamurthy was elected as the Bharatiya Jana Sangh’s General Secretary in Tamil Nadu.",
    },
    {
      image:
        "https://www.constitutionofindia.net/wp-content/uploads/2022/10/SPMookerjee.jpg",
      title: "Shri Bangaru Laxman",
      description:
        "Bangaru Laxman was a member of Bharatiya Janata Party and Rashtriya Swayamsevak Sangh (RSS). He was President of the party from 2000-2001 and served as a minister of state for railways in Indian Government from 1999 to 2000.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H2C5NPOyUw6SQQY1tDyMUbDyUhgVOICkPg&s",
      title: "Shri Rajnath Singh",
      description:
        "Shri Rajnath Singh is a famous Indian politician who is presently working as the Union Minister of Home Affairs in the administration of Narendra Modi. He is also the President of the ruling party, Bharatiya Janata Party (BJP). Earlier he was the Chief Minister of Uttar Pradesh and Cabinet Minister during the period of Vajpayee Government.",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="font-semibold text-5xl text-center mt-8 decoration-4 underline underline-offset-[15px] decoration-[#F5821F] ">
        <span>Founders Of</span>
        <span className="text-[#F5821F]"> BJP</span>
      </h1>
      <div className="flex flex-wrap">
        {journeyData.map((item, index) => {
          return (
            <div className=" ">
              <div className="flip-card rounded-lg border-[1px] mx-4 border-gray-200 shadow-lg w-[310px] h-[400px] mt-[60px] overflow-hidden">
                <div className="flip-card-inner relative">
                  <div className="absolute w-full flip-card-front bg-white">
                    <img
                      src={item.image}
                      alt="Placeholder"
                      className="w-full h-[280px]"
                    />
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  </div>
                  <div className="absolute w-full flip-card-back bg-white">
                    <img
                      src={item.image}
                      alt="Placeholder"
                      className="w-full h-[280px]"
                    />
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Journey;
