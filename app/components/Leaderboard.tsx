"use client"

import { useEffect } from "react"
import { useTypeTestContext } from "../context/TypeTestContext";
import { getTimeElapsed } from "../actions/getTimeElapsed";

import axios from "axios";
import Image from "next/image";


const Leaderboard = () => {
  const { results, setResults } = useTypeTestContext();

  useEffect(() => {
    const fetchResults = async () => {
      const { data: results } = await axios.get("/api/test-results")
      setResults(results)
    }
    fetchResults();
  }, [])

  const sortedResults = results.sort((a, b) => b.wpm - a.wpm);

  return (
    <div>
      <h1>Leaderboard</h1>
      <p>Top ranking</p>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>WPM</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults?.map((result) => (
              <tr key={result.id}>
                <td>
                  <Image src={result.user?.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"} alt="profile img" width={35} height={35} className="rounded-full"/>
                </td>
                <td>{result.user?.name || "Unknown"}</td>
                <td>{result.wpm}</td>
                <td>{getTimeElapsed(result.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard                
