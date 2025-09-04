import React from "react";

const Travelform = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-[60px] text-center font-kalnia-100 tracking-[3px] leading-[90px] ">
        GLOBAL HERPING EXPEDITIONS
      </h1>
      <h2 className="text-4xl md:text-[60px] text-center font-kalnia-100 tracking-[3px]">
        TRAVEL APPLICATION
      </h2>

      <div className="flex justify-center space-x-2 mb-9 mt-5">
        <div className="bg-[#f1efdd] h-[2px] w-[170px]"></div>
        <div className="bg-[#f1efdd] h-[2px] w-[50px]"></div>
        <div className="bg-[#f1efdd] h-[2px] w-[50px]"></div>
      </div>

      <p className="text-center text-[16px] md:text-[18px] text-gray-600 mb-10 max-w-5xl mx-auto px-2 md:px-0 leading-relaxed">
        You will not be charged a deposit or fee by filling out this
        application. It is simply a way to hold your reservation. If you plan on
        traveling with one or more persons, we only need the main applicant’s
        information at this time. Once you submit the application, we will
        contact you and collect all remaining details. You may cancel your
        reservation at any time and no fees are due until we receive final
        confirmation from the applicant. A deposit is not collected until you
        are ready to secure your reservation.
      </p>

      <form className="space-y-8 form-section">
        <div>
          <input
            type="number"
            name="travelers"
            placeholder="Number of Travelers in your group"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            min="1"
            aria-label="Number of Travelers in your group"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            autoComplete="given-name"
            aria-label="First Name"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            autoComplete="family-name"
            aria-label="Last Name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            min="0"
            aria-label="Age"
          />
          <input
            type="date"
            name="dob"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent text-[#2B2B2B] text-2xl"
            aria-label="Date of Birth"
          />
          <select
            name="sex"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent text-[#2B2B2B] text-2xl"
            aria-label="Sex"
            defaultValue=""
          >
            <option value="" disabled>
              Sex
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            name="mailingAddress"
            placeholder="Mailing Address"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            autoComplete="street-address"
            aria-label="Mailing Address"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            autoComplete="email"
            aria-label="Email"
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            autoComplete="tel"
            aria-label="Contact Number"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="prescriptionMeds"
            placeholder="Do you take any prescription meds?"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            aria-label="Do you take any prescription meds?"
          />
          <input
            type="text"
            name="allergies"
            placeholder="Do you have any allergies, food or otherwise?"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            aria-label="Do you have any allergies, food or otherwise?"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="physicalLimitations"
            placeholder="Do you have any physical limitations or disabilities?"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent placeholder:text-[#2B2B2B] text-2xl"
            aria-label="Do you have any physical limitations or disabilities?"
          />
          <select
            name="tourSelection"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent text-[#2B2B2B] text-2xl"
            aria-label="Select Tour"
            defaultValue=""
          >
            <option value="" disabled>
              Select Tour
            </option>
            <option>Amazon Rainforest</option>
            <option>Madagascar</option>
            <option>Costa Rica</option>
          </select>
        </div>

        <p className="text-sm text-center text-gray-500 mt-10">
          I have read and I understand everything on the travel application and
          to the best of my <br /> knowledge, declare that all the information
          provided is correct.
        </p>

        <div className="text-center">
          <button
            type="submit"
            className="relative inline-block px-12 py-4 bg-black text-white font-semibold transform -skew-x-12 hover:bg-gray-800 transition-all"
          >
            <span className="block transform skew-x-12">
              SUBMIT APPLICATION
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Travelform;
