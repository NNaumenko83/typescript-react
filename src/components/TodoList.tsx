import React from "react";
import { IItem } from "../types/todo";

interface IProps {
  todos: IItem[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <li key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <button onClick={() => props.onRemoveTodo(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
