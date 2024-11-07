import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Navbar.css";
function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>Minha Loja</h1>
      <div className="cart-icon">
        <span role="img" aria-label="cart">🛒</span>
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </nav>
  );
}

export default Navbar;
