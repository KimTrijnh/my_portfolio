import React, { Component } from "react";
import Avatar from "../component/Avatar";
import NavLink from "../component/NavLink";


const Style ={
  position: 'absolute',
  width: '100%',
  padding: '10px 30px',
  top: 0,
  zIndex : 1

}
export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar d-flex justify-content-start" style={Style}>
    <Avatar text="Huong's Porfolio"/>
    <NavLink text="Home" />
    <NavLink text="About" />
    <NavLink text="Contact" />
     </nav>
    );
  }
}
