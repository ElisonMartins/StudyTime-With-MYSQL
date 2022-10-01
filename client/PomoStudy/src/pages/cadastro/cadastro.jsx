import './cadastro.css'
import Button from '../../components/button.jsx';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios";

function Cadastro() {

  const [values, setValues] = useState()

  const handleChangeValues = (value) => {
    setValues(prevValue =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
      <div>
        <div className="login">
        <div className="left">
          <h2>Bem vindo</h2>
          <p>Faça seu Cadastro aqui!</p>
        </div>
        <div className="right">
          <div className="inputs">
            <h1>Login</h1>
            
              <label>Nome de usuario
                <input 
                  type="text"
                  name="name"
                  placeholder="Nome de usuario"
                  onChange={handleChangeValues}
                  />
              </label>
              <label>Senha
                <input type="password" 
                  name="password" 
                  placeholder="Senha"
                  onChange={handleChangeValues}
                  />
              </label>
              <Button name='Cadastrar' func={() => handleClickButton()}
              />
              
            <Link to="/">Ir para login</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Cadastro