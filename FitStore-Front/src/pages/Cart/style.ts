import styled from "styled-components";

// Estilos gerais do container
export const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

// Estilo para cada item do carrinho
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  img {
    width: 200px;  /* Reduzido em 40% */
    height: auto;
    margin-right: 20px;
  }

  div {
    flex: 1;
    text-align: left;

    p {
      margin: 5px 0;
    }
  }
`;

// Estilo para o botão de deletar item do carrinho
export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3333;
  }

  &:focus {
    outline: none;
  }
`;

// Estilo para o botão "Finalizar Compra"
export const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
  }

  &:focus {
    background-color: orange;
  }
`;
