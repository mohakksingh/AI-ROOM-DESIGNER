import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="mt-20 flex items-center justify-center flex-col gap-20">
      <h2 className="text-bold text-4xl">What Do We Do?</h2>
      <div className="flex gap-5"> 
      <Image src="/feature1.jpg" alt="mistake" width={300} height={10} className="rounded-lg"/>
        <Image src="/right-arrow.svg" alt="right-arrow" height={200} width={200}/>
      <Image src="/aigenerated.png" alt="mistake" width={300} height={10} className="rounded-lg"/>
      </div>
      <span className="text-3xl px-40 text-center">
        Now You can create stunning interiors effortlessly with our AI Room Redesign Tool.
      </span>
    </div>
  );
}

export default Features;
