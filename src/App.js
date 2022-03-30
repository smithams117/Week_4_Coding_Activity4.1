import "./styles.css";
import { useState } from "react";
import TodoForm from "./form.js";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: null,
      isCompleted: false
    }
  ]);

  const addItem = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  function removeItem(e) {
    var index = Number(e.target.key);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  function settime() {
    const time = new Date().toLocaleString();
  }
  const mystyle = {
    color: "black",
    size: "0px",
    align: "center",
    padding: "10px",
    backgroundColor: "Pink"
  };

  const task_style = {
    margin: "20px"
  };

  const textbox = {
    align: "center",
    margin: "30px"
  };

  return (
    <>
      <h1 style={mystyle}>Task to complete</h1>
      {todos.map((item, i) => (
        <div style={task_style} className="todo" key={i} onClick={removeItem}>
          {item.text}
        </div>
      ))}

      <TodoForm style={textbox} addItem={addItem} />
    </>
  );
}
