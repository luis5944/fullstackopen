import React, { useState } from "react";
import Button from "./components/Button";
import Stadistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button func={setGood}>good</Button>
      <Button func={setNeutral}>neutral</Button>
      <Button func={setBad}>bad</Button>

      <Stadistics stats={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
