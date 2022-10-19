import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

const ErrorPage = () => {
  return (
    <div className="error">
      <div>
        <h1>Error 404: Pagina no encontrada!</h1>
      </div>
      <div>
        <Link to="/catalogo/">
          <button className="boton-solo">Hacer compras</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
