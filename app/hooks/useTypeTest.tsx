import { useTypeTestContext } from "../context/TypeTestContext";

const useTypeText = () => {
  const { setCorrectWords, setIsPlaying, setWrongWords, setTimer, setCurrentWordIndex, setIsReady, setUserInput } = useTypeTestContext();
    const shuffleArray =(array: string[]) => {
        const newArray = [...array]; 

        for (let i = newArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]; 
        }

        return newArray;
      }

      const resetGame = () => {
        setCorrectWords(0);
        setIsPlaying(false);
        setWrongWords(0);
        setTimer(10);
        setCurrentWordIndex(0);
        setIsReady(true);
        setUserInput("");
      }

    return {
        shuffleArray,
        resetGame,
    }
}

export default useTypeText