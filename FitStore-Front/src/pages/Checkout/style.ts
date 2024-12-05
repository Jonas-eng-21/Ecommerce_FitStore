import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 3px solid #007bff;
  padding-bottom: 8px;
`;

export const InfoBox = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;

  p {
    margin: 10px 0;
    font-size: 1.1rem;
    color: #555;
  }
`;

export const OrderSummary = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    p {
      margin: 0;
      font-size: 1.1rem;
      color: #555;
    }

    strong {
      font-size: 1.2rem;
      color: #333;
    }
  }
`;

export const TotalPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: right;
  color: #28a745;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  max-width: 350px;
  margin: 30px auto 0;
  display: block;
  padding: 12px 25px;
  font-size: 1.1rem;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #007bff;
  font-weight: 600;
`;
