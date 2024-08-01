import React from "react";
import { FlipWords } from "../../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["designs", "frontend", "backend",];

  return (
    <>
      <div className="h-[10rem] flex justify-center items-center px-4">
        <div className="">
         </div>
        <h1 className="relative z-10  text-5xl md:text-7xl md:leading-loose  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-3 ">
        Hi, I’m Rishika 
      </h1>

      </div>

      <div className="h-[2rem] mb-10 flex justify-center items-center px-4">
        <div className="text-4xl sm:text-5xl mx-1.5 sm:mx-auto font-normal text-white dark:text-white">
         I make <FlipWords words={words} /> ✨<br /> 
        </div>
      </div>
      
      <div className="h-[2rem] mb-10 flex justify-center items-center px-4">
        <div className="text-4xl sm:text-5xl mx-1.5 sm:mx-auto font-normal text-white dark:text-white">
         
        </div>
      </div>
    </>
  );
}
