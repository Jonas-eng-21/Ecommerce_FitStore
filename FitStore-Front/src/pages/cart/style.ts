import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CartList = styled.div`
  margin-top: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  button {
    background: #ff5252;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #e44e4e;
    }
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #0056b3;
    }
  }

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 20px;
  text-align: right;

  h3 {
    font-size: 1.5rem;
    color: #333;
  }
`;

export const CartButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background: #28a745;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #218838;
  }
`;
