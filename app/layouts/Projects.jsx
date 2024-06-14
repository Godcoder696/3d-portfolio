"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";

function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".laptop-anim",
      {
        y: -5,
      },
      {
        y: 5,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        yoyoEase: true,
      }
    );
  }, []);
  return (
    <div className="pt-32 w-[90%] flex flex-col items-center">
      <div>[ PROJECTS ]</div>
      <hr className="w-full mt-14" />
      {/* <div className="mt-14 w-full h-32 bg-[#ffffffb7] rounded-[3rem]"></div> */}
      <div className="p-5 w-full mt-4">
        <div className="w-full flex justify-around ">
          <div className="w-[50%]">
            <div className="bg-[#715df5] rounded-[3rem] py-10 px-20 flex items-center shadow-sm shadow-[#2f275e]">
              <div className="laptop-anim flex justify-center items-center">
                <div className="h-full w-full absolute"></div>
                <Image src="/mmt23.png" alt="mmt23" width={600} height={200} />
              </div>
            </div>
          </div>
          <div className="w-[40%] pt-4 h-full">
            <div className="text-4xl">MOMENTUM 2023</div>
            <div className="mt-4 font-light">
              <p>
                A College fest website used for registering for events, seeing
                events and displaying the theme for the 2023 year NOVA NEXUS.
                Which symbolizes sustainability via modern norms.
              </p>
              <br />
              Designed the theme on sustainable development using Figma Designs.
              Established express server for backend and frontend interaction.
              Deploying and resolving errors on the platform digital ocean.
              Integrated RazorPay with application for error free, smooth and
              seemless transactions. Implemented automatic mail system which
              gives the registrations data in every 24 hours to the college
              using Node-mailer.
            </div>
            <div className="mt-5 flex space-x-3 w-full justify-end">
              <button className="p-2 bg-black w-fit rounded-[2rem]">
                <FaCode size={23} />
              </button>
              <div className="p-2 bg-black w-fit rounded-[2rem]">
                <RiExternalLinkLine size={23} />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-10" />
      </div>
    </div>
  );
}

export default Projects;
