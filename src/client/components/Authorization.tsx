import "./Authorization.module.css";
import React, { LegacyRef, Ref, useEffect, useRef, useState } from "react";

export const Authorization = () => {
  const [open, setOpen] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) {
    }
  }, [open]);
  return (
    <div
      ref={modal}
      className="flex flex-col justify-center items-center w-screen h-screen"
    >
      <form className="flex flex-col justify-center items-center w-[400px] h-[500px] border-2 rounded-xl border-blue-800 bg-white shadow-2xl">
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
        <button className="mt-7 border-2 px-14 py-2 rounded-3xl bg-green-700 text-white fontMain text-md shadow-md hover:bg-green-900  ">
          Регистрация
        </button>
      </form>
    </div>
  );
};
