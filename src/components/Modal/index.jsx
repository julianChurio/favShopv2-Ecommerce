import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Terminar compra</Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Numero de telefono"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Realizar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Popup;
