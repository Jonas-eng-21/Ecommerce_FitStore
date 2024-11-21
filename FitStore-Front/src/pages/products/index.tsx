import { useState } from "react";
import {
  ProductsContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
} from "./style";

export default function Products() {
const [products] = useState([
    {
      id: 1,
      name: "Produto 1",
      price: 50.0,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Produto 2",
      price: 30.0,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Produto 3",
      price: 20.0,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Produto 4",
      price: 80.0,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const addToCart = (productId: number) => {
    alert(`Produto com ID ${productId} adicionado ao carrinho!`);
   
  };

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
            <AddToCartButton onClick={() => addToCart(product.id)}>
              Adicionar ao Carrinho
            </AddToCartButton>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
}
