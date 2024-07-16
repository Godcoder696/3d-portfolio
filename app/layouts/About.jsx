"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(TextPlugin);
function About() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".auto-complete",
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(".auto-complete0", {
      duration: 2,
      text: "[ ABOUT ME ]",
      ease: "power1.inOut",
    });
    tl.to(".auto-complete", {
      duration: 2,
      text: "HI! I AM LAKSHAY, LOOKING FOR COOL NEW JOB OPPORTUNITIES AS A FULL STACK WEB DEVELOPER",
      ease: "power1.inOut",
    });
    tl.to(".auto-complete1", {
      duration: 2,
      text: "I CAN HELP YOU STAND OUT TO MAKE THE WEBSITE OF YOUR DREAMS",
      ease: "power1.inOut",
    });
    tl.to(".auto-complete2", {
      duration: 2,
      text: "A SUCCESSFUL WEBSITE DOES THREE THINGS IT ATTRACTS RIGHT VISITORS GUIDES THEM TO MAIN SERVICE/PRODUCT COLLECT CONTACT DETAILS FOR FUTURE ONGOING RELATION",
      ease: "power1.inOut",
    });
    tl.play();
  }, []);
  return (
    <div className="p-6 sm:p-8 md:p-10 w-[90%] bg-[#ffffffb7] rounded-[1rem] md:rounded-[3rem] flex flex-col items-center ">
      <div className="text-black text-xs md:text-sm auto-complete0"></div>
      <div className="text-black mt-12 text-xl sm:text-3xl text-center w-5/6 sm:w-3/6 lg:w-2/6 auto-complete"></div>
      <div className="text-black mt-14 text-2xl sm:text-5xl text-center w-5/6 sm:w-3/6 lg:w-2/6 auto-complete1"></div>
      <div className="text-black mt-14 text-sm sm:text-xl text-center w-5/6 sm:w-2/5 lg:w-1/5 auto-complete2"></div>
    </div>
  );
}

export default About;
