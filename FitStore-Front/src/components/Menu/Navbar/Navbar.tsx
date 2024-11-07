import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { CartButton } from "../Cart/CartButton";
import "./Navbar.css"; // Arquivo de estilo opcional

const Navbar: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>Minha Loja</h1>
      <div className="cart-icon">
        <span role="img" aria-label="cart">🛒</span>
        <span className="cart-count">{cartItems.length}</span>
      </div>
      <CartButton />
    </nav>
  );
};

export default Navbar;
