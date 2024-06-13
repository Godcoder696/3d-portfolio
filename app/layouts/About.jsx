import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(SplitText);

function About() {
  return (
    <div className="p-10 w-[90%] bg-[#ffffffb7] rounded-[3rem] flex flex-col items-center ">
      <div className="text-black ">[ ABOUT ME ]</div>
      <div className="text-black mt-12 text-3xl text-center w-2/6">
        HI! I AM LAKSHAY, LOOKING FOR COOL NEW JOB OPPORTUNITIES AS A FULL STACK
        WEB DEVELOPER
      </div>
      <div className="text-black mt-14 text-5xl text-center w-2/6">
        I CAN HELP YOU STAND OUT TO MAKE THE WEBSITE OF YOUR DREAMS
      </div>
      <div className="text-black mt-14 text-xl text-center w-1/5">
        A SUCCESSFUL WEBSITE DOES THREE THINGS IT ATTRACTS RIGHT VISITORS GUIDES
        THEM TO MAIN SERVICE/PRODUCT COLLECT CONTACT DETAILS FOR FUTURE ONGOING
        RELATION
      </div>
    </div>
  );
}

export default About;
