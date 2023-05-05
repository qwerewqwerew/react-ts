import { useRef } from "react";
const MyTodo: React.FC<{ addTodo: (text: string) => void }> = (props) => {
	const todoTextInput = useRef<HTMLInputElement>(null);
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = todoTextInput.current!.value;
		if (enteredText.trim().length === 0) {
			return;
		}
		props.addTodo(enteredText)
	}
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">할일내용:</label>
			<input type="text" id="text" ref={todoTextInput} />
			<button>추가</button>
		</form>
	);
};
export default MyTodo;
