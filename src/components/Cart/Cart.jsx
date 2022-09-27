import { useCartContext } from "../../CartProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, precioTotal } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <h1>No hay elementos en el carrito</h1>
        <Link to="/catalogo/">
          <button>Hacer compras</button>
        </Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <p>Precio total: AR${precioTotal}</p>
    </>
  );
};

export default Cart;
