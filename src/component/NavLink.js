import React from 'react'

const Style = {
    color: 'white',
    borderBottom: '3px solid white',
}
const NavLink = (props) => {
  return (
    <div className="p-2 mx-2" style={Style}>
    <a href="#" style={{color: 'white'}}>
    {props.text}
    </a>
    </div>
     )
}

export default NavLink
