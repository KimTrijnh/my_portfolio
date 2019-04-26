import React, { Component } from 'react'
import Navbar from './Navbar'
import Main from './Main/Main'
import Footer from './Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCoffee)



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
