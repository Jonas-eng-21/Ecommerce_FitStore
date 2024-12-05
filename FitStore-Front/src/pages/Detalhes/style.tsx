import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  background-color: #333;  // ou outra cor desejada
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

export const ProductDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 80%;
  max-width: 1000px;
`;

// Estilo para a imagem do produto
export const ProductImage = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
  border-radius: 8px;
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
    width: 200px;
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

export const ProductInfo = styled.div`
  flex: 1;
  text-align: left;

  h2 {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
  }

  p strong {
    font-weight: bold;
  }
`;

// Estilo para o botão de deletar
export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  font-size: 14px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: darkred;
  }
`;

// Estilo para o botão de finalizar compra
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
