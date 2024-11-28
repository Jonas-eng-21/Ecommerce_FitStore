import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "../pages/Home";
import CadastroCliente from "../pages/Register/CadastroCliente";
import CadastroFornecedor from "../pages/Register/CadastroFornecedor";
import CadastroFuncinoario from "../pages/Register/CadastroFuncionario";
import Cart from "../pages/Cart";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "cadastroCliente", element: <CadastroCliente /> },
      { path: "CadastroFornecedor", element: <CadastroFornecedor /> },
      { path: "CadastroFuncinoario", element: <CadastroFuncinoario /> },
      { path: "Home", element: <Home /> },
      { path: "Login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
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
