import { useTypeTestContext } from "../context/TypeTestContext"

const Result = () => {
  const { wpm, accuracy, correctWords, wrongWords } = useTypeTestContext();

  return (
    <div className="border">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy.toFixed(2)}%</div>
        <div>Correct: {correctWords}</div>
        <div>Incorrect: {wrongWords}</div>
    </div>
  )
}

export default Result