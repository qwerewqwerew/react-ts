const MyTodo = () => {
	const submitHandler = (e:React.FormEvent) => {
		 e.preventDefault();
	  }
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">할일내용:</label>
			<input type="text" id="text" />
			<button>추가</button>
		</form>
	);
};
export default MyTodo;
