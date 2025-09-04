import React from "react";
import frogImg from "../assets/images/snake.webp";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[47%_53%] gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-center md:text-left">
            WORLD CLASS <br /> HERPING TOURS
          </h2>
          <div className="flex justify-center md:justify-start space-x-2 mb-9 mt-5">
            <div className="bg-[#f1efdd] h-[2px] w-[170px]"></div>
            <div className="bg-[#f1efdd] h-[2px] w-[50px]"></div>
            <div className="bg-[#f1efdd] h-[2px] w-[50px]"></div>
          </div>
          <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
            Prepare for the adventure of a lifetime! Our team at Global Herping
            Expeditions combines 60 years of experience in the wilds of Asia,
            South & Central America, Australia, Africa, and the US to provide an
            unrivaled reptile adventure! When you travel with us, we are
            committed to your comfort, so we’ll be with you every step of the
            way. From takeoff to landing and everywhere in between!
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-white py-3 px-8 font-bold text-lg tracking-wide skew-x-[-12deg] hover:bg-gray-800 transition-all">
              <span className="skew-x-[12deg] block">READ MORE</span>
            </button>
          </div>
        </div>
        <div className="relative w-[95%] h-[300px] sm:h-[350px] md:h-[400px] flex justify-center items-center">
          <img
            src={frogImg}
            alt="Reptile Adventure"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
