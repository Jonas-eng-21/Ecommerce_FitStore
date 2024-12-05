import { Link } from "react-router-dom";
import { NavbarContainer, NavLinks, NavActions } from "./style";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../contexts/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  console.log("Estado do usuário na Navbar:", user);

  return (
    <NavbarContainer>
      <Link to="/home" style={{ marginTop: "-20px" }}>
        <img
          src="assets/images/logo-fitstore.png"
          alt="Fit Store Logo"
          style={{ height: "50px", width: "auto" }}
        />
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
        {user ? (
          <button
            className="secondary"
            onClick={logout}
            style={{ display: "flex", alignItems: "center" }}
          >
            Logout
            <LogoutIcon />
          </button>
        ) : (
          <Link to="/login">
            <button
              className="secondary"
              style={{ display: "flex", alignItems: "center" }}
            >
              Login
              <LoginIcon />
            </button>
          </Link>
        )}
      </NavActions>
    </NavbarContainer>
  );
}
