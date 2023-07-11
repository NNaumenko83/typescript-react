import React, { useState } from "react";
import { IItem } from "../types/todo";

interface IProps {
  addTodo: (todo: IItem) => void;
}

export const AddTodo: React.FC<IProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  function onSubmitHAmdler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.addTodo({ id: Math.random().toString(), title });
  }

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      AddTodo
      <form onSubmit={onSubmitHAmdler}>
        <input type="text" value={title} onChange={onChangeInputHandler} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};
