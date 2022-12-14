import "./Authorization.module.css";
import React, {useState} from "react";
import Router from 'next/router';
import Link from "next/link";
import { useAnimateModal } from "../hooks/animateModal";

export const Authorization = () => {
  const [open, setOpen] = useState<boolean>(false)
  const modal = useAnimateModal('-translate-y-full', open)
  return (
    <div className="absolute hover:cursor-pointer  closeHandler w-screen h-screen right-0 left-0 top-0 bottom-0 z-10 bg-black bg-opacity-20"
    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
      const element = event.target as Element
      console.log(element.classList);
      
      if (element.classList.contains('closeHandler')){
        setOpen(true)
      const timer = setTimeout(()=> {
        Router.back()
        }, 300)
        return () => {clearTimeout(timer)}
      }
      
    }}>
      
    <div
      ref={modal}
      className="flex flex-col  closeHandler justify-center items-center z-30 w-screen h-screen -translate-y-full transition-all duration-300"
    >
      <div>
      <form className="flex flex-col z-50 justify-center items-center w-[400px] h-[500px] bo border-2 rounded-xl cursor-default border-blue-800 bg-white shadow-2xl">
        <h1 className="text-3xl mb-[70px]">Вход в систему:</h1>
        <input
          type="login"
          placeholder="Логин"
          className="border-2 pl-3 py-2 rounded-2xl h-8 border-teal-600 w-[230px] outline-teal-800 hover:border-teal-800 "
        />
        <input
          type="password"
          placeholder="Пароль"
          className="border-2 mt-5 py-2 pl-3 rounded-2xl h-8 border-teal-600 w-[230px] outline-teal-800 hover:border-teal-800 "
        />
        <div className=" flex justify-around items-center mt-5 ">
          <button
            type="submit"
            className="border-2 px-5 py-2 rounded-3xl bg-blue-500 text-white fontMain text-md shadow-md hover:bg-blue-800 hover:animate-pulse "
          >
            Войти
          </button>
          <a href="/" className="pl-5 text-blue-800 hover:text-blue-900">
            Забыли пароль?
          </a>
        </div>
        <Link href={"/register"}>
        <a className="mt-7 border-2 px-14 py-2 rounded-3xl bg-green-700 text-white fontMain text-md shadow-md hover:bg-green-900 "
        >
          Регистрация
        </a>
        </Link>
      </form>
      </div>
    </div>
    </div>
  );
  
};
