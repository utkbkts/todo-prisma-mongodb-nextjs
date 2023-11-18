import React from "react";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import DeletedTodo from "./DeletedTodo";

const Todo = ({ x }: {x:todoType}) => {
  const todoStyle = {
    textDecoration: x.isCompleted === true ? "line-through" : "none",
    opacity: x.isCompleted === true ? "0.5" : "1",
  };
  return (
    <div
      className="bg-white p-3 rounded-md flex justify-between items-center w-full"
      style={todoStyle}
    >
      <div className="flex items-center gap-5 mr-4">
        <ChangeTodo x={x} />
        <EditTodo x={x} />
        <DeletedTodo x={x}/>
      </div>
      <h3 className="font-bold uppercase">{x.title}</h3>
    </div>
  );
};

export default Todo;
