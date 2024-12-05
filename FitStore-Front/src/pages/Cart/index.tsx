import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, CartItem, StyledButton, DeleteButton } from "./style";

// Ajustando a interface para corresponder aos dados retornados pela API
interface CartItemType {
  nome: string | null;
  preco: number | null;
  urlImagem: string | null;
  categoria: string | null;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const produto = location.state?.produto; // Produto é passado diretamente da navegação

  const [cartItem, setCartItem] = useState<CartItemType | null>(null);

  useEffect(() => {
    if (produto) {
      // Mapeia os dados da API para o formato adequado para o carrinho
      setCartItem({
        nome: produto.nomeProduto ?? "Nome não disponível",
        preco: produto.precoProduto ?? 0,
        urlImagem: produto.urlImagemProduto ?? "../../../assets/images/default-image.png", // Imagem padrão se não houver
        categoria: produto.categoriaProduto ?? "Sem categoria",
      });
    }
  }, [produto]);

  const handleFinishPurchase = () => {
    navigate("/checkout"); // Navegar para a página de checkout
  };

  const handleDeleteItem = () => {
    setCartItem(null); // Remover item do carrinho
  };

  const formatPreco = (preco: number | null) => {
    return preco != null && !isNaN(preco) ? preco.toFixed(2) : "0.00"; // Garantir formato válido
  };

  return (
    <Container>
      <h1>Resumo do Carrinho</h1>
      <div>
        {cartItem === null ? (
          <p>Carrinho vazio</p>
        ) : (
          <CartItem>
            <img
              src={cartItem.urlImagem ?? "../../../assets/simages/default-image.png"} // Usando a URL da imagem (ou imagem padrão)
              alt={cartItem.nome ?? "Produto sem nome"} // Garantindo que 'alt' seja uma string válida
            />
            <div>
              <p>{cartItem.nome}</p>
              <p>Categoria: {cartItem.categoria}</p>
              <p>Preço: R$ {formatPreco(cartItem.preco)}</p>
            </div>
            <DeleteButton onClick={handleDeleteItem}>X</DeleteButton>
          </CartItem>
        )}
      </div>
      <div>
        <p>Total: R$ {formatPreco(cartItem?.preco ?? null)}</p>
        <StyledButton onClick={handleFinishPurchase}>Finalizar Compra</StyledButton>
      </div>
    </Container>
  );
};

export default Cart;
