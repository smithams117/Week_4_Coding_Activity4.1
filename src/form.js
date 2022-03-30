import "./styles.css";
import { useState } from "react";
export default function TodoForm({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
