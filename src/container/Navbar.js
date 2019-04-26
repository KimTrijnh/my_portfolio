import React, { Component } from "react";
import Avatar from "../component/Avatar";
import NavLink from "../component/NavLink";


const Style ={
  position: 'absolute',
  width: '100%',
  // background: 'rgba(26, 25, 25, 0.8)',
  padding: '10px 30px',
  top: 0,
  zIndex : 1

}
export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar d-flex justify-content-start" style={Style}>
    <Avatar text="Huong's Porfolio"/>
    <NavLink text="Home" link="/"/>
    <NavLink text="About" link="/about" />
    <NavLink text="Contact" link="/contact"/>
     </nav>
    );
  }
}
