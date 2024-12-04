import { Container, Footer, HeroSection } from "./style";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";

export default function About() {
  return (
    <Container>
      <Navbar />

      {/* Seção principal */}
      <HeroSection>
        <div>
          <h1>Sobre Nós</h1>
          <p>
            Na Fit Store, somos apaixonados por ajudar você a atingir seus
            objetivos de saúde e bem-estar. Desde a nossa fundação, buscamos
            oferecer os melhores produtos de treino, vestuário e suplementos
            para apoiar seu progresso. 💪
          </p>
          <h2>Por que escolher a Fit Store?</h2>
          <ul style={{ color: "#fff", lineHeight: "1.8" }}>
            <li>🏆 Produtos de alta qualidade</li>
            <li>🚚 Frete rápido e confiável</li>
            <li>💡 Dicas e suporte personalizado</li>
          </ul>
          <p>
            Nossa missão é garantir que cada cliente encontre exatamente o que
            precisa para superar seus limites e conquistar seus sonhos.
          </p>
        </div>
        <img
          src="assets/images/default-image.png"
          alt="Equipe Fit Store"
          style={{ borderRadius: "10px" }}
        />
      </HeroSection>

      {/* Rodapé */}
      <Footer>
        <p>
          Quer saber mais? <Link to="/contato">Entre em contato conosco!</Link>
        </p>
      </Footer>
    </Container>
  );
}
