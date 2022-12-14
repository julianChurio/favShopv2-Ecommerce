import Flask from "../../assets/images/estusflask.png";
import CartWidget from "../Cart/CartWidget";
import { NavLink } from "react-router-dom";
import "./index.css"

function NavBar() {
  return (
    <>
      <nav className="navPrincipal">
        <NavLink to="/">
          <img src={Flask} className="flask" alt="asddas" />
        </NavLink>
        <div className="tituloPrincipal">
          <h1>favShop</h1>
        </div>
        <div className="items">
          <ul className="navBar">
            <li>
              <NavLink to="/catalogo/">
                <button>Catalogo</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/favorito">
                <button>Favoritos</button>
              </NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;
