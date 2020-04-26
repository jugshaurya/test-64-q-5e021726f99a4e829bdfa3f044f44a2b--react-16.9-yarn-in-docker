import React from "react";
import { Button, Modal } from "react-bootstrap";

const modalWrapper = (ChildComponent) => {
  class Wrapped extends React.Component {
    state = {
      show: false,
    };

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);
    setShow = (val) => {
      this.setState({ show: val });
    };

    render() {
      const { launch_btn_text, launch_btn_class, modal_heading } = this.props;
      return (
        <>
          <Button
            variant="dark"
            onClick={this.handleShow}
            className={launch_btn_class}
          >
            {launch_btn_text}
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{modal_heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ChildComponent handleClose={this.handleClose} {...this.props} />
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }

  return Wrapped;
};

export default modalWrapper;
