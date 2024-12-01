import { useState } from "react";
import Tails from "./icons/tails.png";
import Heads from "./icons/heads.png";

type Coin = "heads" | "tails" | "";

export default function App() {
  const [count, setCount] = useState({
    total: 0,
    heads: 0,
    tails: 0,
  });
  const [coin, setCoin] = useState<Coin>();

  const handleChangeCoin = () => {
    const changedCoin = ["tails", "heads"][Math.round(Math.random())];

    setCount({
      total: count.total + 1,
      heads: changedCoin === "heads" ? count.heads + 1 : count.heads,
      tails: changedCoin === "tails" ? count.tails + 1 : count.tails,
    });
    setCoin(changedCoin as Coin);
  };
  console.log(coin);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-semibold text-2xl capitalize">{coin}</h1>
        {coin === "tails" ? (
          <img src={Tails} alt="tails" width={200} />
        ) : coin === "heads" ? (
          <img src={Heads} alt="heads" width={200} />
        ) : (
          ""
        )}
        <button
          className="border py-1 px-5 rounded-md"
          onClick={handleChangeCoin}
        >
          Flip
        </button>
        <h1 className="flex gap-2">
          <span>Total: {count.total}</span>
          <span>Heads: {count.heads}</span>
          <span>Tails: {count.tails}</span>
        </h1>
      </div>
    </div>
  );
}
