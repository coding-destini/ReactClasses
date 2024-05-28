import React,{useEffect, useState} from 'react'

export const UseEffect = () => {
   const [counter,setcounter] = useState(0);
    useEffect(()=>{
        console.log("Comp mounted");

        return function(){
            console.log("Comp unmount");
        }

    },[])

    useEffect(()=>{
        console.log("Comp Update",counter);
        return ()=>{
            console.log("Comp update unmount",counter);
        }
    },[counter])

  return (
    <div>
        <h1>{counter}</h1>

        <button onClick={()=>setcounter(counter+1)} >Add</button>
    </div>
    
  )
}
