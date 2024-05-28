import React from 'react'

const Event = () => {

    const shoot=(name)=>{
        alert(`This is shoot ${name}`);
    }

    let name = "jhon";
    
  return (
    <div>
        <button onClick={()=>shoot(name)} >Take a shoot </button>
    </div>
  )
}

export default Event