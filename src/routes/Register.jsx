import React, { useState } from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-10">
        <h1 className="text-2xl font-bold">Register</h1>
        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Register
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/login" className="text-accent">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
