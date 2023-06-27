import Leaderboard from "../components/Leaderboard"

const LeaderboardPage = () => {
  return (
    <div className="min-h-[80vh] grid content-center">
      <div className="my-8 flex-col flex_center">
        <h4 className="text-sky-500 dark:text-sky-400 font-semibold mb-2">Top 10</h4>
        <h1 className="text-4xl head font-extrabold">Leaderboard</h1>
        <p className="my-4 desc">The leaderboard displays the top 10 results ranked by WPM.</p>
      </div>
      <div className="p-2 w-full border dark:border-slate-800 rounded-lg shadow-lg bg-gray-50 dark:bg-navy max-w-lg mx-auto">
        <Leaderboard />
      </div>
    </div>
  )
}

export default LeaderboardPage