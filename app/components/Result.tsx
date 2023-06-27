import axios from "axios";
import { useTypeTestContext } from "../context/TypeTestContext"

const Result = () => {
  const { wpm, accuracy, correctWords, wrongWords, setResults, results } = useTypeTestContext();

  const saveTestScore = async () => {
    try {
      const topResults = results.slice(0, 10);
      const isTop10 = topResults.some((result) => result.wpm < wpm);

      if (isTop10) {
        const { data: result} = await axios.post("/api/test-results", { wpm });
        const updatedResults = [...topResults, result].sort((a, b) => b.wpm - a.wpm);
        setResults(updatedResults);
      }
    } catch (error) {
      console.error("Error saving test score:", error);
    }
  };

  return (
    <div className="border">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy.toFixed(2)}%</div>
        <div>Correct: {correctWords}</div>
        <div>Incorrect: {wrongWords}</div>
        <div>
          <button onClick={saveTestScore} className="border p-2">
            SAVE SCORE
          </button>
        </div>
    </div>
  )
}

export default Result