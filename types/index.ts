import { TestResult } from "@/common.types";

export type TypeTestContextProps = {
    timer: number;
    correctWords: number;
    wrongWords: number;
    accuracy: number;
    wpm: number;
    isPlaying: boolean,
    currentWordIndex: number,
    isReady: boolean,
    userInput: string,
    results: TestResult[];
    isInTop10: boolean,
    setIsInTop10: React.Dispatch<React.SetStateAction<boolean>>;
    setResults: React.Dispatch<React.SetStateAction<TestResult[]>>;
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setTimer: React.Dispatch<React.SetStateAction<number>>;
    setCorrectWords: React.Dispatch<React.SetStateAction<number>>;
    setWrongWords: React.Dispatch<React.SetStateAction<number>>;
    setCurrentWordIndex: React.Dispatch<React.SetStateAction<number>>;
    setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  export const initialState: TypeTestContextProps = {
    timer: 0,
    correctWords: 0,
    wrongWords: 0,
    accuracy: 0,
    wpm: 0,
    isPlaying: false,
    isReady: true,
    currentWordIndex: 0,
    userInput: "",
    results: [],
    isInTop10: false,
    setIsInTop10: () => {},
    setResults: () => {},
    setUserInput: () => {},
    setIsPlaying: () => {},
    setTimer: () => {},
    setCorrectWords: () => {},
    setWrongWords: () => {},
    setCurrentWordIndex: () => {},
    setIsReady: () => {},
  };