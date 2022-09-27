import './Cadastro.css'
import Button from '../../components/button.jsx';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Cadastro() {

  const [nome, setNome]=useState('')
  const [pass, setPass]=useState('')

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
            
              <label>Nome de usuario
                <input type="text"
                  placeholder="Nome de usuario"
                  value={nome} 
                  onChange={(e)=>setNome(e.target.value)} />
              </label>
              <label>Senha
                <input type="password" 
                  name="pass" 
                  placeholder="Senha"
                  value={pass} 
                  onChange={(e)=>setPass(e.target.value)} />
              </label>
              <Button onClick={
                localStorage.setItem('ls_nome', nome),
                localStorage.setItem('ls_pass', pass)} 
                name='Cadastrar' />
              

            <Link to="/">Ir para login</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Cadastro