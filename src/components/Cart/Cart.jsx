import { useCartContext } from "../../CartProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const { cart, precioTotal, precioImpuesto } = useCartContext();

  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const ponerNombre = (event) => {
    setName(event.target.value);
  };
  const ponerMail = (event) => {
    setEmail(event.target.value);
  };
  const ponerNumero = (event) => {
    setNumber(event.target.value);
  };

  const handleClose = () => {
    mandarCompra();
    setShow(false);
  };

  const handleShow = () => {
    setOrden(undefined);
    setShow(true);
  };
  const closeNormal = () => setShow(false);

  const [orden, setOrden] = useState();

  const ordenDeCompra = {
    comprador: {
      nombre: name,
      email: email,
      numero: number,
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.nombre,
      cantidad: product.cantidad,
      precioPorUnidad: product.precio,
      subTotal: product.cantidad * product.precio,
    })),
    total: { precioTotal },
  };

  const mandarCompra = () => {
    const traerFirestore = getFirestore();
    const collecionDeOrdenes = collection(traerFirestore, "ordenes");
    addDoc(collecionDeOrdenes, ordenDeCompra).then(({ id }) => setOrden(id));
  };

  if (cart.length === 0) {
    return (
      <div className="cartContainer cart-page">
        <h1>No hay elementos en el carrito</h1>
        <Link to="/catalogo/">
          <button className="boton-solo">Hacer compras</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cartContainer cart-page">
      <table>
        <tbody>
          <tr className="tableHeader">
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>

      <div className="total-price">
        <Button onClick={handleShow}>Terminar compra</Button>

        <Modal centered show={show} onHide={closeNormal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Ingresar datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="modal-body">
              <input type="text" placeholder="Name" onChange={ponerNombre} autoFocus />
              <input type="email" placeholder="Email" onChange={ponerMail} autoFocus />
              <input type="number" placeholder="Number" onChange={ponerNumero} autoFocus />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeNormal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Realizar
            </Button>
          </Modal.Footer>
        </Modal>
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>AR${[(Math.round(precioTotal * 100) / 100).toFixed(2)]}</td>
            </tr>
            <tr>
              <td>Impuestos</td>
              <td>AR${[(Math.round(precioImpuesto * 100) / 100).toFixed(2)]}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>AR${[(Math.round((precioTotal + precioImpuesto) * 100) / 100).toFixed(2)]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {orden && (
        <div>
          <p>Muchas gracias {name} por su compra!</p>
          <p>Pronto llamaremos a {number} para confirmar</p>
          <p>Se enviarán los juegos a {email}</p>
          <p>
            Cualquier consulta, utilice su numero de orden <span className="orden"> {orden}</span> para identificar su
            compra
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
