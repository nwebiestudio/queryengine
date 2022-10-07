import React from 'react'

export default function Authorization() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <form className='flex flex-col justify-center items-center w-[500px] h-[500px] border-2 rounded-xl border-cyan-600'>
            <input type="login" />
            <input type="password" />
            <a href="/">Войти</a>
        </form>
    </div>
  )
}
