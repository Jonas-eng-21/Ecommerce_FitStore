import styled from "styled-components";

// Estilos gerais do container
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative; /* Para permitir que o botão delete fique posicionado no canto direito */

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    max-width: 180px;
    height: auto;
    margin-bottom: 15px;
    border-radius: 5px;
  }

  div {
    text-align: left;

    p {
      margin: 5px 0;
      font-size: 16px;
      color: #333;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    img {
      margin-right: 20px;
    }

    div {
      text-align: left;
    }
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* Aqui é onde o botão vai para o canto direito */
  top: 10px;
  right: 10px;

  &:hover {
    background-color: #e44d4d;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  display: block;
  background-color: #000000;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000000;
  }

  &:focus {
    background-color: #ffa500;
  }
`;

export const EmptyCartText = styled.p`
  font-size: 18px;
  color: #777;
  font-weight: bold;
  margin-top: 40px;
`;
