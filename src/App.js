import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TaskList from "./components/tasklist";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";


const App = () => {
  const [taskList, setTaskList] = useState([
    {
      id: "1",
      title: "Ir no mercado",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar react",
      completed: true,
    },
  ]);

  const handleAddTask = (InputData) => {
    const newTask = [
      ...taskList,
      {
        title: InputData,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTaskList(newTask);
  };

  const HandleTaskCompleted = (taskId) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTaskList(newTaskList);
  };

  const HandleDeleteTask = (taskId) => {
    const newTaskList = taskList.filter((task) => task.id != taskId);
    setTaskList(newTaskList);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/">
          <AddTask handleAddTask={handleAddTask}></AddTask>
          <TaskList
            HandleDeleteTask={HandleDeleteTask}
            HandleTaskCompleted={HandleTaskCompleted}
            taskList={taskList}
          />
        </Route>
        <Route path="/:taskTitle" component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
