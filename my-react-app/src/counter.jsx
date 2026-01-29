import { useState } from "react";
const Counter = () => {
  let [num, setNum] = useState(0);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-7xl">Counter</div>
      <div className="h-screen flex justify-center items-center">
        <button
          onClick={() => setNum(num - 1)}
          className="text-3xl text-white rounded-2xl bg-red-500 h-20 w-20 p-4 mx-1 hover:bg-red-400"
        >
          -
        </button>
        <div className="text-5xl">{num}</div>
        <button
          onClick={() => setNum(num + 1)}
          className="text-3xl rounded-2xl text-white bg-emerald-500 h-20 w-20 p-4 mx-1  hover:bg-emerald-400"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
