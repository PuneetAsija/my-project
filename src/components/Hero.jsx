import React from "react";
import bgImage from "../assets/images/hero-bg.webp";

const Hero = () => {
  const handleScroll = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
   
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

   
      <div
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer hidden md:flex flex-col items-center text-white space-y-2"
        onClick={handleScroll}
      >
        <div className="w-px h-20 bg-white" />
        <p className="text-xs md:text-sm tracking-widest transform rotate-90 whitespace-nowrap hover:underline select-none">
          SCROLL DOWN
        </p>
        <div className="w-px h-20 bg-white" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 sm:px-8 md:px-[8%] pt-24 md:pt-32 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight sm:leading-snug">
          YOUR ADVENTURE <br /> AWAITS
        </h1>

        <p className="mt-6 text-base sm:text-lg font-semibold mb-4 leading-relaxed">
          Up-close Reptilian Encounters: From the rainforest to the desert,{" "}
          <br />
          Experience the World of Reptiles!
        </p>

        <div className="mt-6 w-20 sm:w-32 border-t-2 border-white "></div>

        <p className="mt-6 text-base sm:text-xl leading-relaxed text-gray-200 mb-4">
          Global Herping Expeditions provides all-inclusive, safe and exciting
          herping tours led by highly experienced guides that specialize in
          international travel. We aim to offer unforgettable adventures while
          fostering a deeper understanding and appreciation for these
          often-misunderstood creatures and the delicate ecosystems they call
          home!
        </p>
      </div>
    </section>
  );
};

export default Hero;
