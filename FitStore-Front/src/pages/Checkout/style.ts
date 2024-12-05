import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  align-items: center;
  position: relative; /* Necessário para posicionar o botão de exclusão à direita */
`;

export const CartItemImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

export const CartItemDetails = styled.div`
  flex: 1;
  p {
    margin: 5px 0;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ff1a1a;
  }
`;

export const UserInfo = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const Summary = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;
