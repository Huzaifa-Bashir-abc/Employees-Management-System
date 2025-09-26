import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center p-8 rounded-xl bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-emerald-400">
          Employee Management System
        </h1>
        <p className="mb-8 text-gray-300">
          Manage your team and tasks efficiently
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-gray-900 hover:bg-red-600 rounded-lg font-medium transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
