import React from 'react';
import Button from './button.js';
import Wave from './onda.js';
import './Inicio.css';

export default ({})=>{
    return(
        <>
            <div className='corpo'>
                <header>
                    <p>PomoVibes</p>
                    <a href=".sobre"> <p>Sobre</p> </a>
                </header>
                
                <div className='container'>
                    <h1 className='timer'>25:00</h1>
                    <Button/>
                </div> 
                <Wave/>
            </div>
            
            
        </>
    )
}
