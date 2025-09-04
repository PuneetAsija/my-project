import React, { useState } from "react";
import { Mail, Phone, Facebook, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full h-[70px] bg-[#efeddd] flex justify-between items-center px-6 py-2 text-sm">
        <div className="hidden md:flex items-center space-x-6 mx-auto">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:globalherpingexpeditions@gmail.com"
              className="text-lg"
            >
              globalherpingexpeditions@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <a href="tel:19164688381" className="text-lg">
              1-916-468-8381
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-5 md:w-[20%]">
          <span className="hidden md:inline text-lg font-medium">
            Follow Us On :
          </span>
          <a href="#" className="bg-white rounded-full p-2 hover:bg-gray-200">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>

      <nav className="flex items-center justify-between py-4 h-[100px] px-1 md:px-[10%]">
        <div className="">
          <img
            src={logo}
            alt="Global Herping Expeditions"
            className="w-[180px] md:w-[205px] position left-[1px] bottom-[40px] h-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex text-center text-white font-semibold space-x-8">
            {["Home", "About Us", "Tours", "Gallery", "Team", "FAQ"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xl text-black hover:scale-90 transition-transform duration-200 inline-block"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <a
            href="#"
            className="bg-white text-black font-bold px-10 py-3 shadow transform -skew-x-12 inline-block 
             hover:bg-black hover:text-white transition-colors duration-300 relative left-10 shadow-black"
          >
            <span className="inline-block skew-x-12">CONTACT US</span>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-8 h-8 text-black" />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 text-white p-6 transition duration-300">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="mt-20 space-y-6 text-xl font-semibold">
            {[
              "Home",
              "About Us",
              "Tours",
              "Gallery",
              "Team",
              "FAQ",
              "Contact Us",
            ].map((item) => (
              <a
                href="#"
                key={item}
                className="block hover:underline"
                onClick={() => setIsMobileMenuOpen(false)} // Close on click
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
