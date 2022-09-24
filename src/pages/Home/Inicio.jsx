import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../../components/button.jsx';
import TodoList from '../../components/todo-list/TodoList'
import './Inicio.css';

export default ({})=>{
    return(
        <>
            <div className='corpo'>
                <header>
                    <p>PomoStudy</p>
                    <p><Link to="/details" className='detalhes'>Detalhes</Link></p> 
                </header>
                <div className='container'>
                    <h1 className='timer'>25:00</h1>
                    <Button/>
                    <TodoList/>
                </div> 
            </div>
        </>
    )
}
