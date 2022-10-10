import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarProducto = (item, nuevaCantidad) => {
    const { cantidad = 0 } = cart.find((prod) => prod.id === item.id) || {};
    const newCart = cart.filter((prod) => prod.id !== item.id);
    setCart([...newCart, { ...item, cantidad: cantidad + nuevaCantidad }]);
  };

  const precioTotal = cart.reduce((a, b) => a + b.cantidad * b.precio, 0);

  const precioImpuesto = precioTotal * 0.75;
  const totalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

  const totalNumero = cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

  const cantidadEnCarrito = () => cart.reduce((cantidadTotal, prod) => cantidadTotal + prod.cantidad, 0);

  const limpiarCarrito = () => setCart([]);

  const buscarEnCarrito = (id) => cart.find((product) => product.id === id ? console.log(product.cantidad) : false);

  buscarEnCarrito(1145360)

  const removerProducto = (id) => setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        limpiarCarrito,
        buscarEnCarrito,
        removerProducto,
        agregarProducto,
        cantidadEnCarrito,
        precioTotal,
        totalProductos,
        cart,
        totalNumero,
        precioImpuesto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
