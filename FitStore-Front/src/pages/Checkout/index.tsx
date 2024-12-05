import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, CartItem, StyledButton, DeleteButton, Summary, UserInfo } from "./style";
import Navbar from "../../components/NavBar";

interface CartItemType {
  nome: string | null;
  preco: number | null;
  urlImagem: string | null;
  categoria: string | null;
  quantidade: number;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // Supondo que você tenha uma função ou API para obter as informações do usuário logado
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  // Função para formatar o preço para exibição
  const formatPreco = (preco: number | null) => {
    return preco != null && !isNaN(preco) ? preco.toFixed(2) : "0.00";
  };

  // Função para calcular o total levando em consideração a quantidade de cada item
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.preco ?? 0) * item.quantidade;
    }, 0);
  };

  // Função para remover um item do carrinho
  const handleDeleteItem = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Função para finalizar a compra
  const handleFinishPurchase = () => {
    alert("Compra finalizada com sucesso!");
    navigate("/confirmation"); // Redireciona para uma página de confirmação de compra
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h1>Checkout</h1>

        {/* Informações do usuário */}
        <UserInfo>
          <h2>Informações do Cliente</h2>
          <p><strong>Nome:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Endereço:</strong> {userInfo.address}</p>
          <p><strong>Cidade:</strong> {userInfo.city}</p>
          <p><strong>Estado:</strong> {userInfo.state}</p>
          <p><strong>CEP:</strong> {userInfo.zip}</p>
        </UserInfo>

        {/* Resumo do pedido */}
        <Summary>
          <h2>Resumo do Pedido</h2>
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
                  <p>Preço: R$ {formatPreco(item.preco)}</p>
                  <p>Quantidade: {item.quantidade}</p>
                </div>
                <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>
              </CartItem>
            ))
          )}
        </Summary>

        {/* Total final e botão de finalizar compra */}
        <div>
          <p><strong>Total: R$ {formatPreco(calculateTotal())}</strong></p>
          <StyledButton onClick={handleFinishPurchase}>Finalizar Compra</StyledButton>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
