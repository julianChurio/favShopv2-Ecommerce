import React from "react";
import ItemCount from "../ItemCount";

const onAdd = (quantity) => {
  console.log("compraste: ", quantity);
};

const ItemDetail = ({ data }) => {
  return (
    <div>
      <div className="detail">
        <h1>{data.nombre}</h1>
        <img src={data.photo} alt="" />
        <h3>Precio : {data.precio}</h3>
        <p>{data.descripcion}</p>
        <ItemCount initial={0} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
