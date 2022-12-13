import './App.css';
import { useState, useEffect } from 'react';
import Tasks from './Tasks';
import Buttons from './Buttons'

const colorOptions = ["black", "red", "green", "blue"];

function App() {
   const [inputValue, setInputValue] = useState("");
   const [tasks, setTasks] = useState([]);
   const [colors, setColors] = useState({});
   console.log(colors); // please, look how it looks in console when you add items


   function handleChange(event) {
     setInputValue(event.target.value);
   }

   function addTask() {
     const newTaskIndex = tasks.length;
     setTasks([...tasks, inputValue]);
     setColors({ ...colors, [newTaskIndex]: colorOptions[0] });
   }
   function resetInput() {
     setInputValue("");
   }

   function handleClick() {
     setTasks([...tasks, inputValue]);
     setInputValue("");
   }
   function deleteTask(taskIndex) {
     setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
   }

   useEffect(() => {
     const listener = (event) => {
       if (event.code === "Enter" || event.code === "NumpadEnter") {
         console.log("Enter key was pressed. Run your function.");
         event.preventDefault();
         handleClick();
       }
     };
     document.addEventListener("keydown", listener);
     return () => {
       document.removeEventListener("keydown", listener);
     };
   }, []);

   const result = tasks.map((task, index) => {
     return (
       <div className="result" key={index}>
         <p style={{ color: colors[index] }} contentEditable="true" key={index}>
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
      <input value={inputValue} onChange={handleChange} />

      <Tasks />

      <div> {result} </div>

      <Buttons a={true} />

      
    </div>
  );
}

export default App;
