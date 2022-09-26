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

  const cantidadEnCarrito = () => cart.reduce((cantidadTotal, prod) => cantidadTotal + prod.cantidad, 0);

  const limpiarCarrito = () => setCart([]);

  const buscarEnCarrito = (id) => (cart.find((product) => product.id === id) ? true : false);

  const removerProducto = (id) => setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        limpiarCarrito,
        buscarEnCarrito,
        removerProducto,
        agregarProducto,
        cantidadEnCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
