import React from "react";
import { useParams } from "react-router-dom";
import Btn from "./Btn";
import "./TaskDetails.css";
import { useHistory } from "react-router";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push(`/`);
  };

  return (
    <>
      <div className="back-button-container" onClick={handleBackButtonClick}>
        <Btn> Voltar </Btn>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          veritatis soluta voluptatum nemo earum aspernatur.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
