import gsap from "gsap";
import { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

function Footer() {
  useEffect(() => {
    window.document
      .getElementById("linkedin")
      .addEventListener("mouseover", () => {
        console.log("meow");
        gsap.to(".linkedin", {
          y: -10,
          duration: 0.5,
        });
      });
    window.document
      .getElementById("linkedin")
      .addEventListener("mouseleave", () => {
        console.log("meow");
        gsap.to(".linkedin", {
          y: 0,
          duration: 0.5,
        });
      });
    window.document
      .getElementById("insta")
      .addEventListener("mouseover", () => {
        console.log("meow");
        gsap.to(".insta", {
          y: -10,
          duration: 0.5,
        });
      });
    window.document
      .getElementById("insta")
      .addEventListener("mouseleave", () => {
        console.log("meow");
        gsap.to(".insta", {
          y: 0,
          duration: 0.5,
        });
      });
    window.document.getElementById("git").addEventListener("mouseover", () => {
      console.log("meow");
      gsap.to(".git", {
        y: -10,
        duration: 0.5,
      });
    });
    window.document.getElementById("git").addEventListener("mouseleave", () => {
      console.log("meow");
      gsap.to(".git", {
        y: 0,
        duration: 0.5,
      });
    });
    window.document.getElementById("leet").addEventListener("mouseover", () => {
      console.log("meow");
      gsap.to(".leet", {
        y: -10,
        duration: 0.5,
      });
    });
    window.document
      .getElementById("leet")
      .addEventListener("mouseleave", () => {
        console.log("meow");
        gsap.to(".leet", {
          y: 0,
          duration: 0.5,
        });
      });
    window.document.getElementById("hack").addEventListener("mouseover", () => {
      console.log("meow");
      gsap.to(".hack", {
        y: -10,
        duration: 0.5,
      });
    });
    window.document
      .getElementById("hack")
      .addEventListener("mouseleave", () => {
        console.log("meow");
        gsap.to(".hack", {
          y: 0,
          duration: 0.5,
        });
      });
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center bg-[#715df5] py-16 lg:py-20
      w-full -mt-20 md:-mt-12 z-10"
    >
      <div className="flex flex-row space-x-2 md:space-x-5 text-5xl lg:text-9xl mt-20">
        <div className="font-bold ">GET</div>
        <div className="font-extralight italic">IN</div>
        <div className="font-bold ">TOUCH</div>
      </div>
      <div className="mt-12 flex space-x-5">
        <a
          href="https://www.linkedin.com/in/lakshay-yadav-14138423b/"
          id="linkedin"
          className="linkedin"
          target="_blank"
        >
          <FaLinkedin size={27} className="cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/is_that__lakshay/"
          target="_blank"
          id="insta"
          className="insta"
        >
          <FaInstagram size={27} className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/Godcoder696"
          target="_blank"
          id="git"
          className="git"
        >
          <FaGithub size={27} className="cursor-pointer" />
        </a>
        <a
          href="https://leetcode.com/u/lionleo110/"
          target="_blank"
          id="leet"
          className="leet"
        >
          <SiLeetcode size={27} className="cursor-pointer" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/Lakshay_yadav123"
          target="_blank"
          id="hack"
          className="hack"
        >
          <SiHackerrank size={27} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
