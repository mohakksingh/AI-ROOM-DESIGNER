import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative md:h-[100vh] w-full max-md:flex max-md:flex-col">
      <Image src="/bgredesign.jpeg" alt="bg" fill className="object-cover" />
      <div className="absolute top-40 left-30 ">
        <h1 className="text-4xl font-bold pr-140">
          Out of Ideas? Use our AI Room Redesign Tool to create stunning
          interiors effortlessly.
        </h1>
      </div>
    </div>
  );
}

export default Hero;
