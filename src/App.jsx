import './App.css';
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Login/Login.jsx';
import Details from './pages/Details/details.jsx';
import Inicio from './pages/Home/Inicio.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' element={<Inicio />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;