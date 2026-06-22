
import React, { useState } from "react";
import "./FlipCoin.css";

function FlipCoin() {
  const [result, setResult] = useState("TAILS");
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [flip, setFlip] = useState(false);

  const flipCoin = () => {
    setFlip(true);

    setTimeout(() => {
      let coin = Math.random() < 0.5 ? "HEADS" : "TAILS";

      setResult(coin);

      if (coin === "HEADS") {
        setHeads(heads + 1);
      } else {
        setTails(tails + 1);
      }

      setFlip(false);
    }, 1000);
  };

  const reset = () => {
    setHeads(0);
    setTails(0);
    setResult("HEADS");
  };

  return (
    <div className="app">
      <h1>Heads or Tails</h1>

      <p>
        Heads: {heads} | Tails: {tails}
      </p>

      <div className={flip ? "coin spin" : "coin"}>
        {result}
      </div>

      <button onClick={flipCoin}>
        Flip Coin
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default FlipCoin