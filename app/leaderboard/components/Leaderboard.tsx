import { getTimeElapsed } from "@/actions/get-time-elapsed";
import { DEFAULT_PFP_URL } from "@/lib/constants";

import Image from "next/image";

import { TestResult, User } from "@prisma/client";

interface LeaderboardProps {
  results: ExtendedResult[];
}

interface ExtendedResult extends TestResult {
  user: User | null;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ results }) => {
  return (
    <table className="desc leaderboard">
      <thead>
        <tr className="head">
          <th>#</th>
          <th></th>
          <th>Name</th>
          <th>WPM</th>
          <th>Ago</th>
        </tr>
      </thead>
      <tbody>
      {results?.map((result, index) => (
          <tr key={result.id}>
            <td>{index + 1}</td>
            <td>
              <Image
                src={result?.user?.image || DEFAULT_PFP_URL}
                alt="profile img"
                width={24}
                height={24}
                className="rounded-full"
              />
            </td>
            <td>
              {result.user?.name || "Unknown"}
            </td>
            <td>{result.wpm}</td>
            <td>{getTimeElapsed(result.createdAt)}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
