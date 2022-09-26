import { useCartContext } from "../../CartProvider";

const Cart = () => {
  const { cantidadEnCarrito } = useCartContext();

  const itemsInCart = cantidadEnCarrito();
  return (
    <div>
      <h1 style={{fontSize: "8rem"}}>{itemsInCart}</h1>
    </div>
  )
};

export default Cart;
