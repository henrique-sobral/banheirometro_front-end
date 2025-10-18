import '../style/style.css'

function Cadastro() {


  return (
    <div id='login-pagina'>
      <h2 className='texto-principal'>Cadastro</h2>
      <div className='login-container'>
      <p className='texto login-texto'>Logue em sua conta abaixo para cadastrar sua avaliação no <span className='banheirometro'>banheirometrô.</span></p>
        <div className='login-formulario'>
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
        <p className='texto login-texto cta-cadastrar'>Não tem uma conta? <span className='destaque-cta'>Cadastre-se!</span></p>
        <button type="submit">Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
