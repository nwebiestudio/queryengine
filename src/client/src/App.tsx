import React from 'react';
import { useGetTestQuery } from './redux';

function App() {
  const {data, isLoading} = useGetTestQuery()
  console.log(data)
  return (
    <div className="flex items-center justify-center">
      <button className='cursor-pointer border-2 border-blue-500 bg-black text-white hover:text-black hover:bg-white'>Получить данные!</button>
      <div>
       
      </div>
    </div>
  );
}

export default App;
