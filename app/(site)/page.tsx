import TypeTest from "../components/TypeTest"
import Leaderboard from "../components/Leaderboard"

const Home = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center">
      <TypeTest />
      <Leaderboard />
    </div>
  )
}

export default Home