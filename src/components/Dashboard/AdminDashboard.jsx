import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="h-screen w-full p-7 bg-gray-900">
      <Header onLogout={onLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
