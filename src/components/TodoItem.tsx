const TodoItem: React.FC<{ text: string; complete: boolean }> = (props) => {
	return (
		<>
			<li><label><input type="checkbox" checked={props.complete}/>{props.text}</label> </li>
		</>
	);
};

export { TodoItem };
