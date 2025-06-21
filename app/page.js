"use client"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";

export default function Home() {


  return (
    <div>
      <Navbar />
    </div>
  );
}
