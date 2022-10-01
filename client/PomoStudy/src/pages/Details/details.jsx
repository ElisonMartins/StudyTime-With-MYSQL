import React from 'react';
import './details.css';
import { useState, useEffect } from 'react';
import Axios from "axios";

export default ({})=>{

    const [listUsers, setListUsers] = useState();
    console.log(listUsers)
    useEffect(()=>{
        Axios.get("http://localhost:3001/details").then((response) => {
            setListUsers(response.data)
        })
    }, [])

    return(
        <div className='details'>
            <h1>Detalhes</h1>
            <div className='cards'>
                <div className='card'>
                    <h2>18h de Pomocode</h2>
                </div>
                <div className='card'>
                    <h2>18h de Pomocode</h2>
                </div>
                <div className='card'>
                    <h2>18h de Pomocode</h2>
                </div>
            </div>
            <div className='grafico'>
                <p>Nomeee</p>
            <div className='card'>
                    <h2>18h de Pomocode</h2>
                </div>
            </div>
            <div className='info'>
            <div className='card'>
                    <h2>18h de Pomocode</h2>
                </div>
            </div>
        </div>
    )
}