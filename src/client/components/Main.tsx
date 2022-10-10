import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Image src={logo} width={"300px"} height={"300px"} />
      <Link href={"/auth"}>
        <a className="border-2  px-5 py-2 rounded-3xl bg-blue-500 text-white fontMain text-md shadow-md hover:bg-blue-800 hover:animate-pulse ">
          Войти
        </a>
      </Link>
    </div>
  );
}
