import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((res) => {
      setTrending(res.data.coins);
    });
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending Crypto</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((trend) => (
          <div
            className="rounded-div flex p-9 hover:scale-105 ease-in-out duration-300"
            key={trend.item.coin_id}
          >
            <div className="flex w-full items-center justify-around">
              <div className="flex">
                <img
                  className="mr-3 rounded-full"
                  src={trend.item.small}
                  alt={trend.item.id}
                />
                <div>
                  <p className="font-bold">{trend.item.id}</p>
                  <p>{trend.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 mr-1"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="bitcoin"
                />
                <p>{trend.item.price_btc.toFixed(5)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
