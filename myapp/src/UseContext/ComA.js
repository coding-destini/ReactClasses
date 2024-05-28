import React,{useContext} from 'react'
import { MyContext } from './UseContext'

const ComA = () => {
    const data = useContext(MyContext)
 
  return (
    <div>ComA
        {data.name}
        {data.Address}

    </div>
  )
}

export default ComA