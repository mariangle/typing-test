import { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { setTimer, endGame } from "@/store/game-slice";
import type { RootState } from "@/store/store";

const Timer = () => {
  const { 
      timer, 
      isPlaying,
      isReady
   } = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch();

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isPlaying && timer > 0) {
      timerId = setInterval(() => {
        dispatch(setTimer(timer - 1));
      }, 1000);
    } else if (timer === 0) {
      dispatch(endGame());
    }

    return () => {
      clearInterval(timerId);
    };
  }, [dispatch, isPlaying, timer]);


  const calculateElapsedTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
  <div 
    className={`border p-3 rounded-lg text-lg 
    ${isPlaying ? "bg-green-800 text-green-500 border-green-600" : !isPlaying && !isReady ? "bg-red-800 text-red-500 border-red-600" : "secondary_bg"}`}
  >
    {calculateElapsedTime()}
  </div>
    )
};

export default Timer;