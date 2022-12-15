import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const colorOptions = ["black", "red", "green", "blue"];

export default function App2() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [colors, setColors] = useState({});

  const resetInput = useCallback(() => {
    setInputValue("");
  }, [setInputValue]);

  function deleteTask(taskIndex) {
    setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
  }

  const addTask = useCallback(() => {
    const newTaskIndex = tasks.length;
    setTasks([...tasks, inputValue]);
    setColors({ ...colors, [newTaskIndex]: colorOptions[0] });
  }, [inputValue, setTasks, setColors, colors, tasks]);

  const listener = useCallback(
    (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        addTask();
        resetInput();
      }
    },
    [addTask, resetInput]
  );

  useEffect(() => {
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [listener]);

  return (
    <div>
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <Tasks tasks={tasks} colors={colors} setColors={setColors} colorOptions={colorOptions} deleteTask={deleteTask}  />
      <Buttons addTask={addTask} resetInput={resetInput} />
    </div>
  );
}
