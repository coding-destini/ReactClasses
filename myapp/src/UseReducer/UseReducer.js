import React, { useReducer } from 'react'


const reducer = (state,action)=>{
    console.log(state,action);
    if(action.type == "Inc"){
        return state +1;
    }
    if(action.type == "Dec"){
        return state-1;
    }
    return state;
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer,0)

  return (
    <div>UseReducer
        <h1>{state}</h1>
     <button onClick={()=>{dispatch({type : "Inc"})}} >Inc</button>
     <button onClick={()=>{dispatch({type: "Dec"})}} >Dec</button>
     <button onClick={()=>{dispatch({type:""})}} >btn</button>
    </div>
  )
}

export default UseReducer