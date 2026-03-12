import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação do Contexto de Autenticação
import { AuthProvider } from './assets/contexts/AuthContext';

// Importação das Páginas
import Login from './assets/Pages/Login'; // Ajuste se o nome do seu arquivo de login for diferente
import Dashboard from './assets/Pages/Dashboard'; // Essa é a tela de "Início" (Ajuste o nome se necessário)
import Produtos from './assets/Pages/Produtos';

// NOVA IMPORTAÇÃO: TELA DE CLIENTES
import Clientes from './assets/Pages/Clientes';
import Vendas from './assets/Pages/Vendas';
import Relatorios from './assets/Pages/relatorios';
// Se vocês usam um componente de "Rota Privada" para bloquear quem não está logado, 
// ele seria importado aqui. (Ex: import PrivateRoute from './components/PrivateRoute')

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/clientes" element={<Clientes />} />
          
          {/* === ROTA DE VENDAS === */}
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/relatorios" element={<Relatorios />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}