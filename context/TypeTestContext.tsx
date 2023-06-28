"use client"

import { createContext, useContext, useState } from "react";
import { TestResult } from "@prisma/client";
import { TypeTestContextProps, initialState } from "@/types";

export const TypeTestContext = createContext<TypeTestContextProps>(initialState);

export const TypeTestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timer, setTimer] = useState<number>(60);
  const [correctWords, setCorrectWords] = useState<number>(0);
  const [wrongWords, setWrongWords] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isReady, setIsReady] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState<TestResult[]>([]);
  const [isInTop10, setIsInTop10] = useState<boolean>(false);

  const duration = 60;
  const accuracy = (correctWords / (wrongWords + correctWords)) * 100;
  const timeTakenMinutes = duration / 60; 
  const wpm = (correctWords / timeTakenMinutes);

  return (
    <TypeTestContext.Provider
      value={{
        timer,
        correctWords,
        wrongWords,
        setIsPlaying,
        isPlaying,
        setTimer,
        setCorrectWords,
        setWrongWords,
        wpm,
        accuracy,
        currentWordIndex,
        setCurrentWordIndex,
        isReady,
        setIsReady,
        userInput, 
        setUserInput,
        results,
        setResults,
        isInTop10,
        setIsInTop10
      }}  
    >
      {children}
    </TypeTestContext.Provider>
  );
};

export const useTypeTestContext = (): TypeTestContextProps => useContext(TypeTestContext);
