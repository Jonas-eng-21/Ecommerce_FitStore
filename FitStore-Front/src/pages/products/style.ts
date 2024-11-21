import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const ProductCard = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductInfo = styled.div`
  padding: 10px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #28a745;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
