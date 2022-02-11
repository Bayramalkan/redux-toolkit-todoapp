import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice";

export default function Todo(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      <h1>
        {todos.map((todo) => (
          <div key={todo.id} style={todo.completed ? { backgroundColor:"green" ,display:"flex"} : { backgroundColor:"red",display:"flex"}}>
            {todo.todo}
            {/* {`${todo.completed}`} */}
            <div>

            <button  onClick={() => dispatch(toggleTodo(todo))}>{todo.completed ? "Yapıldı":"Yapılmadı"}</button>
            <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
            </div>
          </div>
        ))}
      </h1>
    </div>
  );
}
