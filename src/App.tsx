import Todos from "./components/Todos";
import MyTodo from "./components/MyTodo";
import Todo from "./models/todo";
function App() {
	const todos = [
		new Todo("리액트공부", "함"),
		new Todo("타입스크립트 공부", "안함"),
	];
	return (
		<div className="App">
			<MyTodo />
			<Todos items={todos} />
		</div>
	);
}

export default App;