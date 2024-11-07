import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CadastroCliente from '../pages/Register/CadastroCliente';
import CadastroFornecedor from '../pages/Register/CadastroFornecedor';
import CadastroFuncinoario from '../pages/Register/CadastroFuncionario';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastroCliente" element={<CadastroCliente />} />
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
        <Route path="/CadastroFuncinoario" element={<CadastroFuncinoario />} />
      </Routes>
    </Router>
  );
}

export default App;
