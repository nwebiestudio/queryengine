import * as React from "react";
import TestSelect from "./TestSelect";

function Test() {
  return (
    <div className="w-[700px] min-h-[600px] border-2 rounded-xl mt-10 border-sky-700">
      <p className="overflow-hidden p-10 text-justify fontMain font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam est,
        quia, molestiae optio eaque laboriosam labore molestias exercitationem
        voluptatum animi eum accusamus veniam enim a voluptas. Esse maiores
        praesentium dolore. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Consequatur repellat deleniti necessitatibus fuga in, esse unde
        sequi numquam facilis, pariatur enim illum placeat soluta voluptas iusto
        harum perferendis. Deserunt, modi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Necessitatibus blanditiis laudantium,
        explicabo animi eos corrupti ratione cupiditate ea expedita beatae
        saepe, aliquid nisi aperiam tempore error sequi sint exercitationem?
        Expedita.
      </p>
      <TestSelect />
      <TestSelect />
      <TestSelect />
      <footer className="flex my-8 justify-end mr-10">
        <button className="border-2 px-5 mr-1 py-2 rounded-3xl bg-blue-500 text-white fontMain text-md shadow-md hover:bg-blue-800 ">
          Назад
        </button>
        <button className="border-2 px-5 py-2 rounded-3xl bg-emerald-600 text-white fontMain text-md shadow-md hover:bg-emerald-800 ">
          Ответить
        </button>
      </footer>
    </div>
  );
}

export default Test;
