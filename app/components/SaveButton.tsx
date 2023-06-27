import { useTypeTestContext } from "../context/TypeTestContext";
import { useRouter } from "next/navigation";
import useTypeText from "../hooks/useTypeTest";

import axios from 'axios';
import Button from "./Button";
import { toast } from "react-hot-toast";

const SaveButton = () => {
  const { wpm, isInTop10 } = useTypeTestContext();
  const { resetGame } = useTypeText();
  const router = useRouter();

  const handeSubmitResult = async () => {
    try {
      await axios.post("/api/test-results", { wpm });
      resetGame();
      router.push("/leaderboard")
      toast.success("You're now on the leaderboard!")
    } catch (error) {
      console.error("Error saving test score:", error);
    }
  };

  return (
    <>
      { isInTop10 && (
        <div>
          <span className="text-xs flex_center">You&#39;re in the top 10!</span>
          <Button onClick={handeSubmitResult} className="mt-2 w-full p-2 rounded-lg flex_center font-semibold primary_bg">
          Save to Leaderboard
          </Button>
        </div>
      )}
    </>
  )
}

export default SaveButton;
