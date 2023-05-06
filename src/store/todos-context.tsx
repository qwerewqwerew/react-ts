import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void
}
type Props = {
  children: React.ReactNode;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => { },
  deleteTodo: (id: string) => { }
});

const TodoContextProvider: React.FC<Props> = ({ children }) => {

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

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: delTodoHandler
  }

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>)
};


export default TodoContextProvider;