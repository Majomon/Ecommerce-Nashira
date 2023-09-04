"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useDarkMode } from "@/hooks/useDarkMode";

function Navbar() {
  const { data: session } = useSession();
  const { handlerTheme } = useDarkMode();

  return (
    <nav className="bg-red-600	dark:bg-slate-900 flex justify-between px-20 py-3 text-white items-center">
      <Link href={"/"}>
        <h1>NextGoogle</h1>
      </Link>
      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          {session?.user ? (
            <h3>Bienvenido </h3>
          ) : (
            <Link href={"/dashboard"}>DashBoard</Link>
          )}
          <p>
            {session.user.name} {/* {session.user.email} */}
          </p>
          <Image
            width={30}
            height={30}
            src={session.user.image}
            alt={session.user.name}
            className="rounded-full cursor-pointer"
          />
          <button
            onClick={async () => await signOut({ callbackUrl: "/" })}
            className=" bg-red-500 px-3 py-1 rounded"
          >
            LogOut
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-sky-400 px-3 py-2 rounded"
        >
          Sing in
        </button>
      )}
      <button onClick={handlerTheme}>Modo nocturno</button>
    </nav>
  );
}

export default Navbar;
