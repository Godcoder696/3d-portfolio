"use client";

import Image from "next/image";
import Character from "../components/Character";
import LandingPageWrapper from "../components/LandingPageWrapper";

function LandingPage() {
  return (
    <div className="flex justify-center items-center h-screen -mt-14">
      <LandingPageWrapper />
    </div>
  );
}

export default LandingPage;
