const TodoItem: React.FC<{ text: string; complete: string }> = (props) => {
	console.log(props);
	return (
		<>
			<li>{props.text}</li>
			<li>{props.complete}</li>
		</>
	);
};

export { TodoItem };
