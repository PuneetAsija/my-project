import React from "react";

const Adventure = () => {
  return (
    <section
      id="form"
      className="bg-white py-16 flex flex-col items-center text-center px-4 md:px-8 lg:px-16"
    >
      <h2 className="text-4xl md:text-5xl tracking-[2px] mb-2 font-kalnia-100 text-[#010101]">
        UPCOMING ADVENTURE
      </h2>
      <h3 className="italic text-base md:text-lg mb-4">
        Malaysia / Tioman Island / Singapore / Pulau Ubin
      </h3>
      <p className="max-w-5xl text-gray-700 mb-8 px-2 md:px-0">
        Join us this November on our exciting herping expedition to Malaysia and
        Singapore, Southeast Asia which will include trips to nearby Tioman
        Island and Pulau Ubin. This is an all-inclusive trip. See below for
        details and itinerary!
      </p>

      <div className="bg-[#f7f2e8] border border-gray-300 px-8 py-5 mb-12 inline-block rounded">
        <span className="italic text-3xl font-dancing text-[#010101]">
          $3200.00
        </span>
        <p className="text-gray-700 text-lg font-dancing">Per Person</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-2 md:px-0">
        <div className="shadow-lg p-8 md:p-10 text-left rounded">
          <h3 className="text-2xl md:text-4xl mb-4">WHAT'S INCLUDED</h3>
          <ul className="list-decimal text-[16px] md:text-[18px] list-inside space-y-2 text-gray-700">
            <li>Your international flights to and from Singapore</li>
            <li>All ground transportation fees. Bus/cab/ferry/MRT.</li>
            <li>All meals, water and snacks</li>
            <li>Lodging. Hotels/chalets</li>
            <li>All tours</li>
          </ul>
        </div>

        <div className="shadow-lg p-8 md:p-10 text-left rounded">
          <h3 className="text-2xl md:text-4xl mb-4">WHAT'S NOT INCLUDED</h3>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 text-[16px] md:text-[18px]">
            <li className="mb-5">
              Your domestic flights to and from San Francisco aren’t included.
            </li>
            <li>Souvenirs, alcohol, or any additional personal purchases.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Adventure;
