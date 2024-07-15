import Marquee from "react-fast-marquee";
import Character from "./Character";
import gsap from "gsap";
import { useEffect } from "react";

function LandingPageWrapper() {
  useEffect(() => {
    gsap.fromTo(
      ".text-anim",
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.inOut",
      }
    );
  }, []);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-24 sm:h-32 md:h-40 lg:h-44 xl:h-52 w-screen absolute flex flex-col justify-between items-center">
          <div className="w-full flex justify-center">
            <h1 className="absolute text-anim font-behind text-4xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold blur-sm poppins-medium z-0">
              LAKSHAY YADAV
            </h1>
            <h1 className="absolute text-anim font-between text-4xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold poppins-medium z-1">
              LAKSHAY YADAV
            </h1>
            <h1 className="absolute text-anim font-above text-4xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-transparent head-stroke poppins-medium">
              LAKSHAY YADAV
            </h1>
          </div>
          <Marquee
            loop={0}
            speed={69}
            autoFill={true}
            className="overflow-hidden h-14 md:h-24"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-[#8470ff] head-stroke poppins-medium bg-white py-1 md:py-2 text-anim ">
              CREATIVE ● FRONTEND ● BACKEND ● DEVELOPER ●
            </h1>
          </Marquee>
        </div>
        <Character />
      </div>
    </>
  );
}

export default LandingPageWrapper;
