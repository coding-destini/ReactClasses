import { useState } from 'react';
import './App.css';
import { UseEffect } from './UseEffect/UseEffect';
import UseReducer from './UseReducer/UseReducer';
import UseRef from './UseRef/UseRef';
import UseMemo from './UseMemo/UseMemo';
import { Parent } from './UseCallback/Parent';
import UseContext from './UseContext/UseContext';
import Todo from './Todo/Todo';



function App() {

  const [show,setShow] = useState(true);

  return (
    <>
{/*     
    <button onClick={()=>setShow(!show)}>Toggle</button>
    {show?  <UseEffect/> : "No comp"} */}
    {/* <UseReducer/> */}
    {/* <UseRef/> */}
    {/* <UseMemo/> */}
    {/* <Parent/> */}
    {/* <UseContext/> */}
    <Todo/>
    </>
  );
}

export default App;
