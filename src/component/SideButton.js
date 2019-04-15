import React from 'react'
import './SideButton.css'

const Style = {
  position: 'absolute',
  background: '#1318ad',
  width: 50,
  height: 100,
  border: 'none',
  color: 'white',
  right: 0,
  top: '10%',
  zIndex: 2,
  "&:hover": {
    backgroundColor: "#ff0000",
  
  }
}

const spanStyle = {
  display: 'inline-block',
  transform: 'rotate(270deg)',
  paddingBottom: 25,
  fontSize: '1rem',
  letterSpacing: 1

}

const SideButton = (props) => {
  return (
    <button  style={Style}>
    <span style={spanStyle}>{props.text}</span>
    </button>
  )
}

export default SideButton
