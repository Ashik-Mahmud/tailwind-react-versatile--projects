import axios from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin/Coin";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(true);
      });
  }, []);

  return (
    <section id="coins">
      <div className="container mx-auto">
        <div className="title my-4 p-3 bg-slate-50">
          <h1 className="text-3xl font-semibold rounded">Coins</h1>
          <p>Get you favorite coins plan here</p>
        </div>
        {loading ? (
          <div className="coins-container grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {coins.map((coin) => (
              <Coin key={coin.id} coin={coin} />
            ))}
          </div>
        ) : (
          <div className="grid place-items-center py-40">
            <img
              className="w-96"
              src="https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif"
              alt="loader"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Coins;
