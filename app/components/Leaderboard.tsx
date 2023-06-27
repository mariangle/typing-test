"use client"

import { useEffect } from "react";
import { useTypeTestContext } from "../context/TypeTestContext";
import { getTimeElapsed } from "../actions/getTimeElapsed";
import { DEFAULT_PFP_URL } from "../constants/constants";

import axios from "axios";
import Image from "next/image";

const Leaderboard = () => {
  const { results, setResults } = useTypeTestContext();

  useEffect(() => {
    const fetchResults = async () => {
      const { data: results } = await axios.get("/api/test-results");
      setResults(results);
    };
    fetchResults();
  }, []);

  const topResults = results
  .sort((a, b) => b.wpm - a.wpm) 
  .slice(0, 10); 

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
        {topResults?.map((result, index) => (
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
