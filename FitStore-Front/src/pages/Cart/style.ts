import styled from "styled-components";

// Estilos para o Container principal do Carrinho
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
`;

// Estilos para cada item no Carrinho
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  img {
    border-radius: 8px;
    margin-right: 15px;
  }

  div {
    flex-grow: 1;
  }

  p {
    margin: 5px 0;
  }
`;

// Estilo para o botão de deletar
export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

// Estilo para o botão de "Finalizar Compra"
export const StyledButton = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

// Estilo para os títulos do carrinho
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

// Estilos para o total de preços
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-top: 20px;
`;

export const TotalText = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #333;
`;

