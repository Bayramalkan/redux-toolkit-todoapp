import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import Todo from "./Todo";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch()

  console.log({todo});
  return (
    <div>
      <input placeholder="Add to do" type="text" onChange={(event) => setTodo(event.target.value)} />
      <button onClick={() => dispatch(addTodo({todo}))}>Add todo</button>
      <Todo />
    </div>
  );
}
