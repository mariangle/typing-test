import { useEffect } from "react";
import { useTypeTestContext } from "../context/TypeTestContext";

const useTypeText = () => {
  const {
    setCorrectWords,
    setIsPlaying,
    setWrongWords,
    setTimer,
    setCurrentWordIndex,
    setIsReady,
    setUserInput,
    setIsInTop10,
    results,
    wpm,
  } = useTypeTestContext();

  const shuffleWords = (array: string[]): string[] => {
    const shuffledArray = [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temporaryValue = shuffledArray[i];
      shuffledArray[i] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }
  
    return shuffledArray;
  };

  const resetGame = () => {
    setCorrectWords(0);
    setWrongWords(0);
    setTimer(60);
    setCurrentWordIndex(0);
    setIsReady(true);
    setIsPlaying(false);
    setUserInput("");
  };

  const endGame = async () => {
    setIsReady(false);
    setIsPlaying(false);
    setUserInput("");
    isScoreInTop10();
  };

  const isScoreInTop10 = () => {
    const topResults = results
      .sort((a, b) => b.wpm - a.wpm)
      .slice(0, 10);
    const isInTop10 = topResults.some((result) => result.wpm < wpm);
    setIsInTop10(isInTop10);
  };
  
  useEffect(() => {
    isScoreInTop10();
  }, [wpm, setIsInTop10]);

  return {
    shuffleWords,
    resetGame,
    endGame,
  };
};

export default useTypeText;
