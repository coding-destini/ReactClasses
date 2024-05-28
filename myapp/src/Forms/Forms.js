import React, { useState } from 'react'

const Forms = () => {
    
    const [name, setname] = useState("");
    const HandleForm =(event)=>{
        event.preventDefault();
   alert(`Your name is ${name}`)
    }

  return (
    <div>
        <form onSubmit={HandleForm}>
            <label>Enter your name</label>
            <input type='text' value={name} onChange={(e)=>setname(e.target.value)}  />
            <button type='submit'>Show Name</button>
        </form>
    </div>
  )
}

export default Forms