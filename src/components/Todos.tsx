import { useContext }  from "react";
import { TodoContext } from '../store/todos-context';
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
	const todoCtx=useContext(TodoContext);

	return (
		<ul className={classes.item}>
			{todoCtx.items.map((item) => (
				<TodoItem key={item.id} text={item.text} onDeleteTodo={todoCtx.deleteTodo.bind(null,item.id)}/>
			))}
		</ul>
	);
};

export default Todos;
