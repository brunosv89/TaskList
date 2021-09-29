import React, { useState } from "react";
import "./AddTask.css";
import Btn from "./Btn"


const AddTask = ({handleAddTask}) => {
  
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleAddTask(inputData)
    setInputData("")
  }

  return (
    <div className="container-task">
      <input 
        className="input-task" 
        type="text" 
        placeholder="Digite a tarefa.." 
        onChange={handleInputChange} 
        value={inputData}/>
      <Btn
        onClick={handleAddTaskClick}> Adicionar
      </Btn>
    </div>
  ); 
};

export default AddTask;
