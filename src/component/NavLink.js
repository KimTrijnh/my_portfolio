import React from 'react'
import {Link} from 'react-router-dom'

const Style = {
    color: 'white',
    borderBottom: '3px solid white',
}
const NavLink = (props) => {
  return (
    <div className="p-2 mx-2" style={Style}>
    <Link to={props.link}>{props.text}</Link>
    </div>
     )
}

export default NavLink
