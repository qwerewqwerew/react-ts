import Todos from "./components/Todos";
import MyTodo from "./components/MyTodo";
import TodoContextProvider from './store/todos-context';

function App() {

	return (
		<TodoContextProvider>
			<MyTodo />
			<Todos />
		</TodoContextProvider>
	);
}

export default App;