import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex justify-between items-center mt-10 p-4 bg-[#2c2c2c] rounded-lg">
      <div className="text-center">
        <h3 className="text-gray-400 text-sm">New Tasks</h3>
        <p className="text-blue-400 text-2xl font-bold">
          {data.taskCounts.newTask}
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-gray-400 text-sm">Active</h3>
        <p className="text-yellow-400 text-2xl font-bold">
          {data.taskCounts.active}
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-gray-400 text-sm">Completed</h3>
        <p className="text-green-400 text-2xl font-bold">
          {data.taskCounts.completed}
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-gray-400 text-sm">Failed</h3>
        <p className="text-red-400 text-2xl font-bold">
          {data.taskCounts.failed}
        </p>
      </div>
    </div>
  );
};

export default TaskListNumbers;
