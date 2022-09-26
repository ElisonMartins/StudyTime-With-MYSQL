import './Login.css'
import Button from '../../components/button.jsx';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [nome, setNome]=useState('')

  //const armazenar=(chave,valor)=>{
  //  localStorage.setItem(chave,valor)
  //  console.log("foii")
  //}

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
            
              
              <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} />
              <Button onClick={localStorage.setItem('ls_nome', nome)} name='Cadastrar' />
              
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
            
            <Link to="/home">Login</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Login