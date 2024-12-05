import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, CartItem, StyledButton, DeleteButton } from "./style";
import Navbar from "../../components/NavBar";

interface CartItemType {
  nome: string | null;
  preco: number | null;
  urlImagem: string | null;
  categoria: string | null;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const produto = location.state?.produto;
  
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    if (produto) {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

      
      const isItemInCart = storedCartItems.some((item: CartItemType) => item.nome === produto.nome);
      
      if (!isItemInCart) {
        const updatedItems = [...storedCartItems, produto];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        setCartItems(updatedItems);
      }
    }
  }, [produto]);

  const handleFinishPurchase = () => {
    navigate("/checkout");
  };

  const handleDeleteItem = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const formatPreco = (preco: number | null) => {
    return preco != null && !isNaN(preco) ? preco.toFixed(2) : "0.00";
  };

  const calculateTotal = () => cartItems.reduce((total, item) => total + (item.preco ?? 0), 0);

  return (
    <div>
    <Navbar/>
    <Container>
      <h1>Resumo do Carrinho</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          cartItems.map((item, index) => (
            <CartItem key={index}>
              <img
                src={item.urlImagem ?? "../../../assets/images/default-image.png"}
                alt={item.nome ?? "Produto sem nome"}
                style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "cover" }}
              />
              <div>
                <p>{item.nome}</p>
                <p>Categoria: {item.categoria}</p>
                <p>Preço: R$ {formatPreco(item.preco)}</p>
              </div>
              <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>
            </CartItem>
          ))
        )}
      </div>
      <div>
        <p>Total: R$ {formatPreco(calculateTotal())}</p>
        <StyledButton onClick={handleFinishPurchase}>Finalizar Compra</StyledButton>
      </div>
    </Container>
    </div>
  );
};

export default Cart;
