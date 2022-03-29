import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  const { id, image, name, symbol } = coin;
  return (
    <Link
      to={`/coin/${id}`}
      className="coin shadow-lg flex items-center justify-between p-4 rounded-lg"
    >
      <div className="image w-28">
        <img className="w-14" src={image} alt={name} />
      </div>
      <div className="text">
        <h4 className="text-lg font-semibold">{name}</h4>
        <span>{symbol}</span>
      </div>
    </Link>
  );
};

export default Coin;
