"use client";
import Link from "next/link";
import React from "react";
import { signIn, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-900 flex justify-between px-20 py-3 text-white items-center">
      <Link href={"/"}>
        <h1>NextGoogle</h1>
      </Link>
      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          <Link href={"/dashboard"}>DashBoard</Link>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-sky-400 px-3 py2 rounded"
        >
          Login
        </button>
      )}
    </nav>
  );
}

export default Navbar;
