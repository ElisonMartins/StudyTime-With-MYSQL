import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from "axios";
import Button from '../../components/button.jsx';
import TodoList from '../../components/todo-list/TodoList'
import Pomodoro from '../../components/cronometro.jsx';
import './Inicio.css';

export default ({})=>{
    
    const name = localStorage.getItem('name')

    return(
        <>
            <div className='corpo'>
                <header>
                    <p>PomoStudy</p>
                    <div className='header-options'>
                        <p><Link to="/details" className='detalhes'>Detalhes</Link></p> 
                        <p>{name}</p>
                    </div>
                </header>
                <div className='container'>
                    <h1 className='timer'>25:00</h1>
                    <Button func={Pomodoro} name='Iniciar'/>
                    <TodoList/>
                </div> 
            </div>
        </>
    )
}
