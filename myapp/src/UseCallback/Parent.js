import React,{useCallback, useState} from 'react'
import  Child from './Child';

export const Parent = () => {

    const [counteone, setcounterone] = useState(0);

    const Increment = () => {
        setcounterone(counteone + 1)
    }

    const fun = useCallback(()=>{
        console.log("Hello React");
    },[counteone])

    return (
        <>
            <div>Parent</div>
            <Child fun={fun} />
            <button onClick={Increment}>Counteone</button>
        </>
    )
}
