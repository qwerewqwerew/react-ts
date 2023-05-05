class Todo {
	id: string;
	text: string;
	complete: boolean;
	constructor(todoText: string, todoComplete: boolean) {
		this.text = todoText;
		this.id = new Date().toISOString();
		this.complete = todoComplete;
	}
}
export default Todo;
