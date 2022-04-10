import React from 'react';
import Pomodoro from './cronometro.js';
import './button.css';

export default ({})=>{
    return(
        <>
            <div className='btn'>
                <button onClick={Pomodoro}>Iniciar</button>
            </div>
        </>
    );
};