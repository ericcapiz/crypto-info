import React from "react";
import { Navigate } from "react-router-dom";
import SavedCoins from "../components/SavedCoins";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();

  if (user) {
    return (
      <div className=" flex flex-col max-w-[1140px] mx-auto">
        <div className="text-center my-12 py-8 rounded-div">
          <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Favorites</h1>
            <SavedCoins />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Account;
