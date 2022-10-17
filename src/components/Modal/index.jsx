import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup({ getValuesFromModal }) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const handleClose = () => {
    getValuesFromModal(name, email, number);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Terminar compra</Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="modal-body">
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="number" placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
          </form>
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
