import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup({ funcion, getValuesFromModal }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const handleClose = () => {
    getValuesFromModal(name, email, number);
    funcion()
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
          <div className="modal-body">
            <input type="text" placeholder="Nombre" id="nombre" onChange={(e)=> setName(e.target.value)} />
            <input type="email" placeholder="Email" id="email" onChange={(e)=> setEmail(e.target.value)} />
            <input type="number" placeholder="Numero de telefono" id="numero" onChange={(e)=> setNumber(e.target.value)} />
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
