import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #eadbd8;
  border-radius: 10px;
  box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.75);
  padding: 5%;
`;
export const InputForm = styled.input`
  width: 90%;
  margin: 10px;
`;
export const ButtonForm = styled.button`
  width: 100%;
`;
export const ErrorLabel = styled.p`
  font-size: small;
  color: red;
  margin-top: -3%;
`;
export const SelectForm = styled.select`
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 0.4em;
  font-size: 1em;
  margin-top: 0.5em;
`;