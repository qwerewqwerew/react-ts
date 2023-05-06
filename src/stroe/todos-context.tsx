import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text:string) => void;
  deleteTodo: (id: string) => void
}

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => { },
  deleteTodo: (id: string) => { }
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const delTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  };

  const contextValue:TodoContextObj ={
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: delTodoHandler
  }

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>)
};


export default TodosContextProvider;