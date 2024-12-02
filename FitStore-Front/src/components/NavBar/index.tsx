import { Link } from 'react-router-dom';
import { NavbarContainer, NavLinks, NavActions } from '../../components/Navbar/style';


export default function Navbar() {
    return (
        <NavbarContainer>
            <Link to="/home" style={{ marginTop: '-20px' }}>
                <img src="assets/images/logo-fitstore.png" alt="Fit Store Logo" style={{ height: '50px', width: 'auto' }} />
            </Link>
            <NavLinks>
                <Link to="/home">Início</Link>
                <Link to="/Produtos">Produtos</Link>
                <Link to="/about">Sobre Nós</Link>
                <Link to="/contato">Contato</Link>
            </NavLinks>
            <NavActions>
                <Link to="/Cart">
                    <button className="primary">🛒 Carrinho</button>
                </Link>
                <Link to="/login">
                    <button className="secondary">Login</button>
                </Link>
            </NavActions>
        </NavbarContainer>
    );
}
