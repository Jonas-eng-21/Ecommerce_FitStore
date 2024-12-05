import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, CartItem, StyledButton, DeleteButton, Summary, UserInfo } from "./style";
import Navbar from "../../components/NavBar";
import { AxiosError } from "axios"; 
import { cadastrarVendaAPI } from "../../services/vendaService";
import { toast } from "react-toastify";

interface CartItemType {
  nome: string | null;
  preco: number | null;
  urlImagem: string | null;
  categoria: string | null;
  quantidade: number;
  id: number; 
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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const formatPreco = (preco: number | null) => {
    return preco != null && !isNaN(preco) ? preco.toFixed(2) : "0.00";
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.preco ?? 0) * item.quantidade;
    }, 0);
  };

  const handleDeleteItem = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleFinishPurchase = async () => {
    const itensVenda = cartItems.map(item => ({
      produtoId: item.id, 
      quantidade: item.quantidade,
      valor: (item.preco ?? 0) * item.quantidade, 
    }));

    const payload = {
      itensVenda: itensVenda,
    };

    try {
      const response = await cadastrarVendaAPI(payload);
      if (response) {
        toast.success("Compra finalizada com sucesso!");
        navigate("/confirmation"); 
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const message = error.response.data.message || "Erro ao finalizar a compra.";
        alert(message);
        console.error("Erro ao finalizar a compra:", message);
      } else {
        alert("Ocorreu um erro inesperado. Tente novamente.");
        console.error("Erro inesperado:", error);
      }
    }
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
