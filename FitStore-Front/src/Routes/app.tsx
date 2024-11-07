import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CadastroCliente from '../pages/Register/CadastroCliente';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
