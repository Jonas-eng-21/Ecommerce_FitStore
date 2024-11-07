import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./CartButton.css"; // Arquivo de estilo opcional

const CartButton: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <button className="cart-button">
      🛒 <span>{cartItems.length}</span>
    </button>
  );
};

export { CartButton };
