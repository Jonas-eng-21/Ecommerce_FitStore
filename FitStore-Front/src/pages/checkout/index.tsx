import { useState } from "react";
import {
  CheckoutContainer,
  Section,
  Title,
  Form,
  InputGroup,
  Summary,
  SummaryItem,
  Total,
  SubmitButton,
} from "./style";

export default function Checkout() {
  const cartItems = [
    { id: 1, name: "Produto 1", price: 50.0, quantity: 2 },
    { id: 2, name: "Produto 2", price: 30.0, quantity: 1 },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pedido finalizado:", formData);
    alert("Compra finalizada com sucesso!");
  };

  return (
    <CheckoutContainer>
      <Section>
        <Title>Informações do Cliente</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="zip">CEP</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form>
      </Section>
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
        <SubmitButton onClick={handleSubmit}>Finalizar Compra</SubmitButton>
      </Section>
    </CheckoutContainer>
  );
}
