import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data, employeeId, taskId }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (status) => {
    const updatedData = userData.map((employee) => {
      if (employee.id === employeeId) {
        const updatedTasks = employee.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              active: status === "active",
              newTask: false,
              completed: status === "completed",
              failed: status === "failed",
            };
          }
          return task;
        });

        const taskCounts = { ...employee.taskCounts };
        if (data.newTask) taskCounts.newTask -= 1;
        if (status === "completed") taskCounts.completed += 1;
        if (status === "failed") taskCounts.failed += 1;
        taskCounts.active =
          status === "active" ? taskCounts.active + 1 : taskCounts.active - 1;

        return { ...employee, tasks: updatedTasks, taskCounts };
      }
      return employee;
    });

    setUserData(updatedData);
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gray-700 rounded-xl border border-gray-600">
      <div className="flex justify-between items-center">
        <span className="bg-emerald-600 text-xs px-2 py-1 rounded">
          {data.category}
        </span>
        <span className="text-xs text-gray-300">{data.taskDate}</span>
      </div>
      <h2 className="mt-3 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={() => updateTaskStatus("completed")}
          className="flex-1 bg-green-600 hover:bg-green-700 rounded text-xs py-2 px-3 transition-colors"
        >
          Complete
        </button>
        <button
          onClick={() => updateTaskStatus("failed")}
          className="flex-1 bg-red-600 hover:bg-red-700 rounded text-xs py-2 px-3 transition-colors"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
