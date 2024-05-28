import React from 'react'

const ComA = (props) => {
    console.log(props);
  return (
    <div>
        This is Com A
         {props.props.name}
    </div>
  )
}

export default ComA