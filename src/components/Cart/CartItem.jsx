import React from "react";
import { useCartContext } from "./../../CartProvider";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CartItem = ({ product }) => {
  const { removerProducto } = useCartContext();

  return (
    <tr className="tableRowItems">
      <td>
        <div className="cart-info">
          <img className="img-fluid" src={product.photo} alt="foto del producto" />
          <div className="product-data">
            <p>{product.nombre}</p>
            <p>Precio unitario: AR${product.precio}</p>
            <button onClick={() => removerProducto(product.id)}>Eliminar</button>
          </div>
        </div>
      </td>
      <td className="cart-styles">{product.cantidad}</td>
      <td className="cart-styles">AR${product.precio * product.cantidad}</td>
    </tr>
  );
};

export default CartItem;