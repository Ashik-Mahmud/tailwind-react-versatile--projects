import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coinDetails, setCoinDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => {
        setCoinDetails(res.data);
        setLoading(true);
      });
  }, [coinId]);

  const {
    name,
    symbol,
    image,
    market_cap_rank,
    contract_address,
    public_interest_score,
    coingecko_rank,
    market_data,
    last_updated,
  } = coinDetails;

  return (
    <section id="coin-details" className="bg-slate-50">
      {loading ? (
        <div className="container mx-auto p-5 flex items-center justify-around py-40">
          <div className="details space-y-3">
            <h1 className="text-4xl font-semibold">{name}</h1>

            <h2 className="text-xl">
              Current Price: <b>{market_data?.current_price?.aed}</b>
            </h2>
            <ul>
              <li>
                Symbol: <b>{symbol}</b>
              </li>
              <li>
                Contract Address <b>{contract_address}</b>
              </li>
              <li>
                Market Cap Rank : <b>{market_cap_rank}</b>
              </li>
              <li>
                CoinGecko Rank: <b>{coingecko_rank}</b>
              </li>
              <li>
                Public Interest Score: <b>{public_interest_score}</b>
              </li>
              <li>
                Last Updated: <b>{last_updated}</b>
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={image.large} alt="" />
          </div>
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
    </section>
  );
};

export default CoinDetails;
