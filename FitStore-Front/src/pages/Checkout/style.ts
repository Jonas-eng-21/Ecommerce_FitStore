import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const CartItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4040;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #ff3333;
  }
`;

export const Summary = styled.div`
  margin-top: 20px;
`;

export const UserInfo = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;

  h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
  }
`;

