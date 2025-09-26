import React from "react";
import NewTask from "./NewTask";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, onTaskUpdate }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {data.tasks.map((task) => {
        switch (task.status) {
          case "new":
            return (
              <NewTask
                key={task.id}
                data={task}
                onAccept={() => onTaskUpdate(task.id, "active")}
                onReject={() => onTaskUpdate(task.id, "failed")}
              />
            );
          case "active":
            return (
              <ActiveTask
                key={task.id}
                data={task}
                onComplete={() => onTaskUpdate(task.id, "completed")}
                onFail={() => onTaskUpdate(task.id, "failed")}
              />
            );
          case "completed":
            return <CompletedTask key={task.id} data={task} />;
          case "failed":
            return <FailedTask key={task.id} data={task} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default TaskList;
