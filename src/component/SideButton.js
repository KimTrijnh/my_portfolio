import React from 'react'
import "./sideButton.css"

const SideButton = (props) => {
  return (
    <button className="side-btn" >
    <span>{props.text}</span>
    </button>
  )
}

export default SideButton
