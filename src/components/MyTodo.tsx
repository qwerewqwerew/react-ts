import { useRef } from "react";
const MyTodo = () => {
	const todoTextInput = useRef<HTMLInputElement>(null);
	const todoNumInput = useRef<HTMLInputElement>(null);
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = todoTextInput.current!.value;
		if (enteredText.trim().length === 0) {
			return;
		}

		const enteredNum: number = todoTextInput.current!.valueAsNumber;
	}
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">할일내용:</label>
			<input type="text" id="text" ref={todoTextInput} />
			<input type="number" ref={todoNumInput} />
			<button>추가</button>
		</form>
	);
};
export default MyTodo;
