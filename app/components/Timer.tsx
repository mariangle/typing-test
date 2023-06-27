import { useEffect, useState } from "react";
import useTypeText from "../hooks/useTypeTest";
import { useTypeTestContext } from "../context/TypeTestContext";

const Timer = () => {
    const { 
      timer, 
      setTimer, 
      isPlaying} 
    = useTypeTestContext();
    const { endGame } = useTypeText();

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isPlaying && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            endGame();
            clearInterval(timerId);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isPlaying]);

  const calculateElapsedTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div 
      className="border p-3 rounded-lg secondary_bg text-lg">
      {calculateElapsedTime()}
    </div>
    )
};

export default Timer;