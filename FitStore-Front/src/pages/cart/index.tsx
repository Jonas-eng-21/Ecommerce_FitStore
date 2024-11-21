import { useState } from "react";
import {
  CartContainer,
  CartButton,
  CartList,
  CartItem,
  ItemDetails,
  QuantityControls,
  TotalContainer,
} from "./style";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Produto 1", price: 50.0, quantity: 2 },
    { id: 2, name: "Produto 2", price: 30.0, quantity: 1 },
    { id: 3, name: "Produto 3", price: 70.0, quantity: 1 },
  ]);

  // Funções para manipular o carrinho
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calcular o total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <h2>Seu Carrinho</h2>
      <CartList>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemDetails>
              <p>{item.name}</p>
              <p>R$ {item.price.toFixed(2)}</p>
            </ItemDetails>
            <QuantityControls>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </QuantityControls>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </CartItem>
        ))}
      </CartList>
      <TotalContainer>
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <CartButton>Finalizar Compra</CartButton>
      </TotalContainer>
    </CartContainer>
  );
}
