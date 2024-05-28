import React,{Children, createContext} from 'react'
import Main from './Main';

export const MyContext = createContext(null);


const UseContext = () => {
  return (
    <MyContext.Provider value={{ name:"jhon","Address":"USA"  }} >
     {/* <Main/> */}
    </MyContext.Provider>
  )
}

export default UseContext