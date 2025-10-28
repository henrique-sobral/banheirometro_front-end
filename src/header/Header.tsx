import '../style/style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/" className="logo-link">Banheirometrô</Link>
        </div>

        <nav className="header-nav">
          <Link to="/cadastro" className="btn btn-ghost">Criar conta</Link>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
