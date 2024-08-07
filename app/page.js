'use client'
import About from "./layouts/About";
import Experience from "./layouts/Experience";
import LandingPage from "./layouts/LandingPage";
import NavBar from "./layouts/NavBar";

import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";
import Projects from "./layouts/Projects";
import Footer from "./layouts/Footer";


gsap.registerPlugin(TextPlugin);

export default function Home() {
  return (
    <>
      <link
        rel="icon"
        href="/icon.png"
        type="image/png"
        sizes="<generated>"
      />
      <div className="mb-64 md:mb-72 lg:mb-96">
        <main className="flex min-h-4/5 w-screen flex-col items-center pb-20 bg-[#8470ff] rounded-b-[3rem] shadow-lg sticky top-0">
          <NavBar/>
          <LandingPage/>
          <About/>
          <Experience/>
          <Projects /> 
        </main>
      </div>
      <div className="h-screen w-screen flex items-end top-0 fixed -z-20">
        <Footer/>
      </div>
    </>
  );
}
