import React from 'react'

export default function Registration() {
  return (<div className="absolute hover:cursor-pointer  closeHandler w-screen h-screen right-0 left-0 top-0 bottom-0 z-10 bg-black bg-opacity-20">
    
  <div
    
    className="flex flex-col  closeHandler justify-center items-center z-30 w-screen h-screen transition-all duration-300"
  >
    <div>
    <form className="flex flex-col z-50 justify-center items-center w-[400px] h-[500px] bo border-2 rounded-xl cursor-default border-blue-800 bg-white shadow-2xl">
      
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
      <input
        type="password"
        placeholder="Пароль"
        className="border-2 mt-5 py-2 pl-3 rounded-2xl h-8 border-teal-600 w-[230px] outline-teal-800 hover:border-teal-800 "
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border-2 mt-5 py-2 pl-3 rounded-2xl h-8 border-teal-600 w-[230px] outline-teal-800 hover:border-teal-800 "
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border-2 mt-5 py-2 pl-3 rounded-2xl h-8 border-teal-600 w-[230px] outline-teal-800 hover:border-teal-800 "
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border-2 mt-5 py-2 pl-3 rounded-2xl h-8 border-teal-600 w-[230px] outline-teal-800 hover:border-teal-800 "
      />
    
    </form>
    </div>
  </div>
  </div>
  )
}
