import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      date: task.date,
      category: task.category,
      status: "new",
      completed: false,
      failed: false,
    };

    const updatedUsers = userData.map((user) => {
      if (user.firstName === task.assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem("employees", JSON.stringify(updatedUsers));

    // Reset form
    setTask({
      title: "",
      description: "",
      date: "",
      assignTo: "",
      category: "",
    });
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              name="title"
              value={task.title}
              onChange={handleChange}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Task title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              name="date"
              value={task.date}
              onChange={handleChange}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <select
              name="assignTo"
              value={task.assignTo}
              onChange={handleChange}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            >
              <option value="">Select Employee</option>
              {userData
                .filter((u) => !u.isAdmin)
                .map((employee) => (
                  <option key={employee.id} value={employee.firstName}>
                    {employee.firstName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-0.5">Category</h3>
            <input
              name="category"
              value={task.category}
              onChange={handleChange}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Category"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Task description"
          />
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
