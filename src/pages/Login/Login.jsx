import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
      <div>
        <div className="login">
        <div className="left">
          <h2>Bem vindo</h2>
          <p>Faça seu login aqui!</p>
        </div>
        <div className="right">
          <div className="inputs">
            <h1>Login</h1>
            <form action="#" method="post" className='formulario'>
              <label>Nome
                <input type="text" 
                name="nome_completo" 
                placeholder="Nome"/> 
              </label>
              <label>Senha
                <input type="password" 
                  name="pass" 
                  placeholder="Senha"/> 
              </label>
            </form>
            <Link to="/home">Login</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Login