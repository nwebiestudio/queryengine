import TestList from "./TestList";
import TestOpen from "./TestOpen";

function Test() {
  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center">
      <TestList />
      <TestOpen />
    </div>
  );
}

export default Test;
