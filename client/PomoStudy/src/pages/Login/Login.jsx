import './Login.css';
import Button from '../../components/button.jsx';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";

const auth = false

function Login() {
  const [values, setValues] = useState()
  

  const navigate = useNavigate();
  
  const handleChangeValues = (value) => {
    setValues(prevValue =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  function saveName() {
    localStorage.setItem("name", values.name)
  }

  function savePomo() {
    localStorage.setItem("pomos", values.pomos)
  }
  console.log(values)

  const handleClickLogin = () => {
    Axios.post("http://localhost:3001/login", {
      name: values.name,
      password: values.password,
    }).then((response) => {
      if (response.data.msg == "Usuario logado com sucesso") {
        navigate('/home')
        saveName()
        savePomo()
        console.log(response)
      } else {
        alert(response.data.msg)
      }
    });
  };
  
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
                onChange={handleChangeValues}
                name="name" 
                placeholder="Nome"/> 
              </label>
              <label>Senha
                <input type="password"
                  name="password" 
                  onChange={handleChangeValues}
                  placeholder="Senha"/> 
              </label>
              <Button name='logar' func={() => handleClickLogin()} 
              />
            <p>Nao possue conta? cadastre aqui</p>
            <Link to="/register">Cadastrar</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Login