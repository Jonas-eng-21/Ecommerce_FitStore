import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "../pages/Home";
import About from "../pages/About";
import Contato from "../pages/Contato";
import CadastroCliente from "../pages/Register/CadastroCliente";
import CadastroFornecedor from "../pages/Register/CadastroFornecedor";
import CadastroFuncinoario from "../pages/Register/CadastroFuncionario";
import Cart from "../pages/Cart";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "../pages/Login";
import Produtos from "../pages/Produto";
import CidadeList from "../pages/ValidationsPreRegister/CidadeList";
import CidadeRegister from "../pages/ValidationsPreRegister/CidadeRegister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "cadastroCliente", element: <CadastroCliente /> },
      { path: "CadastroFornecedor", element: <CadastroFornecedor /> },
      { path: "CadastroFuncionario", element: <CadastroFuncinoario /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contato", element: <Contato /> },
      { path: "Produtos", element: <Produtos /> },
      { path: "Login", element: <LoginPage /> },
      { path: "cidadeList", element: <CidadeList /> },
      { path: "cidadeRegister", element: <CidadeRegister /> },
      {
        path: "Cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
