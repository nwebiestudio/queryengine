import React, { useState } from "react";
import { useGetTestQuery } from "./redux";
import { ITest } from "./models/testApi";
import Authorization from "./components/Authorization";
import Test from "./components/TestComponent/Test";

function App() {
  const { data, isLoading } = useGetTestQuery("");
  const [get, setGet] = useState<ITest>();
  console.log(data);

  return (
    <div className="flex items-center justify-center">
      {/* <button
        className="cursor-pointer border-2 border-blue-500 bg-black text-white hover:text-black hover:bg-white"
        onClick={() => {
          if (!isLoading) {
            setGet(data);
          }
        }}
      >
        Получить данные!
      </button>
      <div>{get?.message}</div> */}
      <Test />
    </div>
  );
}

export default App;
