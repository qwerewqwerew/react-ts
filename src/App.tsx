import { useState } from "react";
import Todos from "./components/Todos";
import MyTodo from "./components/MyTodo";
import Todo from "./models/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);
		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	const delTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => {
				return todo.id !== todoId;
			});
		});
	};

	return (
		<div>
			<MyTodo addTodo={addTodoHandler} />
			<Todos items={todos} onDeleteTodo={delTodoHandler} />
		</div>
	);
}

export default App;
