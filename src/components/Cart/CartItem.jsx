import React from "react";
import { useCartContext } from "./../../CartProvider";
import "./index.css";

const CartItem = ({ product }) => {
  const { removerProducto } = useCartContext();

  return (
    <tr className="tableRowItems">
      <td>
        <button onClick={() => removerProducto(product.id)}>Eliminar</button>
      </td>
      <td className="tablePhoto">
        <img src={product.photo} alt="" />
      </td>
      <td>
        <p>{product.nombre}</p>
      </td>
      <td>
        <p>{product.cantidad}</p>
      </td>
      <td>
        <p>{product.precio}</p>
      </td>
      <td>
        <p>${product.cantidad * product.precio}</p>
      </td>
    </tr>
  );
};

export default CartItem;

/* 

      <img src={product.photo} alt="" />
      <h1>{product.nombre}</h1>
      <p>{product.cantidad}</p>
      <p>{product.precio}</p>
      <p>${product.cantidad * product.precio}</p>
      <button onClick={() => removerProducto(product.id)}>Eliminar</button>


*/
