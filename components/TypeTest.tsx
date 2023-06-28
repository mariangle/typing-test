"use client"

import { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc"
import { useTypeTestContext } from "../context/TypeTestContext";
import { WORDS } from "@/constant";

import useTypeText from "../hooks/useTypeTest";

import Words from "./Words";
import Timer from "./Timer";
import Result from "./Result";
import Input from "./Input";
import axios from "axios";

const TypeTest = () => {
  const { shuffleWords, resetGame } = useTypeText();
  const [ words, setWords ] = useState<string[]>([]);
  const { isPlaying, isReady, setResults} = useTypeTestContext();
  
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const { data: results } = await axios.get("/api/test-results");
        setResults(results)
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };
    
    setWords(shuffleWords(WORDS));
    fetchResults();
  }, []);

  const handleResetGame = () => {
    setWords(shuffleWords(WORDS));
    resetGame();
  }

  return (
    <div>
      <Words words={words}/>
      <div className="mt-4 bg-slate-500/10 p-2 rounded-2xl border dark:border-slate-700">
        <div className="flex_gap flex-col sm:flex-row max-w-md w-full mx-auto">
          <Input words={words} />
          <div className="flex_gap">
            <Timer />
            <button 
              onClick={handleResetGame}
              className="primary_bg p-3 rounded-lg"
            >
              <VscDebugRestart size={28}/>
            </button>
          </div>
        </div>
      </div>
      {!isPlaying && !isReady && <Result />}
    </div>
  );
};

export default TypeTest;
