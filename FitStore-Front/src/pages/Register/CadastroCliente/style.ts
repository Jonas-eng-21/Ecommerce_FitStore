import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #6e6e6e;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .CardContainer {
    width: 95%;
  }
`;

export const ContainerForm = styled.div`
  width: 90%;
  height: 80vh;
  margin: 2rem auto;
  border-radius: 8px;
  padding: 2rem;
`;

export const ButtonSubmit = styled.button`
  width: 44%;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 25px;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2%;
  justify-content: center;
  cursor: pointer;
  margin-left: 28%;

  &:hover {
    background-color: #6e6e6e;
  }
`;

export const ContainerTextField = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  margin-top: 2%;
  gap: 3%;
`;
