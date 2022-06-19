import React from "react";
import { Button, Modal } from "react-bootstrap";

const AskForDeleteModal = (props) => {
  const { show, close, deleteFunction, name } = props;

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Uyarı</Modal.Title>
      </Modal.Header>
      <Modal.Body>{name}' i silmek istediğinizden emin misiniz?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          İptal
        </Button>
        <Button variant="danger" onClick={deleteFunction}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AskForDeleteModal;
