import { useRouter } from "next/navigation";
import useTypeText from "../hooks/useTypeTest";
import { useSelector } from 'react-redux'
import { RootState } from "@/store/store";
import axios from 'axios';
import Button from "./Button";
import { toast } from "react-hot-toast";
import getResults from "@/actions/get-results";

const SubmitResult = async () => {
  const { wpm } = useSelector((state: RootState) => state.game)

  const { onResetGame } = useTypeText();
  const router = useRouter();

  const checkIsInTop10 = () => {
  }

  const handeSubmitResult = async () => {
    try {
      await axios.post("/api/test-results", { wpm });
      onResetGame();
      router.push("/leaderboard")
      toast.success("You're now on the leaderboard!")
    } catch (error) {
      console.error("Error saving test score:", error);
    }
  };

  return (
    <>

    </>
  )
}

export default SubmitResult;
