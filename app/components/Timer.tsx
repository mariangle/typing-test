import { useEffect } from "react";
import { useTypeTestContext } from "../context/TypeTestContext";

const Timer = () => {
    const { timer, setTimer, isPlaying, setIsPlaying, setIsReady, setUserInput } = useTypeTestContext();

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isPlaying && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(timerId);
            setUserInput("");
            setIsPlaying(false);
            setIsReady(false);
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

  return <div>{calculateElapsedTime()}</div>;
};

export default Timer;