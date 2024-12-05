import React from "react";
import { useLocation } from "react-router-dom";
import {
  CheckoutContainer,
  Section,
  SectionTitle,
  InfoBox,
  OrderSummary,
  TotalPrice,
  ConfirmButton,
  Title,
} from "./style";

interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

interface CheckoutState {
  user: {
    name: string;
    email: string;
    address: string;
  };
  cartItems: CartItem[];
}

const Checkout: React.FC = () => {
  const location = useLocation();
  const state = location.state as CheckoutState;

  const { user, cartItems } = state;

  const total = cartItems.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const handleConfirmPurchase = () => {
    alert("Compra finalizada com sucesso!");
    console.log("Dados do pedido:", { user, cartItems, total });
  };

  return (
    <CheckoutContainer>
      <Title>Checkout</Title>

      <Section>
        <SectionTitle>Informações do Cliente</SectionTitle>
        <InfoBox>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Endereço: {user.address}</p>
        </InfoBox>
      </Section>

      <Section>
        <SectionTitle>Resumo do Pedido</SectionTitle>
        <OrderSummary>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>
                {item.nome} x {item.quantidade}
              </p>
              <p>R$ {(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
          ))}
        </OrderSummary>
        <TotalPrice>Total: R$ {total.toFixed(2)}</TotalPrice>
      </Section>

      <ConfirmButton onClick={handleConfirmPurchase}>
        Confirmar Compra
      </ConfirmButton>
    </CheckoutContainer>
  );
};

export default Checkout;
