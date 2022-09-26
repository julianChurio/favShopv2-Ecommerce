import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="itemsJuegos">
      <h1 style={{ textAlign: "center" }}>{info.nombre}</h1>
      <img src={info.photo} alt="" />
      <button>
        <Link to={`/categoria/productos/detalles/${info.id}`}>Ver Info</Link>
      </button>
    </div>
  );
};

export default Item;
