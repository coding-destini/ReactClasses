import React from 'react'
import MadeGoal from './MadeGoal'
import { MissedGoal } from './MissedGoal'

const Goal = (props) => {
return(
    <>
    { props.isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
)
}

export default Goal