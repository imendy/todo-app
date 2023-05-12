import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
 import { toast } from 'react-toastify';

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
            {todo.text}
            <div className="flex space-x-2 items-center">
                <button onClick={() => importantTodo(todo.id)} className="important-btn font-bold">!</button>
                <RiCloseCircleLine style={{ marginRight: 5 }} 
                  onClick={() => {removeTodo(todo.id)
                    toast.info('Cancelled Task', {position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",})                                                         
                }}
                  className="w-6 h-6 text-teal-500"
                  />
                <BiCheckCircle 
                  onClick={() => {completeTodo(todo.id)
                    toast.success('Completed Task', {position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",})  
                  }}
                  className="w-6 h-6 text-pink-500"
                  />
            </div>
        </div>
    )
}