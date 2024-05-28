import React, { useState } from 'react'
import TaskInput from './TaskInput'

const TaskManager = () => {

  const [tasks,settasks] = useState([]);
  
  const handleTask =(task)=>{
    settasks([...tasks, task])
  }

  return (
    <div>
      TaskManager
      <TaskInput onSubmit={handleTask}  />  

      <h1>My All Task</h1>
      {
        tasks.length>0 ? tasks.map((item,index)=> <h2 key={index} >{item}</h2> ) : "No task added"
      }
    </div>
  )
}

export default TaskManager