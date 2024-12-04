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

  .BoxContainer {
    width: 90%;
    background-color: #ffffff;
    margin: 2rem auto;
    padding: 2%;
  }

  .textH1 {
    color: black;
  }

  .ContainerButton{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
