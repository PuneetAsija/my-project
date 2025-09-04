import React from "react";
import crocodile from "../assets/images/crocodile.webp";

const WhyChoose = () => {
  return (
    <div>
      <section className="bg-[#f7f2e8] min-h-screen grid grid-cols-1 md:grid-cols-[33%_67%] items-center">
        <div className="w-full h-64 sm:h-full mt-5 md:h-full pl-5">
          <img
            src={crocodile}
            alt="Crocodile"
            className="w-full h-full object-cover rounded-md md:rounded-none"
          />
        </div>

        <div className="w-full flex flex-col justify-center px-6 md:px-12 py-10">
          <h2 className="text-4xl sm:text-5xl md:text-[60px] font-kalnia-100 mb-4 leading-tight sm:leading-[80px]">
            WHY CHOOSE <br /> US?
          </h2>

          <div className="flex justify-start space-x-2 mb-9 mt-2">
            <div className="bg-black h-[2px] w-[100px] sm:w-[170px]"></div>
            <div className="bg-black h-[2px] w-[30px] sm:w-[50px]"></div>
            <div className="bg-black h-[2px] w-[30px] sm:w-[50px]"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "We Pay For Your International Flight",
                text: "You read that right. ALL INCLUSIVE means ALL INCLUSIVE! Your international flight from the US is on us. Meet us at the airport for our departing international flight and we'll take care of the rest!",
              },
              {
                number: "02",
                title: "Experience",
                text: "Been there, done that! Our guides have traveled internationally dozens of times, to Asia, Africa, Australia, Central and South America, and across the US from coast to coast!",
              },
              {
                number: "03",
                title: "Knowledge",
                text: "With decades of combined experience working with captive reptiles and traveling across the globe, the founders and staff of Global Herping Expeditions established the tour company on a foundation of expertise!",
              },
              {
                number: "04",
                title: "Connections",
                text: "Through networking and making friends with great people all over the world, we often receive discounted rates on everything from rental properties and hotels to transportation. What do we do with the savings? We pass the savings along to our clients by offering cheaper rates.",
              },
            ].map(({ number, title, text }) => (
              <div key={number} className="flex relative pl-12 mb-12 last:mb-0">
                {number !== "04" && (
                  <div className="absolute left-8 top-0 h-[150px] border-l border-gray-300 z-0 hidden sm:block"></div>
                )}
                <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold z-10">
                  {number}
                </div>
                <div className="pl-6 z-10 max-w-full sm:max-w-2xl">
                  <h3 className="text-xl sm:text-2xl md:text-[24px] font-medium uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-700 text-base sm:text-[18px]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
