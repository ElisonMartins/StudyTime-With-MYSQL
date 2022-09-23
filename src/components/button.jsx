import React from 'react';
import Pomodoro from './cronometro.jsx';
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