
import React from 'react';
import { useGetTestQuery } from './redux';


function App() {
  const { data, isLoading } = useGetTestQuery("");
  const [get, setGet] = useState<ITest>();
  console.log(data);

  return (
    <div className="flex items-center flex-col justify-center w-screen h-screen">
      <button
        className="cursor-pointer border-2 border-slate-500 p-3 rounded-md bg-black text-white hover:text-black hover:bg-white transition-all duration-200"
        onClick={() => {
          if (!isLoading) {
            setGet(data);
          }
        }}
      >
        Получить данные!
      </button>
      <div className="mt-10 p-3 bg-neutral-600 rounded text-white min-w-[300px] min-h-[100px]">
        {get?.message}
      </div>
    </div>
  );
}

export default App;
