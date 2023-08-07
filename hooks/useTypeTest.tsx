import {   
  setTimer, 
  setCorrectWords, 
  setWrongWords, 
  resetGame,
  endGame,
  setIsPlaying,
  setCurrentWordIndex
} from "@/store/game-slice";

import type { RootState } from "@/store/store";
import { useSelector, useDispatch } from 'react-redux'

const useTypeText = () => {
  const dispatch = useDispatch()
  const { 
    isReady, 
    isPlaying,
    timer,
    currentWordIndex,
    correctWords,
    wrongWords
  } = useSelector((state: RootState) => state.game)

  const onResetGame = () => {
    dispatch(resetGame());
  };

  const onEndGame = () => {
    dispatch(endGame());
  };

  return {
    currentWordIndex,
    timer,
    correctWords,
    wrongWords,
    onResetGame,
    onEndGame,
    endGame,
    isPlaying,
    isReady,
    setTimer,
    setCorrectWords,
    setWrongWords,
    setIsPlaying,
    setCurrentWordIndex,
  };
};

export default useTypeText;
