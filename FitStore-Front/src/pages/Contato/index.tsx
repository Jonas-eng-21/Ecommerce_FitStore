import React from "react";
import { 
    Container, 
    Navbar, 
    NavLinks, 
    Footer, 
    NavActions, 
    ContactForm 
} from "./style";
import { Link } from "react-router-dom";

export default function Contato() {
    return (
        <Container>
            {/* Navbar */}
            <Navbar>
                <Link to="/home" style={{ marginTop: "-20px" }}>
                    <img 
                        src="assets/images/logo-fitstore.png" 
                        alt="Fit Store Logo" 
                        style={{ height: "50px", width: "auto" }} 
                    />
                </Link>
                <NavLinks>
                    <Link to="/home">Início</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/about">Sobre Nós</Link>
                    <Link to="/contato">Contato</Link>
                </NavLinks>
                <NavActions>
                    <Link to="/cart">
                        <button className="primary">🛒 Carrinho</button>
                    </Link>
                    <Link to="/login">
                        <button className="secondary">Login</button>
                    </Link>
                </NavActions>
            </Navbar>

            {/* Formulário de Contato */}
            <ContactForm>
                <h1>Entre em Contato</h1>
                <p>
                    Estamos aqui para ajudar! Preencha o formulário abaixo e entraremos em contato com você o mais rápido possível. 📬
                </p>
                <form>
                    <label>
                        Nome Completo:
                        <input type="text" placeholder="Digite seu nome" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" placeholder="Digite seu email" required />
                    </label>
                    <label>
                        Mensagem:
                        <textarea placeholder="Digite sua mensagem" rows={5} required></textarea>
                    </label>
                    <button type="submit" className="primary">Enviar Mensagem</button>
                </form>
            </ContactForm>

            {/* Rodapé */}
            <Footer>
                <p>Obrigado por entrar em contato com a Fit Store! 🚀</p>
            </Footer>
        </Container>
    );
}
