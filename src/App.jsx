import AddTodo from "./componunts/AddTodo";
import AppName from "./componunts/AppName";
import "./App.css"; 
import AllTodoItem from "./componunts/AllTodoItem";

function App() {
  

  const alltodoItemsArr =[
    {
      id:1,
      name:"Buy Milk",
      dueDate:"19/11/2023"
    },
    {
      id:2,
      name:"GOTO College",
      dueDate:"19/11/2023"
    },
    {
      id:3,
      name:"Shoes",
      dueDate:"20/11/2023"
    },
  ]
  return (
    <center className="todo-container">

      <AppName />
      <AddTodo />
      <AllTodoItem alltodoItemsArr={alltodoItemsArr}/>

    </center>
  );
}

export default App;
