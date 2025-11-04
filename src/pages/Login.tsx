import '../style/style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });


  return (
    <div id='login-pagina'>
      <h2 className='texto-principal'>Login</h2>
      <div className='login-container'>
      <p className='texto login-texto'>Logue em sua conta abaixo para cadastrar sua avaliação no <span className='banheirometro'>banheirometrô.</span></p>
        <form className='login-formulario' onSubmit={(e) => {
          e.preventDefault();
          // Aqui você deve implementar sua lógica real de autenticação
          localStorage.setItem('token', 'dummy-token'); // Substitua por token real
          navigate('/'); // Redireciona para a home após login
          window.location.reload(); // Força atualização para Header reconhecer login
        }}>
        <div className='login-formulario-conteudo'>
          <label>Usuário:</label>
          <input
            type="text"
            required
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
        </div>
        <div className='login-formulario-conteudo'>
          <label>Senha:</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <p className='texto login-texto cta-cadastrar'>Não tem uma conta? <span className='destaque-cta'><Link to={'/cadastro'}>Cadastre-se</Link></span></p>
        <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
