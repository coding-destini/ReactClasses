import React from 'react'

const Cars = () => {
    const mycars = []
  return (
    <div>
        { mycars.length>0 ?  "I have cars" : "I have no cars" }
    </div>
  )
}

export default Cars