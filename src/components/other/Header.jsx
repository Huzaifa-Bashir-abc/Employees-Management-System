import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout, data }) => {
  const navigate = useNavigate();
  const username = data ? data.firstName : "Admin";

  const handleLogout = () => {
    onLogout(); // Call the logout function from props
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl text-gray-300">Welcome back,</h1>
        <h2 className="text-3xl font-bold text-emerald-400">{username} 👋</h2>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-colors"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
