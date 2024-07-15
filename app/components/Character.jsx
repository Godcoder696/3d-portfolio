// "use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

function Character() {
  useEffect(() => {
    gsap.fromTo(
      ".myCharacter",
      {
        y: -20,
      },
      {
        y: 25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "slow(0.6)",
      }
    );
  }, []);
  return (
    <>
      <Image
        src="/Light_Ray.png"
        width={500}
        height={500}
        className="absolute -mt-64 md-mt-28 light-ray"
        alt="Character"
      />
      <Image
        src="/Character2.png"
        width={600}
        height={500}
        className="absolute character myCharacter "
        alt="Character"
      />
    </>
  );
}

export default Character;
