import { useEffect, useRef } from "react";
import { useTypeTestContext } from "../context/TypeTestContext";

interface WordProps {
  words: string[],
}

const Words = ({ words }: WordProps) => {
  const { currentWordIndex } = useTypeTestContext();
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = wordsRef.current;
    const currentWordElement = containerElement?.children[currentWordIndex] as HTMLElement;
  
    if (containerElement && currentWordElement) {
      const { bottom: containerBottom } = containerElement.getBoundingClientRect();
      const { bottom: wordBottom, height: wordHeight } = currentWordElement.getBoundingClientRect();
      const threshold = wordHeight;
  
      const scrollOffset = Math.max(wordBottom - containerBottom + threshold, 0);
      containerElement.scrollTop += scrollOffset;
  
      if (currentWordIndex === 0) {
        containerElement.scrollTop = 0;
      }
    }
  }, [currentWordIndex]);
  

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700 w-full shadow-xl">
      <div className="pt-2 bg-slate-800">
        <div className="flex text-slate-400 text-xs leading-6">
          <div className="flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">typetest.config.js</div>
          <div className="flex-auto flex items-center bg-slate-700/50 border border-slate-500/30 rounded-tl" />
        </div>
        <div 
          ref={wordsRef}
          className="flex flex-wrap mx-auto p-2 max-h-24 overflow-hidden 
          shadow-lg border-slate-700">
          {words.map((word, index) => (
            <div
              key={index}
              className={`text-2xl py-1.5 px-2 text-desc ${
                index === currentWordIndex ? " text-sky-500 bg-sky-700 bg-sky-700/20 rounded-lg" : ""
              }`}>
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Words;
