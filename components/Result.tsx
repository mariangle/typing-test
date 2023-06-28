import { useTypeTestContext } from "../context/TypeTestContext"
import SaveButton from "./SubmitResult";

const Result = () => {
  const { 
    wpm, 
    accuracy, 
    correctWords, 
    wrongWords, 
  } = useTypeTestContext();

  return (
    <div className="border rounded-lg overflow-hidden secondary_bg w-full sm:max-w-[250px] mt-8">
      <div className="p-2 text-center font-semibold">
        <h2>RESULT</h2>
      </div>
      <div className="p-2 bg-white dark:bg-midnight head">
        <div className="my-4">
          <div className="head text-2xl font-semibold text-center">{wpm} WPM</div>
          <div className="text-xs text-center desc">&#40;words per minute&#41;</div>
        </div>
        <div className="text-sm flex flex-col gap-2 p-2">
          <div className="flex_between">
            <span>Accuracy</span>
            <span> {accuracy.toFixed(2)}&#37;</span>
          </div>
          <div className="flex_between">
            <span>Correct words</span>
            <span className="text-green-700 dark:text-green-500">{correctWords}</span>
          </div>
          <div className="flex_between">
            <span>Wrong words</span>
            <span className="text-red-700 dark:text-red-500">{wrongWords}</span>
          </div>
        </div>
        <SaveButton />
      </div>
    </div>
  )
}

export default Result