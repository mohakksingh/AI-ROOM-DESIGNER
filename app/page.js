"use client"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";

export default function Home() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Process />
    </div>
  );
}
