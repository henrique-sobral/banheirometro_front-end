import '../style/style.css'
import { Link } from 'react-router-dom';

function Cadastro() {


  return (
    <div id='login-pagina'>
      <h2 className='texto-principal'>Cadastre-se</h2>
      <div className='login-container'>
      <p className='texto login-texto'>Cadastre suas informações abaixo para conseguir avaliar no <span className='banheirometro'>banheirometrô.</span></p>
        <div className='login-formulario'>
        <div className='login-formulario-conteudo'>
          <label>Nome:</label>
          <input
            type="text"
            required
          />
        </div>
        <div className='login-formulario-conteudo'>
          <label>Usuário:</label>
          <input
            type="text"
            required
          />
        </div>
        <div className='login-formulario-conteudo'>
          <label>Senha:</label>
          <input
            type="password"
            required
          />
        </div>
        <p className='texto login-texto cta-cadastrar'>Já tem uma conta? <span className='destaque-cta'><Link to={'/login'}>Entrar</Link></span></p>
        <button type="submit">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
