import React from 'react';
import Button from './button.js';
import Wave from './onda.js';
import './Inicio.css';
import Bg from "./img/aud.gif";

export default ({})=>{
    return(
        <>
            <div className='corpo'>
                <header>
                    <p>PomoCode</p>
                    <p><a href="#sobre-pomo" className='sobre-pomodoro'>Sobre</a></p> 
                </header>
                <div className='container'>

                <img className="gif" src={Bg} width="250" alt="404 image"/>
                    <h1 className='timer'>25:00</h1>
                    <Button/>
                </div> 
                <Wave/>
            </div>
            
            
        </>
    )
}
