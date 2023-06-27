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
    checkIfInTop10();
  };

  const checkIfInTop10 = () => {
    const topResults = results
      .sort((a, b) => b.wpm - a.wpm)
      .slice(0, 10);
    const isTop10 = topResults.some((result) => result.wpm < wpm);
    setIsInTop10(isTop10);
  };

  useEffect(() => {
    checkIfInTop10();
  }, [wpm, setIsInTop10]);

  return {
    resetGame,
    endGame,
  };
};

export default useTypeText;
