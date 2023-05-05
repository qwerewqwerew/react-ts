import { useState, useEffect, useRef } from "react";
import Todos from "./components/Todos";
import MyTodo from "./components/MyTodo";
import Todo from "./models/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const addTodoHandler = (todoText: string, todoComplete: boolean) => {
		const newTodo = new Todo(todoText, todoComplete);
		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};
	return (
		<div>
			<MyTodo addTodo={addTodoHandler} />
			<Todos items={todos} />
		</div>
	);
}

export default App;