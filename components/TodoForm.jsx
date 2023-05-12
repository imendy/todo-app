import React, { useState } from "react";
import { toast } from "react-toastify";


export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    props.addTodo(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="p-1 flex items-center justify-center w-[300px]">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="placeholder:italic px-8 py-[13px] rounded-lg rounded-r-[0px] bg-transparent outline-none border border-[#8758ff] w-full pl-2"
        placeholder="Add a todo"
      />
      <button type="submit" className="font-medium px-2 py-[14px]  min-[400px]:py-[10px] bg-indigo-500 rounded-r-lg">Add</button>
    </form>
  );
}