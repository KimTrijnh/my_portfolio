import React, { Component } from "react";
import "./Main.css";
import SideButton from "../../component/SideButton";
import ImgCredit from "../../component/ImgCredit";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="bg-img">
        <div className="bg-blur"></div>
        </div>
        <div class="bg-text">
          <h1 >Hi, I'm Huong</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <SideButton className="sideBtn" text="PROJECT"/>
        <ImgCredit />
      </div>
    );
  }
}
