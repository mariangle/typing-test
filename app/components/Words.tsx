import { useEffect, useRef } from "react";
import { useTypeTestContext } from "../context/TypeTestContext";

const Words = ({ words }: {words: string[]}) => {
  const { currentWordIndex } = useTypeTestContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    const currentWordElement = containerElement?.children[currentWordIndex] as HTMLElement;
  
    if (containerElement && currentWordElement) {
      const containerRect = containerElement.getBoundingClientRect();
      const currentWordRect = currentWordElement.getBoundingClientRect();
      const threshold = currentWordRect.height;
  
      if (currentWordRect.bottom >= containerRect.bottom - threshold) {
        containerElement.scrollTop += currentWordRect.bottom - containerRect.bottom + threshold;
      }
    }
  }, [currentWordIndex]);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap max-w-[800px] w-full mx-auto border p-2 max-h-24 overflow-hidden"
    >
      {words.map((word, index) => (
        <div
          key={index}
          className={`text-2xl p-1 dark:text-red-700 ${
            index === currentWordIndex ? "bg-gray-300" : ""
          }`}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default Words;
