import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, ProductDetailsWrapper, ProductImage, ProductInfo, StyledButton } from "./style";

// Ajustando a interface para corresponder aos dados retornados pela API
interface Product {
  nome: string | null;
  preco: number | null; // Permitir que preço seja null
  urlImagem: string | null;
  categoria: string | null;
}

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const produto = location.state?.produto; // Produto é passado diretamente da navegação

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (produto) {
      // Mapeia os dados da API para o formato adequado para o componente
      setProduct({
        nome: produto.nomeProduto ?? "Nome não disponível",
        preco: produto.precoProduto ?? 0,
        urlImagem: produto.urlImagemProduto ?? "",
        categoria: produto.categoriaProduto ?? "Sem categoria",
      });
    }
  }, [produto]);

  const handleAddToCart = () => {
    navigate("/cart", { state: { produto: product } }); // Enviar `product` para o carrinho
  };

  const formatPreco = (preco: number | null) => {
    return preco != null && !isNaN(preco) ? preco.toFixed(2) : "0.00";
  };

  return (
    <Container>
      <h1>Detalhes do Produto</h1>
      {product ? (
        <ProductDetailsWrapper>
          <ProductImage
            src={product.urlImagem ?? "../../../assets/images/default-image.png"} // Garantir que a imagem exista
            alt={product.nome ?? "Produto sem nome"} // Garantir que o alt seja sempre uma string
          />
          <ProductInfo>
            <h2>{product.nome}</h2>
            <p>
              <strong>Categoria:</strong> {product.categoria}
            </p>
            <p>
              <strong>Preço:</strong> R$ {formatPreco(product.preco)}
            </p>
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
