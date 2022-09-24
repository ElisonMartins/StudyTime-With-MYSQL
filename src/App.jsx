import './App.css';
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/login.jsx';
import Details from './pages/details.jsx';
import Inicio from './pages/Inicio.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;