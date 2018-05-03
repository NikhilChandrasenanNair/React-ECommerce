import React, { Component } from 'react';
import SignUp from './SignUp';
import {
  Modal,
  ModalHeader,
  ModalBody } from 'reactstrap';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div id="modal">
        <div onClick={this.toggle} id="header__wishlist-signup--text">Sign Up</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <SignUp signup="signup"/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
