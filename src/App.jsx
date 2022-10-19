import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/index";
import "./assets/css/globals.css";
import ItemListContainer from "./components/Items/ItemListContainer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Items/ItemDetailContainer/index";
import Favoritos from "./Pages/Favoritos";
import CartProvider from "./CartProvider";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo/" element={<ItemListContainer />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/categoria/productos/:itemId" />
            <Route path="/categoria/productos/detalles/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/categoria/:favorito" element={<Favoritos />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnHover={true}
        theme="light"
      />
    </div>
  );
}

export default App;
