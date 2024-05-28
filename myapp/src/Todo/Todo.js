import React, { useState } from 'react'

const Todo = () => {
    
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    
    console.log("My todo ", todos);

    const addTodo= ()=>{
        setTodos([...todos,todo])
        setTodo('')
    }

    // Edit Todo
    const editTodo =(index)=>{
   const editedData =  prompt("Edit todo", todos[index])
   const newTodos = [...todos];
   newTodos[index] = editedData;
   setTodos(newTodos)
    }

    // Delete Todo 
    const deleteTodo = (index)=>{
        const newTodos = [...todos];
        newTodos.splice(index,2)
        setTodos(newTodos)
    }

  return (
    <div>
        <h1>Todo App</h1>
        <h2>{
            todos.map((item,index)=>{
               return <li key={index}>
                    {item}
                    <button onClick={()=>editTodo(index)} >Edit</button>
                    <button onClick={()=>deleteTodo(index)} >Delete</button> 
                </li>
            })
            }</h2>
        <input type='text' onChange={(e)=>setTodo(e.target.value)}  value={todo}/>
        <button onClick={addTodo}>Add Task</button>
    </div>
  )
}

export default Todo