import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/index";
import "./assets/css/styles.css";
import ItemListContainer from "./components/Items/ItemListContainer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Items/ItemDetailContainer/index";
import Favoritos from "./Pages/Favoritos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/catalogo/" element={<ItemListContainer />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/categoria/productos/:itemId" />
          <Route path="/categoria/productos/detalles/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/categoria/:favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
