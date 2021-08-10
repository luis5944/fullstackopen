import React from "react";

const MostVotes = ({ anecdotes, points }) => {
  const max = Math.max(...points);
  return (
    <div>
        <h1>Anecdote with most votes</h1>
      <p>{anecdotes[points.indexOf(max)]}</p>
      <p>{`has ${max} votes`}</p>
    </div>
  );
};

export default MostVotes;
