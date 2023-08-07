"use client"

import { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc"
import { WORDS } from "@/lib/constants";
import { shuffleWords } from "@/actions/shuffle-words";
import { useSession } from "next-auth/react";

import useTypeText from "@/hooks/useTypeTest";
import Button from "@/components/Button";
import Words from "@/components/Words";
import Timer from "@/components/Timer";
import Result from "@/components/Result";
import Input from "@/components/Input";

const TypeTest = () => {
  const session = useSession();
  const [ userInput, setUserInput] = useState<string>("");
  const { onResetGame, isPlaying, isReady } = useTypeText();
  const [ words, setWords ] = useState<string[]>([]);
  
  useEffect(() => {
    setWords(shuffleWords(WORDS));
    console.log(session.status)
  }, [session]);

  const handleResetGame = () => {
    setWords(shuffleWords(WORDS));
    setUserInput("");
    onResetGame();
  }

  return (
    <div>
      <Words words={words}/>
      <div className="mt-4 bg-slate-500/10 p-2 rounded-2xl border dark:border-slate-700">
        <div className="flex_gap flex-col sm:flex-row max-w-md w-full mx-auto">
          <Input words={words} userInput={userInput} setUserInput={setUserInput}/>
          <div className="flex_gap">
            <Timer />
            <Button 
              onClick={handleResetGame}
              className="primary_bg p-3 rounded-lg"
            >
              <VscDebugRestart size={28}/>
            </Button>
          </div>
        </div>
      </div>
      {!isPlaying && !isReady && <Result />}
    </div>
  );
};

export default TypeTest;
