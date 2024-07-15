import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-[#715df5] py-16 lg:py-20
      w-full absolute -mt-20 md:-mt-12 -z-10"
    >
      <div className="flex flex-row space-x-2 md:space-x-5 text-5xl lg:text-9xl mt-20">
        <div className="font-bold ">GET</div>
        <div className="font-extralight italic">IN</div>
        <div className="font-bold ">TOUCH</div>
      </div>
      <div className="mt-8 flex space-x-3">
        <FaLinkedin size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  );
}

export default Footer;
