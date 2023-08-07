import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestResult } from '@/common.types';

export interface GameState {
  timer: number;
  correctWords: number;
  wrongWords: number;
  accuracy: number;
  wpm: number;
  isPlaying: boolean;
  currentWordIndex: number;
  isReady: boolean;
  results: TestResult[];
}

const initialState: GameState = {
  timer: 60,
  correctWords: 0,
  wrongWords: 0,
  accuracy: 0,
  wpm: 0,
  isPlaying: false,
  isReady: true,
  currentWordIndex: 0,
  results: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
    setCorrectWords: (state, action: PayloadAction<number>) => {
      state.correctWords = action.payload;
    },
    setWrongWords: (state, action: PayloadAction<number>) => {
      state.wrongWords = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setCurrentWordIndex: (state, action: PayloadAction<number>) => {
      state.currentWordIndex = action.payload;
    },
    setIsReady: (state, action: PayloadAction<boolean>) => {
      state.isReady = action.payload;
    },
    setResults: (state, action: PayloadAction<TestResult[]>) => {
      state.results = action.payload;
    },
    resetGame: (state) => {
      state.timer = 60;
      state.correctWords = 0;
      state.wrongWords = 0;
      state.accuracy = 0;
      state.wpm = 0;
      state.isPlaying = false;
      state.currentWordIndex = 0;
      state.isReady = true;
      state.results = [];
    },
    endGame: (state) => {
      state.isPlaying = false;
      state.isReady = false;
      state.wpm = state.correctWords;
      state.accuracy = state.correctWords / (state.correctWords + state.wrongWords)
    },
  },
});

export const { 
  setTimer, 
  setCorrectWords, 
  setWrongWords, 
  setIsPlaying, 
  setCurrentWordIndex, 
  setIsReady, 
  setResults, 
  resetGame,
  endGame
} = gameSlice.actions;

export default gameSlice.reducer;