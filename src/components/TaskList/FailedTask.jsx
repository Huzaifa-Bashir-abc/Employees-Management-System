import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl">
      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-xs px-2 py-1 rounded">
          {data.category}
        </span>
        <span className="text-xs text-gray-800">{data.date}</span>
      </div>
      <h2 className="mt-3 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 text-gray-800">{data.description}</p>
      <div className="mt-4 text-center">
        <span className="bg-white text-red-600 text-xs px-2 py-1 rounded-full">
          Failed
        </span>
      </div>
    </div>
  );
};

export default FailedTask;
