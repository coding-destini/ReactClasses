
import React,{useState} from 'react'

export const Counter = () => {
    
    const [count,Setcount] = useState(0);

    // const addCount =()=>{
    //     Setcount(count+1);
    // }
    // const removeCount=()=>{
    //     Setcount(count-1)
    // }

  return (
    <div>
       My Count is :  {count} 
       <br/>
       <button onClick={()=>Setcount(count+1)}>Add</button>
       <button onClick={()=>Setcount(count-1)}>remove</button>
    </div>
  )
}
