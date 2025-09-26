import React from "react";

const NewTask = ({ data, onAccept, onReject }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl">
      <div className="flex justify-between items-center">
        <span className="bg-blue-600 text-xs px-2 py-1 rounded">
          {data.category}
        </span>
        <span className="text-xs text-gray-800">{data.date}</span>
      </div>
      <h2 className="mt-3 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 text-gray-200">{data.description}</p>
      <div className="flex justify-between mt-6 gap-2">
        <button
          onClick={onAccept}
          className="bg-green-500 hover:bg-green-600 text-white rounded font-medium py-1 px-2 text-xs"
        >
          Accept Task
        </button>
        <button
          onClick={onReject}
          className="bg-red-500 hover:bg-red-600 text-white rounded font-medium py-1 px-2 text-xs"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default NewTask;
