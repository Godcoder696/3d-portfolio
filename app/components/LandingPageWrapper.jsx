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
      <div className="h-screen flex justify-center items-center">
        <div className="h-52 w-full absolute flex flex-col justify-between items-center">
          <div className="w-full flex justify-center">
            <h1 className="absolute text-anim font-behind text-9xl font-semibold blur-sm poppins-medium z-0">
              LAKSHAY YADAV
            </h1>
            <h1 className="absolute text-anim font-between text-9xl font-semibold poppins-medium z-1">
              LAKSHAY YADAV
            </h1>
            <h1 className="absolute text-anim font-above text-9xl font-semibold text-transparent head-stroke poppins-medium">
              LAKSHAY YADAV
            </h1>
          </div>
          <Marquee
            loop={0}
            speed={69}
            autoFill={true}
            className="overflow-hidden"
          >
            <h1 className="text-7xl font-extrabold text-[#8470ff] head-stroke poppins-medium bg-white py-2 text-anim ">
              CREATIVE ● DEVELOPER ● DESIGNER ●
            </h1>
          </Marquee>
        </div>
        <Character />
      </div>
    </>
  );
}

export default LandingPageWrapper;
