import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Style = {
    background: 'rgba(33, 7, 18, 0.8)',
    position: 'absolute',
    bottom : 0,
    left: 0,
    margin: '15px 10px',
    padding: '10px',
    color: 'white'
}
const ImgCredit = () => {
  return (
    <small style={Style}>
    Made by me with <FontAwesomeIcon icon={['fab', 'react']} />
    </small>
  )
}

export default ImgCredit
