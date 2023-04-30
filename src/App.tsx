import Todos from "./components/Todos";
function App() {
	return (
		<div className="App">
			<Todos items={["리액트공부","타입스크립트공부"]} />
		</div>
	);
}

export default App;
