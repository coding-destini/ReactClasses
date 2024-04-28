import React, { useState } from 'react'

const TaskInput = ({onSubmit}) => {

  const [task,settask] = useState('');

 const HandleForm =(e)=>{
  e.preventDefault();
  onSubmit(task)

 }
  
  return (
    <div>
      <form onSubmit={HandleForm}>
            <label>Enter your task to add in Tasks list</label>
            <input type='text' value={task} onChange={(e)=>settask(e.target.value)}  />
            <button type='submit'>Add task</button>
        </form>
    </div>
  )
}

export default TaskInput