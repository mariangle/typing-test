import { useDispatch } from 'react-redux';
import useTypeText from "@/hooks/useTypeTest";

interface InputProps {
  words: string[];
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ words, userInput, setUserInput }) => {
  const { 
    isPlaying, 
    currentWordIndex, 
    isReady, 
    correctWords,
    wrongWords,
    setCorrectWords,
    setWrongWords,
    setIsPlaying,
    setCurrentWordIndex,
   } = useTypeText()
  const dispatch = useDispatch();

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isPlaying && isReady) {
      dispatch(setIsPlaying(true));
    }
    setUserInput(event.target.value);
  };
    
  const handleSpacebar = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Space" && isReady) {
      const trimmedUserInput = userInput.trim();
      const trimmedWord = words[currentWordIndex].trim();
  
      if (trimmedUserInput !== "") {
        if (trimmedWord === trimmedUserInput) {
          dispatch(setCorrectWords(correctWords + 1));
        } else {
          dispatch(setWrongWords(wrongWords + 1));
        }
        dispatch(setCurrentWordIndex(currentWordIndex + 1));
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
        className={`input_word ${!isReady ? "cursor-not-allowed" : ""}`}
    />
  )
}

export default Input