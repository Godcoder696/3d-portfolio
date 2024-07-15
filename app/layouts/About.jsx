import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(SplitText);

function About() {
  return (
    <div className="p-6 sm:p-8 md:p-10 w-[90%] bg-[#ffffffb7] rounded-[1rem] md:rounded-[3rem] flex flex-col items-center ">
      <div className="text-black text-xs md:text-sm">[ ABOUT ME ]</div>
      <div className="text-black mt-12 text-xl sm:text-3xl text-center w-5/6 sm:w-3/6 lg:w-2/6">
        HI! I AM LAKSHAY, LOOKING FOR COOL NEW JOB OPPORTUNITIES AS A FULL STACK
        WEB DEVELOPER
      </div>
      <div className="text-black mt-14 text-2xl sm:text-5xl text-center w-5/6 sm:w-3/6 lg:w-2/6">
        I CAN HELP YOU STAND OUT TO MAKE THE WEBSITE OF YOUR DREAMS
      </div>
      <div className="text-black mt-14 text-sm sm:text-xl text-center w-5/6 sm:w-2/5 lg:w-1/5">
        A SUCCESSFUL WEBSITE DOES THREE THINGS IT ATTRACTS RIGHT VISITORS GUIDES
        THEM TO MAIN SERVICE/PRODUCT COLLECT CONTACT DETAILS FOR FUTURE ONGOING
        RELATION
      </div>
    </div>
  );
}

export default About;
