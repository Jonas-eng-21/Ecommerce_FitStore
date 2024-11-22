import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "../pages/Home";
import CadastroCliente from "../pages/Register/CadastroCliente";
import CadastroFornecedor from "../pages/Register/CadastroFornecedor";
import CadastroFuncinoario from "../pages/Register/CadastroFuncionario";
import Cart from "../pages/Cart";
import ProtectedRoute from "./protectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "cadastroCliente", element: <CadastroCliente /> },
      { path: "CadastroFornecedor", element: <CadastroFornecedor /> },
      {
        path: "Cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "CadastroFuncinoario", element: <CadastroFuncinoario /> },
    ],
  },
]);
