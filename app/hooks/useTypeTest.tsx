import { useEffect, useState } from "react"

import englishWords from "../words/english";

const useTypeText = () => {
    
    const [ words, setWords] = useState<string[]>(englishWords);
    const [ currentWord, setCurrentWord ] = useState<string>("")
    const [ userInput, setUserInput ] = useState<string>("")
    const [ timer, setTimer ] = useState()
    const [ correctWords, setCorrectWords ] = useState();
    const [ wrongWords, setWrongWords ] = useState();

    function shuffleArray(array: string[]) {
        const newArray = [...array]; 

        for (let i = newArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]; // Swap elements
        }

        return newArray;
      }

    useEffect(() => {
        const shuffledWords = shuffleArray(words)
        setWords(shuffledWords);
        setCurrentWord(shuffledWords[0])
        console.log(currentWord)
    }, [])

    return {
        words,
        currentWord,
        setCurrentWord,
        shuffleArray
    }
}

export default useTypeText