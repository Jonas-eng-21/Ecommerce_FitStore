import React from 'react';
import {
  Container,
  Navbar,
  Logo,
  NavLinks,
  HeroSection,
  CallToAction,
  Footer,
  SocialProof,
  NavActions
} from './style';

export default function Home() {
    return (
        <Container>
            {/* Navbar */}
            <Navbar>
                <Logo>Fit Store</Logo>
                <NavLinks>
                    <a href="#page1">Início</a>
                    <a href="#page2">Produtos</a>
                    <a href="#page3">Sobre Nós</a>
                    <a href="#page4">Contato</a>
                </NavLinks>
                <NavActions>
                    <button className="primary">Carrinho 🛒</button>
                    <button className="secondary">Login</button>
                </NavActions>
            </Navbar>

            {/* seção meio */}
            <HeroSection>
                <div>
                    <h1>Fit Store</h1>
                    <p>
                    Tudo para seu treino, do começo ao topo! 💪🛒
                    </p>
                    <CallToAction>Ver Produtos</CallToAction>
                </div>
                <img src="assets/images/default-image.png" alt="Hero Banner" />
            </HeroSection>

            {/* seção redes sociais */}
            <SocialProof>
                <p>Nos siga nas rede sociais!</p>
                <div className="logos">
                    <img src="assets/images/instagram1.png" alt="Hero Banner" />
                    <img src="assets/images/instagram1.png" alt="Hero Banner" />
                    <img src="assets/images/instagram1.png" alt="Hero Banner" />
                </div>
            </SocialProof>

            {/* Rodape */}
            <Footer>
                <p>Tem alguma dúvida? <a href="#contact">Entre em contato conosco</a></p>
            </Footer>
        </Container>
    );
}
