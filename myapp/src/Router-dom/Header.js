import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>Header
        <ul style={{ display:'flex', justifyContent:'space-around' }}>
            <Link to="/" ><li style={{ cursor:'pointer'}} >Home</li></Link>
            <Link to='/about'><li style={{ cursor:'pointer' }}>About</li></Link>
            <Link to='/contact'><li style={{ cursor:'pointer' }}>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Header