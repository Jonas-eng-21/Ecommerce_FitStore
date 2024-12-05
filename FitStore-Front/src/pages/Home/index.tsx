import React from 'react';
import {
  Container,
  HeroSection,
  CallToAction,
  Footer,
  SocialProof
} from './style';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar';

export default function Home() {
  
    return (
        <Container>
            <Navbar/>

            {/* seção meio */}
            <HeroSection>
                <div>
                    <h1>Fit Store</h1>
                    <p>
                    Tudo para seu treino, do zero ao shape! 💪🛒
                    </p>
                    <Link to="/Produtos">
                    <CallToAction>Ver Produtos</CallToAction>
                    </Link>
                    <h2>Aproveite Nossas Promoções</h2>
                    <p>Desconto em sua primeira compra e frete grátis nas compras a partir de R$199!</p>
                </div>
                <img src="assets/images/osbons.png" alt="Hero Banner" />
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
