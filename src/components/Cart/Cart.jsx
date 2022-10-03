import { useCartContext } from "../../CartProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";

const Cart = () => {
  const { cart, precioTotal } = useCartContext();

  const [orden, setOrden] = useState();

  const ordenDeCompra = {
    comprador: {
      nombre: "Juli",
      email: "julichurio282@gmail.com",
      telefono: "2234976683",
      direccion: "asdasdas",
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
      <div className="cart">
        <h1>No hay elementos en el carrito</h1>
        <Link to="/catalogo/">
          <button>Hacer compras</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <table>
        <tbody className="tableRow">
          <th>
            <p className="tableHeader">Eliminar</p>
          </th>
          <th>
            <p className="tableHeader">Imagen</p>
          </th>
          <th>
            <p className="tableHeader">Nombre</p>
          </th>
          <th>
            <p className="tableHeader">Cantidad</p>
          </th>
          <th>
            <p className="tableHeader">Precio por unidad</p>
          </th>
          <th>
            <p className="tableHeader">Subtotal</p>
          </th>
        </tbody>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </table>
      <p>Precio total: AR${precioTotal}</p>
      <button onClick={mandarCompra}>Finalizar Compra</button>
      <h3>Su orden de compra: {orden}</h3>
    </div>
  );
};

export default Cart;
