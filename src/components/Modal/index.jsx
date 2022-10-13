import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup({ funcion }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const handleClose = () => {
    setShow(false);
    funcion();
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
          <div className="modal-body">
            <input type="text" placeholder="Nombre" id="nombre" />
            <input type="email" placeholder="Email" id="email" />
            <input type="number" placeholder="Numero de telefono" id="numero" />
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
