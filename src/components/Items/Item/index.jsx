import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

// esto serian los items que aparecen en el catalogo

const Item = ({ info }) => {

  // este seria el primer paso
  // Item a ItemList a ItemListContainer

  // exporto { info } para rellenarlo en el componente ItemList
  return (
    <div className="itemsJuegos">
      <h1>{info.nombre}</h1>
      <img src={info.photo} alt="" />
      <button>
        <Link to={`/categoria/productos/detalles/${info.id}`}>Ver Info</Link>
      </button>
    </div>
  );
};

export default Item;
