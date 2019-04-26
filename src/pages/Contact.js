import React, { Component } from 'react'
import ContactForm from './ContactForm';
import Navbar from '../container/Navbar';
export default class Contact extends Component {
  render() {
    return (
      
      <div className="contact">
      <Navbar />
      <div className="row mt-5">
      <div className="col-md-6 col-sm-12">
      </div>
      <div className="col-md-6 col-sm-12">
      <ContactForm />
      </div>
      </div>
      </div>
    )
  }
}

