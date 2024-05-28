import React,{memo} from 'react'

const Child = () => {
    console.log("Child Compnent render");
  return (
    <div>Child</div>
  )
}

export default memo(Child)