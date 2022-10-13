import { useCartContext } from "../../CartProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import Popup from "../Modal";

const Cart = () => {
  const { cart, precioTotal, precioImpuesto } = useCartContext();

  const [orden, setOrden] = useState();

  const ordenDeCompra = {
    comprador: {
      nombre: "nombre",
      email: "email",
      numero: "numero",
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
          <button>Hacer compras</button>
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
        <Popup funcion={mandarCompra} />
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>AR${precioTotal}</td>
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
    </div>
  );
};

export default Cart;
