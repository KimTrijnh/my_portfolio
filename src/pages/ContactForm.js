import React, { Component } from 'react'


const Style = {
  width: '80%',
  height: 400,
  background: '#1768A7',
  padding: '20px 40px',
}
export default class ContactForm extends Component {
  render() {
    return (
        <form className="contact-form mx-auto" style={Style}>
        <input className="form-control my-3" placeholder="your name" type="text" />
        <input className="form-control my-3" placeholder="your email" type="email" />
        <textarea className="form-control my-3" placeholder="your's message"/>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
      
    )
  }
}
