import React from "react";
import StadisticsLine from "./StatisticsLine";

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good * (100 / all) + " %";
  return (
    <div>
      <h1>statistics</h1>
      {all !== 0 ? (
        <table>
          <tbody>
            <tr>
              <StadisticsLine text="good" value={good} />
            </tr>
            <tr>
              <StadisticsLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StadisticsLine text="bad" value={bad} />
            </tr>
            <tr>
              <StadisticsLine text="all" value={all} />
            </tr>
            <tr>
              <StadisticsLine text="average" value={average} />
            </tr>
            <tr>
              <StadisticsLine text="positive" value={positive} />
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
