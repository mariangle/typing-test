import {   
  setTimer, 
  setCorrectWords, 
  setWrongWords, 
  setIsPlaying, 
  setCurrentWordIndex, 
  resetGame,
  endGame,
  setIsReady, 
  setUserInput, 
} from "@/store/game-slice";

import type { RootState } from "@/store/store";
import { useSelector, useDispatch } from 'react-redux'

const useTypeText = () => {
  const dispatch = useDispatch()
  const { 
    isReady, 
    isPlaying 
  } = useSelector((state: RootState) => state.game)

  const onResetGame = () => {
    dispatch(resetGame());
  };

  const onEndGame = () => {
    dispatch(endGame());
  };

  return {
    onResetGame,
    onEndGame,
    isPlaying,
    isReady
  };
};

export default useTypeText;
