class Todo {
	id: string;
	text: string;
	complete: string;
	constructor(todoText: string, todoComplete: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
		this.complete = todoComplete;
	}
}
export default Todo;
