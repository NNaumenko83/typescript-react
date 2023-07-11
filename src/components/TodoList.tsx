import React from "react";
import { IItem } from "../types/todo";

interface IProps {
  todos: IItem[];
  removeTodo: (id: string) => void;
}

export const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <div>{todo.title}</div>
          <button type="button" onClick={() => props.removeTodo(todo.id)}>
            Delete todo
          </button>
        </li>
      ))}
    </ul>
  );
};
