import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    color: #555;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const Summary = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    font-size: 1rem;
    color: #333;
    margin: 0;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;

  p {
    margin: 0;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;
