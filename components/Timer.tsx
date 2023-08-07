import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import useTypeText from "@/hooks/useTypeTest";

const Timer = () => {
  const { 
      timer, 
      isPlaying,
      setTimer,
      endGame
   } = useTypeText();
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
    ${isPlaying ? "bg-yellow-600 text-yellow-100 border-none" : "secondary_bg"}`}
  >
    {calculateElapsedTime()}
  </div>
    )
};

export default Timer;