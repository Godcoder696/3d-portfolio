"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import gsap from "gsap";

function NavBar() {
  useEffect(() => {
    gsap.fromTo(
      ".my-nav",
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 10,
        duration: 1,
        ease: "expo.inOut",
        opacity: 1,
      }
    );
  }, []);
  return (
    <div className="w-[80%] flex justify-start items-center sticky top-0 my-nav z-50">
      <Image src="/Logo.png" width={30} height={30} alt="LY" />
      {/* <IoIosMenu size={40} /> */}
    </div>
  );
}

export default NavBar;
