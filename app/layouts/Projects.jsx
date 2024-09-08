"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { projects } from "../data/data";

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
  const img =
    "https://res.cloudinary.com/dsnfwiuid/image/upload/v1721064405/mmt23_ohpr7z.png";

  return (
    <div className="pt-20 md:pt-32 w-[90%] flex flex-col items-center">
      <div className="text-sm">[ PROJECTS ]</div>
      <div className="p-2 md:p-5 w-full mt-4 ">
        {projects.map((item, id) => {
          return (
            <React.Fragment key={id}>
              <div className="w-full flex flex-col md:flex-row justify-between project-anim mt-10">
                <div className="w-[100%] md:w-[50%]">
                  <div className="bg-[#715df5] rounded-[0.5rem] md:rounded-[3rem] p-3 md:p-6 lg:py-10 lg:px-20 flex items-center shadow-sm shadow-[#2f275e]">
                    <div className="laptop-anim flex justify-center items-center">
                      <div className="h-full w-full absolute"></div>
                      <Image
                        src={item.url}
                        alt="mmt23"
                        width={600}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-[40%] pt-7 md:pt-4 md:h-full flex justify-between md:flex-col">
                  <div className="text-2xl md:text-4xl">{item.title}</div>
                  <div className="mt-4 font-light hidden lg:block">
                    <p>
                      <span className="hidden xl:block">{item.desktop}</span>
                      <div className="xl:hidden block">{item.mobile}</div>
                    </p>
                    <br />
                  </div>
                  <div className="md:mt-5 flex space-x-3 md:w-full">
                    {item.github && (
                      <a href={item.github} target="_blank">
                        <button className="p-2 bg-[#000000] hover:bg-[#343434] w-fit rounded-[2rem]">
                          <FaCode size={18} />
                        </button>
                      </a>
                    )}
                    {item.website && (
                      <a href={item.website} target="_blank">
                        <div className="p-2 bg-[#000000] hover:bg-[#343434] w-fit rounded-[2rem]">
                          <RiExternalLinkLine size={18} />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <hr className="w-full mt-6 md:mt-10" />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
