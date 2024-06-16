"use client";

import { useState } from "react";

interface CartCounterProps {
  value?: number;
}

const CartCounter = ({ value = 10 }: CartCounterProps) => {
  const [counter, setCounter] = useState(value);

  const handlerCounter = (value: number) => {
    setCounter(counter + value);
  };
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => handlerCounter(1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => handlerCounter(-1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
