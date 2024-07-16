"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SingleExperience from "../components/SingleExperience";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  var settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className=" pt-20 md:pt-32 w-[90%] flex flex-col items-center text-anim1">
      <div className="text-sm">[ EXPERIENCE ]</div>
      <div className="w-screen px-24 container">
        <Slider {...settings}>
          <SingleExperience />

          <SingleExperience />
          <SingleExperience />
        </Slider>
      </div>
    </div>
  );
}

export default Experience;
