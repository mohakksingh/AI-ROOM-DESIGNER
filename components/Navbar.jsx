import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  const { isSignedIn, user } = useUser();
  return (
    <nav className="p-5 bg-transparent flex items-center justify-between absolute w-full z-10">
      <div className="flex gap-2 ">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <h1>AI ROOM REDESIGN</h1>
      </div>
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard">Design New Room</Link>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="flex gap-2">
            <Link href="/sign-in">
              <Button>Sign in</Button>
            </Link>
            <Link href="/sign-up">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
