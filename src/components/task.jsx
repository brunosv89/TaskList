import React from "react";
import "./task.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { useHistory } from "react-router";

const Task = ({ task, HandleTaskCompleted, HandleDeleteTask }) => {

  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "8px solid lightsteelblue" } : {}}
    >
      <div className="task-title" onClick={() => HandleTaskCompleted(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="details-task-button"
          onClick={handleTaskDetailsClick}
        >
          {" "}
          <BsInfoCircle />
        </button>
        <button
          className="remove-task-button"
          onClick={() => HandleDeleteTask(task.id)}
        >
          {" "}
          <RiDeleteBin5Line />{" "}
        </button>
      </div>
    </div>
  );
};

export default Task;
