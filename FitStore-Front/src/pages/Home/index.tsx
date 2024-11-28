import React from 'react';
import {
  Container,
  Navbar,
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
                <a href="#home" style={{marginTop: '-20px'}}>
                <img src="assets\images\logo-fitstore.png" alt="Fit Store Logo" style={{ height: '50px', width: 'auto' }} />
                </a>
                <NavLinks>
                    <a href="#home">Início</a>
                    <a href="#produto">Produtos</a>
                    <a href="#sobrenos">Sobre Nós</a>
                    <a href="#contato">Contato</a>
                </NavLinks>
                <NavActions>
                    <button className="primary">🛒 Carrinho</button>
                    <button className="secondary">Login</button>
                </NavActions>
            </Navbar>

            {/* seção meio */}
            <HeroSection>
                <div>
                    <h1>Fit Store</h1>
                    <p>
                    Tudo para seu treino, do zero ao shape! 💪🛒
                    </p>
                    <a href="#produtos">
                    <CallToAction>Ver Produtos</CallToAction>
                    </a>
                    <h2>Aproveite Nossas Promoções</h2>
                    <p>Desconto em sua primeira compra e frete grátis nas compras a partir de R$199!</p>
                </div>
                <img src="assets/images/default-image.png" alt="Hero Banner" />
            </HeroSection>

            {/* seção redes sociais */}
            <SocialProof>
                <p>Nos siga nas rede sociais!</p>
                <div className="logos">
                    <a href="https://www.instagram.com/fittttt_storeeeee" target='_blank' rel='noopener noreferrer'>
                    <img src="assets/images/instagram1.png" alt="Hero Banner" />
                    </a>
                    <a href="https://github.com/Jonas-eng-21/Ecommerce_FitStore" target='_blank' rel='noopener noreferrer'>
                    <img src="assets/images/github.png" alt="Hero Banner" />
                    </a>
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
