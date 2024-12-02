import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #6e6e6e;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const ContactForm = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 2rem auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e293b;
  }

  p {
    color: #000;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .TextField {
      width: 100%;
    }

    .buttonLogin {
      width: 100%;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: 1rem;
      color: #1e293b;
    }

    button {
      background-color: #000;
      color: #fff;
      border: none;
      padding: 0.75rem;
      border-radius: 25px;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background-color: #6e6e6e;
      }
    }
  }
`;

export const ContainerSignUp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3%;
  margin-top: 2%;

  .textSignUp{
  }

  .buttonSignUp {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.75rem;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #6e6e6e;
      }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #6e6e6e;
  color: #fff;

  p {
    color: #f5f5f5;
    font-size: 0.875rem;

    a {
      color: #38bdf8;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
