import React, { useContext } from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = ({ data, onLogout }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (taskId, status) => {
    const updatedUsers = userData.map((user) => {
      if (user.id === data.id) {
        const updatedTasks = user.tasks.map((task) => {
          if (task.id === taskId) {
            // Update counts based on status change
            const counts = { ...user.taskCounts };

            if (task.status === "new") counts.newTask -= 1;
            if (task.status === "active") counts.active -= 1;

            if (status === "active") counts.active += 1;
            if (status === "completed") counts.completed += 1;
            if (status === "failed") counts.failed += 1;

            return {
              ...task,
              status,
              completed: status === "completed",
              failed: status === "failed",
            };
          }
          return task;
        });

        return {
          ...user,
          tasks: updatedTasks,
          taskCounts: counts,
        };
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem("employees", JSON.stringify(updatedUsers));
  };

  return (
    <div className="p-10 bg-[#1C1C1C] min-h-screen">
      <Header onLogout={onLogout} data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} onTaskUpdate={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;
