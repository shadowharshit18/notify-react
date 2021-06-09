import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import AddNotesContainer from "./Containers/AddNotes_container"
import Show from "./Component/Show";
import AddTodo_container from "./Containers/AddTodo_container"
import ShowNotes_container from "./Containers/ShowNotes_container";
import ShowTodo from "./Containers/ShowTodo_container"
function App() {
	return (
		<div className="App">
      <BrowserRouter>
			
      <Header />
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/addnotes">
        <AddNotesContainer/>
      </Route>
      <Route path="/addtodo">
        <AddTodo_container/>
      </Route>
      <Route path="/shownotesandtodo">
        <Show/>
      </Route>
      <Route path="/shownotesandtodo/notesshow">
        <ShowNotes_container />
      </Route>
      <Route path="/shownotesandtodo/todo">
        <ShowTodo />
      </Route>
      </BrowserRouter>
		</div>
	);
}

export default App;
