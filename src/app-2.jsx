import { useState, useEffect, useCallback } from "react";
import Tasks from './Tasks';
import Buttons from './Buttons';

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

  const result = tasks.map((task, index) => {
    return (
      <div className="result" key={index}>
        <p style={{ color: colors[index] }} key={index}>
          {task}{" "}
        </p>
        <button className="delete_item" onClick={() => deleteTask(index)}>
          x
        </button>
        <select
          value={colors[index]}
          onChange={(event) =>
            setColors({ ...colors, [index]: event.target.value })
          }
        >
          {colorOptions.map((text, index) => {
            return <option key={index}>{text}</option>;
          })}
        </select>
      </div>
    );
  });

  return (
    <div>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
<Tasks />
      <div>{result}</div>
<Buttons />
      <button onClick={() => addTask()}>add item</button>

      <button onClick={() => resetInput()}>reset inputValue</button>

      <button
        onClick={() => {
          addTask();
          resetInput();
        }}
      >
        add + reset
      </button>
    </div>
  );
}
