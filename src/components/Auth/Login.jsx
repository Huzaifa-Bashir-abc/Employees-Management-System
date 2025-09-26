import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const loginSuccessful = handleLogin(email, password);
    if (!loginSuccessful) {
      setLoginError(
        "Invalid credentials - Please check your email and password"
      );
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setLoginError(null);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginError(null);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />

          {/* Error notification */}
          {loginError && (
            <div className="w-full mt-3 p-2 bg-red-400 rounded text-center">
              {loginError}
            </div>
          )}

          {/* Signup option */}
          <div className="mt-4 text-center text-sm text-gray-400">
            Don't have an account?
            <span
              onClick={() => navigate("/signup")}
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              <br />
              Sign up
            </span>
          </div>

          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
