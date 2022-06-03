import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Crypto Info</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      {user?.email ? (
        <div className="hidden md:block">
          <Link to="/account" className="p-4">
            Account
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to="/login" className="p-4 hover:text-accent">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Register
          </Link>
        </div>
      )}
      <div className="block md:hidden cursor-pointer z-10" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6" onClick={handleNav}>
            <Link to="/">Home</Link>
          </li>
          {!user ? (
            <>
              <li className="border-b py-6" onClick={handleNav}>
                <Link to="/login">Login</Link>
              </li>
              <li className="border-b py-6" onClick={handleNav}>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li className="border-b py-6" onClick={handleNav}>
                <Link to="/account">Account</Link>
              </li>
              <li className="border-b py-6" onClick={handleNav}>
                <p onClick={handleLogout}>Logout</p>
              </li>
            </>
          )}
          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
