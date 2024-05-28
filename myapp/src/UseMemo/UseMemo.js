import React, { useState,useMemo } from 'react'

const UseMemo = () => {
    
    const [counteone,setcounterone] = useState(0);
    const [countetwo,setcountertwo] = useState(0);

    const Increment =()=>{
        setcounterone(counteone+1)
    }
    
    const Decrement =()=>{
        setcountertwo(countetwo-1)
    }

    // const isEven =()=>{
    //     console.log("Even is calling");
    //     let i=0;
    //     while(i<2000000) i++;
    //     return counteone%2==0;
    // }
    const isEven =useMemo(()=>{
        console.log("Even");
        let i=0;
        return counteone%2==0;
    },[counteone])

  return (
    <>
    <h1>UseMemo</h1>
    <button onClick={Increment}>Counteone</button>
    <span> {isEven?"Even" : "Odd"} </span>
    <button onClick={Decrement}>CountTwo</button>
    </>
  )
}

export default UseMemo