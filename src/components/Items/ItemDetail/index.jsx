import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useCartContext } from "../../../CartProvider";

const ItemDetail = ({ data }) => {
  const { agregarProducto } = useCartContext();

  const [terminarCompra, setTerminarCompra] = useState(false);

  const comprar = (cantidad) => {
    setTerminarCompra(true);
    agregarProducto(data, cantidad);
  };

  return (
    <div className="detail">
      <h1>{data.nombre}</h1>
      <img src={data.photo} alt="" />
      <h3>Precio : AR${data.precio}</h3>
      <p>{data.descripcion}</p>
      {terminarCompra ? (
        <div>
          <Link to="/cart/">
            <button>Terminar compra</button>
          </Link>
          <Link to="/catalogo/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      ) : (
        <ItemCount initial={0} stock={5} onAdd={comprar} />
      )}
    </div>
  );
};

export default ItemDetail;
