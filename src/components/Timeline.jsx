import React from "react";

const Timeline = () => {
  return (
    <section class="bg-[#0f0f0f] py-12 text-white px-4 md:px-16">
      <div class="border p-8 md:p-12 border-white max-w-5xl mx-auto bg-black relative overflow-hidden">
        <h2 class="text-center text-2xl md:text-3xl font-bold mb-6 tracking-wider text-[#f6f0dd]">
          MALAYSIA / TIOMAN ISLAND / SINGAPORE / PULAU UBIN
        </h2>

        <div class="space-y-6 text-base leading-relaxed">
          <p>
            <span class="font-bold text-[#f6f0dd]">DEPARTING FLIGHT:</span>
            <br />
            Monday, November 10th, 2025 at 9:40am Pacific Standard Time from the
            San Francisco Airport (SFO) on a direct flight to the Changi Airport
            in Singapore. Arrive at Changi Airport in Singapore on Tuesday,
            November 11th at 7:05pm local time.
          </p>

          <p>
            <span class="font-bold text-[#f6f0dd]">RETURN FLIGHT:</span>
            <br />
            Thursday, November 20th, 2025 at 9:15am local time from the Changi
            Airport on a direct flight to San Francisco Airport (SFO), USA.
            Arrive at the San Francisco Airport on Thursday, November 20th, 2025
            at 7:50am Pacific Standard Time.
          </p>
        </div>

        <button class="absolute top-0 right-0 h-full bg-[#efeddd] px-4 text-black font-semibold tracking-wide text-xs rotate-90 origin-top-right">
          VIEW DETAILS →
        </button>
      </div>

      <section className="relative overflow-hidden h-32 flex items-center justify-center mt-12 h-20">
        {/* Scrolling Background Text */}
        <div className="absolute whitespace-nowrap flex animate-scroll-text left-0 top-1/1 transform -translate-y-1/2 text-gray-600 text-lg font-medium tracking-widest">
          {/* Repeat twice for seamless loop */}
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
          <span className="mx-1">| | | | | | | | | | | | | | | | | | |</span>
        </div>

        {/* Foreground Circles */}
        <div className="relative z-10 flex space-x-12">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="w-16 h-16 bg-[#f6f0dd] text-black font-bold rounded-full flex items-center justify-center text-xl shadow-md"
            >
              {String(num).padStart(2, "0")}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Timeline;
