import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 1.1rem;
    color: #555;
  }

  input {
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;

    &:focus {
      border-color: #007bff;
    }
  }
`;

export const Summary = styled.div`
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  p {
    font-size: 1rem;
    color: #555;
    margin: 0;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 20px;

  p {
    margin: 0;
    color: #333;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 1.2rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #b2d8b5;
    cursor: not-allowed;
  }
`;
