import React, { useState } from "react";
import {
  CheckoutContainer,
  Section,
  Title,
  Summary,
  SummaryItem,
  Total,
  SubmitButton,
} from "./style";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems] = useState<CartItem[]>([
    { id: 1, name: "Produto 1", price: 50.0, quantity: 2 },
    { id: 2, name: "Produto 2", price: 30.0, quantity: 1 },
  ]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleFinishPurchase = () => {
    // Função para finalizar a compra (aqui você pode adicionar lógica para enviar os dados)
    alert("Compra finalizada com sucesso!");
  };

  return (
    <CheckoutContainer>
      <Section>
        <Title>Resumo do Pedido</Title>
        <Summary>
          {cartItems.map((item) => (
            <SummaryItem key={item.id}>
              <p>{item.name} x {item.quantity}</p>
              <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
            </SummaryItem>
          ))}
          <Total>
            <p>Total:</p>
            <p>R$ {total.toFixed(2)}</p>
          </Total>
        </Summary>
      </Section>
      <Section>
        <SubmitButton onClick={handleFinishPurchase}>
          Finalizar Compra
        </SubmitButton>
      </Section>
    </CheckoutContainer>
  );
};

export default Cart;
