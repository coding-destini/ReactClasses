import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [name,setName] = useState();
    const input1 = useRef('');
    console.log(input1);
    console.log(input1.current);

  return (
    <div>
        <h1>UseRef</h1>

        <input type='text' ref={input1} value={name} onChange={(e)=>setName(e.target.value)} />
        <h2>{name}</h2>
    </div>
  )
}

export default UseRef