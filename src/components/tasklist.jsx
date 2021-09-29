import React from "react";
import Task from "./task";

const TaskList = ({ taskList, HandleTaskCompleted, HandleDeleteTask }) => {
  return (
    <>
      {taskList.map((task) => (
        <Task
          task={task}
          HandleTaskCompleted={HandleTaskCompleted}
          HandleDeleteTask={HandleDeleteTask}
        />
      ))}
    </>
  );
};

export default TaskList;
