import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, ProductDetailsWrapper, ProductImage, ProductInfo, StyledButton } from "./style";
import Navbar from "../../components/NavBar";


interface Product {
  nome: string | null;
  preco: number | null;
  urlImagem: string | null;
  categoria: string | null;
}

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const produto = location.state?.produto;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (produto) {
      setProduct({
        nome: produto.nomeProduto ?? "Nome não disponível",
        preco: produto.precoProduto ?? 0,
        urlImagem: produto.urlImagemProduto ?? "",
        categoria: produto.categoriaProduto ?? "Sem categoria",
      });
    }
  }, [produto]);

  const handleAddToCart = () => {
    // Adiciona diretamente no localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const isItemInCart = storedCartItems.some((item: Product) => item.nome === product?.nome);

    if (!isItemInCart && product) {
      const updatedItems = [...storedCartItems, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    }
    navigate("/cart");
  };

  const formatPreco = (preco: number | null) => {
    return preco != null && !isNaN(preco) ? preco.toFixed(2) : "0.00";
  };

  return (
    <div>
      <Navbar />  {/* Colocando o Navbar acima do container */}
      <Container>
        <h1>Detalhes do Produto</h1>
        {product ? (
          <ProductDetailsWrapper>
            <ProductImage
              src={product.urlImagem ?? "../../../assets/images/default-image.png"}
              alt={product.nome ?? "Produto sem nome"}
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
    </div>
  );
};

export default ProductDetails;
