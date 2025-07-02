"use client"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      {/* <Process /> */}
      <Pricing/>
      <Faq/>
      <Footer/>
    </div>
  );
}
