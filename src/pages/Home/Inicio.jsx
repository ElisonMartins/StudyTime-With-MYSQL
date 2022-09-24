import React from 'react';
import Button from '../../components/button.jsx';
import TodoList from '../../components/todo-list/TodoList'
import './Inicio.css';

export default ({})=>{
    return(
        <>
            <div className='corpo'>
                <header>
                    <p>PomoCode</p>
                    <p><a href="/details" className='sobre-pomodoro'>Detalhes</a></p> 
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
