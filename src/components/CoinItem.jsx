import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AiOutlineStar } from "react-icons/ai";

const CoinItem = ({ coin }) => {
  return (
    <div>
      <tr>
        <td>
          <AiOutlineStar />
        </td>
        <td>{coin.market_cap_rank}</td>
        <td>
          <div>
            <img src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
          </div>
        </td>
        <td>{coin.symbol}</td>
        <td>{coin.current_price}</td>
        <td>{coin.price_change_percentage_24h}</td>
        <td>{coin.total_volume}</td>
        <td>{coin.market_cap}</td>
        <td>
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color="teal" />
          </Sparklines>
        </td>
      </tr>
    </div>
  );
};

export default CoinItem;
