import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
      <div>
        <h1>Faça seu login</h1>
        <Link to="/home">Login</Link>
      </div>
  )
}

export default Login