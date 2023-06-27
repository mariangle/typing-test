import { useTypeTestContext } from "../context/TypeTestContext";

const useTypeText = () => {
  const { setCorrectWords, setIsPlaying, setWrongWords, setTimer, setCurrentWordIndex, setIsReady, setUserInput } = useTypeTestContext();

      const resetGame = () => {
        setCorrectWords(0);
        setWrongWords(0);
        setTimer(60);
        setCurrentWordIndex(0);
        setIsReady(true);
        setIsPlaying(false);

      }

      const endGame = () => {
        setIsReady(false);
        setIsPlaying(false);
        setUserInput("");
      }

    return {
        resetGame,
        endGame,
    }
}

export default useTypeText