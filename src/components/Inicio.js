import React from 'react';
import Button from './button.js';
import './Inicio.css';

export default ({})=>{
    return(
        <>
            <div className='corpo'>
                <header>
                    <p>PomoVibes</p>
                    <p>Sobre</p>
                </header>
                
                <div className='container'>
                    <h1 className='timer'>25:00</h1>
                    <Button/>
                </div> 
            </div>
            
            
        </>
    )
}