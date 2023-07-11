import React, { useState } from "react";
import { IItem } from "./types/todo";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodo] = useState<IItem[]>([]);

  function addTodoHandler(todo: IItem) {
    setTodo((prevTodo) => {
      return [...prevTodo, todo];
    });
  }

  const removeTodoItemHandler = (id: string) => {
    console.log(id);
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  return (
    <div>
      <AddTodo addTodo={addTodoHandler} />
      <TodoList todos={todos} removeTodo={removeTodoItemHandler} />
    </div>
  );
};

export default App;
