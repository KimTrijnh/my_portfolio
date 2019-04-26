import React, { Component } from "react";
import Modal from "react-modal";
import "./sideButton.css";
import ProjectContainer from "./ProjectContainer";



export default class SideModal extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = "#f00";
  // }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        {/* <SideButton handleClick={this.openModal} text="PROJECT"/> */}
        <button className="side-btn" onClick={this.openModal}>
          <span>PROJECT</span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
        <div className="modal-content bg-transparent text-light pt-5">
        <button className="btn-exit" onClick={this.closeModal}>x</button>
        <h3 className="text-center text-light">My Projects</h3>
        <p className="lead text-center text-light">Click link to see demo</p>
        <ProjectContainer projects={this.state.projects} />
        </div>        
        </Modal>
      </div>
    );
  }
}
