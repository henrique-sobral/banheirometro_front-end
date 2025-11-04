import '../style/style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simular verificação de login - Você deve substituir isso pela sua lógica real de autenticação
  useEffect(() => {
    // Aqui você deve implementar sua lógica real de verificação de login
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token'); // ou sua lógica de verificação
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/" className="logo-link">Banheirometrô</Link>
        </div>

        <nav className="header-nav">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="btn btn-ghost">Meu Perfil</Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('token'); // ou sua lógica de logout
                  setIsLoggedIn(false);
                }} 
                className="btn btn-primary"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/cadastro" className="btn btn-ghost">Criar conta</Link>
              <Link to="/login" className="btn btn-primary">Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
