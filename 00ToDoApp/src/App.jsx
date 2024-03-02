import { useState } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import List from './components/List/List';

function App() {
  const[text,setText] = useState("");
  // console.log('text :', text);

  const[todolist,setTodolist] = useState([]);

  const addItem = ()=> {
   const newTodoItem = {
      id: uuidv4(),
      item: text,
      done:false,
    };
    setTodolist([...todolist,newTodoItem]);
    setText(""); // after adding the item it should be clean.
  }

  // console.log("todoList:", todolist);
  return (
  
    <div className="App">
      <h1>To Do List</h1>
      <div className='adder'>
        <input 
          type="text" 
          placeholder='Add Items to your List'
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <span onClick={addItem}>+</span>
      </div>

      <List todolist={todolist}/>

    </div>
      
    
  )
}

export default App
