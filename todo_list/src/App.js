import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  
  // Add the handlesubmit code here
  function handlesubmit(e){
      e.preventDefault();

      const newTodo = {
          id: new Date().getTime(),
          text: todo.trim(),
          completed: false,
      };

      if(newTodo.text.length > 0) {
          setTodos([...todos].concat(newTodo));
          setTodo("");
      } else {
          alert("enter proper task");
          setTodo("");
      }

  }
  
  // Add the deleteToDo code here

  function deleteToDo(id){
      let updatedTodos = 
      [...todos].filter((eachTodo) => eachTodo.id !== id);
      setTodos(updatedTodos);
  }
  
  // Add the toggleComplete code here

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
<form onSubmit={handlesubmit}>
<input type ="text" align ="right" 
       onChange={(e) => setTodo(e.target.value)}
       value = {todo} 
       placeholder = "Add a new task"/>
<button type ="submit">Add Todo</button>
</form>
{todos.map((eachTodo) => 
    <div  key={eachTodo.id}>
        <div>
            {eachTodo.text}
            <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
            <button onClick={() => deleteToDo(eachTodo.id)}>Delete</button>
        </div> 
    </div>)}
</div>
);
};
export default App;
