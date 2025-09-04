import React from "react";
import { Mail, Phone, Facebook } from "lucide-react";
import footerLogo from "../assets/images/footer-logo.webp";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#0b0b0b] text-white text-center px-4 py-12 sm:px-10 md:px-8 lg:px-16">
        <div className="flex justify-center mb-6">
          <img
            src={footerLogo}
            alt="Global Herping Expeditions Logo"
            className="h-32 md:h-40 w-auto"
          />
        </div>

        <p className="max-w-3xl mx-auto text-sm md:text-lg mb-8 leading-relaxed px-2 md:px-0">
          Join the Ultimate Wildlife Adventure — Explore Hidden Habitats,
          Encounter Rare Creatures, and Rediscover Your Connection to Nature.
        </p>

        <nav className="border bg-[#171717] border-gray-500 max-w-6xl mx-auto mb-12 rounded">
          <ul className="flex flex-wrap justify-center gap-6 py-4 font-semibold text-base md:text-lg">
            {["Home", "About Us", "Tours", "Gallery", "Team", "FAQ"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:scale-90 transition-transform duration-200 inline-block"
                    aria-label={item}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Contact Info Section */}
        <div className="flex flex-wrap justify-start md:justify-center items-center gap-8 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 min-w-[180px] sm:min-w-[220px]">
            <div className="bg-white text-black p-3 rounded-full shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm">Call or Text</p>
              <p className="font-bold text-lg">1-916-468-8381</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 min-w-[220px] sm:min-w-[260px]">
            <div className="bg-white text-black p-3 rounded-full shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left break-words">
              <p className="text-sm">Email Us At</p>
              <p className="font-bold md:text-lg sm:text-xl">
                globalherpingexpeditions@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center min-w-[64px]">
            <a
              href="#"
              className="bg-white text-black p-3 rounded-full inline-flex hover:bg-gray-200"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-black text-center border-t border-gray-700 py-4 mt-auto">
        <p className="text-white text-base md:text-xl font-bold max-w-4xl mx-auto px-4">
          © 2025 All Rights Reserved |{" "}
          <span className="font-bold">Global Herping Expeditions LLC</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
