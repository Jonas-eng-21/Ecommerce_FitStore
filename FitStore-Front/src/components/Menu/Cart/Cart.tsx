import React from "react";
import { CartItem } from "./types";

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart, clearCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.product.id} className="cart-item">
              <span>{item.product.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.product.price * item.quantity}</span>
              <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
