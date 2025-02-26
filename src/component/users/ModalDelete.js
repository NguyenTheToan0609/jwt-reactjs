import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalDelete(props) {
  return (
    <Modal show={props.isShowModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure delete user : {props.dataModal.email}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleConfirmDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
