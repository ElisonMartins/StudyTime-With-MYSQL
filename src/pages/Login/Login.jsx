import './Login.css'
import Button from '../../components/button.jsx';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [user, setUser]=useState('')
  const [pass, setPass]=useState('')
  //const armazenar=(chave,valor)=>{
  //  localStorage.setItem(chave,valor)
  //  console.log("foii")
  //}
  
  if (localStorage.getItem('ls_nome') === user && localStorage.getItem('ls_pass') === pass){
    alert("login feito")
  }
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
              
              <label>Nome
                <input type="text"
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                name="nome_completo" 
                placeholder="Nome"/> 
              </label>
              <label>Senha
                <input type="password"
                  value={pass}
                  onChange={(e)=>setPass(e.target.value)}
                  name="pass" 
                  placeholder="Senha"/> 
              </label>

            <Link to="/home">Login</Link>
            <p>Nao possue conta? cadastre aqui</p>
            <Link to="/register">Cadastrar</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Login