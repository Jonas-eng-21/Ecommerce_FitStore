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
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleDirect = () => {
        navigate('/carrinho');
    }
    return (
        <Container>
            {/* Navbar */}
            <Navbar>
                <Link to="/home" style={{marginTop: '-20px'}}>
                <img src="assets\images\logo-fitstore.png" alt="Fit Store Logo" style={{ height: '50px', width: 'auto' }} />
                </Link>
                <NavLinks>
                    <Link to="/home">Início </Link>
                    <Link to="/produto">Produtos</Link>
                    <Link to="/about">Sobre Nós</Link>
                    <Link to="/contato">Contato</Link>
                </NavLinks>
                <NavActions>
                    <Link to="/carrinho">
                    <button className="primary" onClick={handleDirect}>🛒 Carrinho</button>
                    </Link>
                    <Link to="/login">
                    <button className="secondary">Login</button>
                    </Link>
                </NavActions>
            </Navbar>

            {/* seção meio */}
            <HeroSection>
                <div>
                    <h1>Fit Store</h1>
                    <p>
                    Tudo para seu treino, do zero ao shape! 💪🛒
                    </p>
                    <Link to="/produto">
                    <CallToAction>Ver Produtos</CallToAction>
                    </Link>
                    <h2>Aproveite Nossas Promoções</h2>
                    <p>Desconto em sua primeira compra e frete grátis nas compras a partir de R$199!</p>
                </div>
                <img src="assets/images/default-image.png" alt="Hero Banner" />
            </HeroSection>

            {/* seção redes sociais */}
            <SocialProof>
                <p>Nos siga nas rede sociais!</p>
                <div className="logos">
                    <Link to="https://www.instagram.com/fittttt_storeeeee" target='_blank' rel='noopener noreferrer' style={{ height: '30px', width: 'auto' }}>
                    <img src="assets/images/instagram.png" alt="Hero Banner" />
                    </Link>
                    
                    <Link to="https://github.com/Jonas-eng-21/Ecommerce_FitStore" target='_blank' rel='noopener noreferrer' style={{ height: '30px', width: 'auto' }}>
                    <img src="assets/images/github.png" alt="Hero Banner" />
                    </Link>

                    <Link to="https://www.x.com" target='_blank' rel='noopener noreferrer' style={{ height: '30px', width: 'auto' }}>
                    <img src="assets/images/X.png" alt="Hero Banner" />
                    </Link>

                </div>
            </SocialProof>

            {/* Rodape */}
            <Footer>
                <p>Tem alguma dúvida? <a href="#contact">Entre em contato conosco</a></p>
            </Footer>
        </Container>
    );
}
