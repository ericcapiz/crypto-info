import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="rounded-div">
      <Link to="/">
        <h1>Crypto Info</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/login">Register</Link>
      </div>
      <div>
        <AiOutlineMenu />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
