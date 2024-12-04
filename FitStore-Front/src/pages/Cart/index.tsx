import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, CartItem, StyledButton, DeleteButton } from "./style";

interface CartItemType {
  nome: string;
  preco: number;
  urlImagem: string;
  categoria: string;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const produto = location.state?.produto;

  const [cartItem, setCartItem] = useState<CartItemType | null>(null);

  useEffect(() => {
    if (produto) {
      setCartItem(produto);
    }
  }, [produto]);

  const total = cartItem ? cartItem.preco : 0;

  const handleFinishPurchase = () => {
    navigate("/checkout");
  };

  const handleDeleteItem = () => {
    setCartItem(null);
  };

  return (
    <Container>
      <h1>Resumo do Carrinho</h1>
      <div>
        {cartItem === null ? (
          <p>Carrinho vazio</p>
        ) : (
          <CartItem>
            <img src={cartItem.urlImagem} alt={cartItem.nome} />
            <div>
              <p>{cartItem.nome}</p>
              <p>Categoria: {cartItem.categoria}</p>
              <p>Preço: R${cartItem.preco.toFixed(2)}</p>
            </div>
            <DeleteButton onClick={handleDeleteItem}>X</DeleteButton>
          </CartItem>
        )}
      </div>
      <div>
        <p>Total: R$ {total.toFixed(2)}</p>
        <StyledButton onClick={handleFinishPurchase}>Finalizar Compra</StyledButton>
      </div>
    </Container>
  );
};

export default Cart;
