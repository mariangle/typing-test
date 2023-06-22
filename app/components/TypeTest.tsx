"use client"

import Words from "./Words";

import { useEffect } from "react";

import useTypeText from "../hooks/useTypeTest";

const TypeTest = () => {
    const { words, currentWord, setCurrentWord } = useTypeText();

    return (
        <div>
            <Words words={words} />
            <div>user input</div>
            <div>timer</div>
            <div>reset timer</div>
            <div>language</div>
        </div>
    )
}

export default TypeTest;

    // store current word, user input, start time, end time, correct word count
        // create state variables to store and update them when needed

    // fetch and display words that user should write
        // create file for random words
        // generate random words

    // start the timer when user starts typing
        // if user input, start timer

    // when user press space, go to next word
        // track spacebar event and go to next word

    // compare user input with displayed word
        // compare 
        // if match increment word count

    // when timer run out
        // calculate wpm
        // check if top 10, store score in leaderboard
            // if is logged in, store score with user
            // if unauthenticated, give name input to store