import React from 'react'
import ComB from './ComB'

const ComC = (props) => {
    // console.log(props);
  return (
    <div>
       <p>This is comp c </p>
        <ComB name={props.name}/></div>
  )
}

export default ComC