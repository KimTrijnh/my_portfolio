import React, { Component } from 'react'
import Navbar from './Navbar'
import Main from './Main/Main'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Main />
      <Footer />
      </div>
    )
  }
}
