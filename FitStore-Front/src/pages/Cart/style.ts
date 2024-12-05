import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  background-color: #333;
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
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

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
