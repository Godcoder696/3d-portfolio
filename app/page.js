import About from "./layouts/About";
import Experience from "./layouts/Experience";
import LandingPage from "./layouts/LandingPage";
import NavBar from "./layouts/NavBar";

import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

export default function Home() {
  return (
    <main className="flex min-h-[4/5] flex-col items-center p-5 bg-[#8470ff]">
      <NavBar/>
      <LandingPage/>
      <About/>
      <Experience/>
    </main>
  );
}
