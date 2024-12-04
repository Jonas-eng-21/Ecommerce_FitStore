import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, ProductDetailsWrapper, ProductImage, ProductInfo, StyledButton } from "./style";

interface Product {
  nome: string;
  preco: number;
  urlImagem: string;
  categoria: string;
}

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const produto = location.state?.produto as Product;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (produto) {
      setProduct(produto);
    }
  }, [produto]);

  const handleAddToCart = () => {
    // Navegar para a página do carrinho
    navigate("/cart", { state: { produto } });
  };

  return (
    <Container>
      <h1>Detalhes do Produto</h1>
      {product ? (
        <ProductDetailsWrapper>
          <ProductImage src={product.urlImagem} alt={product.nome} />
          <ProductInfo>
            <h2>{product.nome}</h2>
            <p><strong>Categoria:</strong> {product.categoria}</p>
            <p><strong>Preço:</strong> R${product.preco.toFixed(2)}</p>
            <StyledButton onClick={handleAddToCart}>Adicionar ao Carrinho</StyledButton>
          </ProductInfo>
        </ProductDetailsWrapper>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </Container>
  );
};

export default ProductDetails;
