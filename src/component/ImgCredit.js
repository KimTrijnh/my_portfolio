import React from 'react'

const Style = {
    position: 'absolute',
    bottom : 0,
    left: 0,
    margin: '15px 10px',
    color: 'white'
}
const ImgCredit = () => {
  return (
    <small style={Style}>
    Photo by Alessandro Erbetta on Unsplash
    </small>
  )
}

export default ImgCredit
