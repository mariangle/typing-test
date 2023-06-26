import { useTypeTestContext } from "../context/TypeTestContext";

interface WordInputProps {
    words: string[],
}

const WordInput = ({
    words
} : WordInputProps) => {
    const { setCorrectWords, setWrongWords, isPlaying, setIsPlaying, currentWordIndex, setCurrentWordIndex, isReady, userInput, setUserInput } = useTypeTestContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isPlaying && isReady) {
          setIsPlaying(true);
        }
        setUserInput(event.target.value);
      };
    
      const handleSpacebar = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Space" && isReady) {
          const trimmedUserInput = userInput.trim();
          const trimmedWord = words[currentWordIndex].trim();
      
          if (trimmedUserInput !== "") {
            if (trimmedWord === trimmedUserInput) {
              setCorrectWords((prevState) => prevState + 1);
            } else {
              setWrongWords((prevState) => prevState + 1);
            }
      
            setCurrentWordIndex((prevState) => prevState + 1);
          }
          setUserInput("");
        }
      };

  return (
    <input 
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleSpacebar}
        disabled={!isReady}
    />
  )
}

export default WordInput