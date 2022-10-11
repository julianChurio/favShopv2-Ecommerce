import React, { useState, useEffect } from "react";
import { useCartContext } from "./../../../CartProvider";

const ItemCount = ({ initial, stock, onAdd, id }) => {
  const [count, setCount] = useState(parseInt(initial));

  const { buscarEnCarrito } = useCartContext();

  const sumar = () => {
    if (buscarEnCarrito(id).cantidad < stock) {
      setCount(count + 1);
    } else {
      console.log("noasd");
    }
  };

  const restar = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="itemCount">
      <div className="buttons">
        <button disabled={count <= 0} onClick={restar}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={sumar}>
          +
        </button>
      </div>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
