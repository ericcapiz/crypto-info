import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const SavedCoins = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

  const coinPath = doc(db, "users", `${user?.email}`);
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid);
      await updateDoc(coinPath, {
        watchList: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      {coins?.length === 0 ? (
        <p>
          No coins marked as favorite. On the home page, click on the star
          symbol next to each crypto to mark them as your favorite.{" "}
          <Link to="/" className="text-accent">
            Search for crypto
          </Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Crypto</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr className="h-[60px] overflow-hidden" key={coin.id}>
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img
                        className="w-8 mr-4"
                        src={coin?.image}
                        alt={coin.name}
                      />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose
                    onClick={() => deleteCoin(coin.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoins;
