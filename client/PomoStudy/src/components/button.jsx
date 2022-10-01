import React from 'react';
import Pomodoro from './cronometro.jsx';
import './button.css';

export default (props)=>{
    return(
        <>
            <div className='btn'>
                <button onClick={props.func}> {props.name}</button>
            </div>
        </>
    );
};