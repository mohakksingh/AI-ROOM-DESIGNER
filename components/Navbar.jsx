import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="p-5 bg-primary flex items-center justify-between">
      <div className="flex gap-2 ">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <h1>AI ROOM REDESIGN</h1>
      </div>
      <div>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard">Design New Room</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
