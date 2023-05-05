import { useRef } from "react";
const MyTodo: React.FC<{ addTodo: (text: string, complete: boolean) => void }> = (props) => {
	const todoTextInput = useRef<HTMLInputElement>(null);
	const todoComplete = useRef<HTMLInputElement>(null);
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = todoTextInput.current!.value;
		const enteredComplete = todoComplete.current!.checked;
		if (enteredText.trim().length === 0) {
			return;
		}
		props.addTodo(enteredText, enteredComplete)
	}
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">할일내용:</label>
			<input type="checkbox" id="complete" ref={todoComplete} />
			<input type="text" id="text" ref={todoTextInput} />
			<button>추가</button>
		</form>
	);
};
export default MyTodo;
