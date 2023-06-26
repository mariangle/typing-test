import { useTypeTestContext } from "../context/TypeTestContext";

interface WordProps {
  words: string[],
}

const Words = ({ words }: WordProps) => {
const { currentWordIndex } = useTypeTestContext();

    return (
      <div className="flex flex-wrap max-w-[600px] w-full mx-auto border p-2 max-h-24 overflow-hidden">
      {words.map((word, index) => (
          <div key={index} className={`text-2xl p-1 ${index === currentWordIndex ? "bg-gray-300" : ""}`}>
              {word}
          </div>
      ))}
  </div>
    );
  };
  
  export default Words;