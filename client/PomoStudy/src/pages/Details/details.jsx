import React from 'react';
import './details.css';
import { useState, useEffect } from 'react';
import Axios from "axios";

export default ({})=>{

    
    var namels = localStorage.getItem('name')
    var passls = localStorage.getItem('password')

    function savePomo(nameParam, param) {
        localStorage.setItem(nameParam,param)
      }
    
    
    const getDetails = () => {
        Axios.post("http://localhost:3001/details", {
          name: namels,
          password: passls,
        }).then((response) => {
            console.log(response.data[0])
            savePomo("totalPomo", response.data[0].pomos)
            savePomo("day1", response.data[0].day1)
            savePomo("day2", response.data[0].day2)
            savePomo("day3", response.data[0].day3)
        });
      };
    getDetails()

    var pomols = localStorage.getItem('totalPomo')
    var day1ls = localStorage.getItem('day1')
    var day2ls = localStorage.getItem('day2')
    var day3ls = localStorage.getItem('day3')

    return(
        <div className='details'>
            

            <h1 className='detalhes'>Detalhes</h1>
            
            <div className='cards'>
                
            </div>
            <div className='grafico'>
            <h2>Ola {namels}, Voce fez {pomols} pomodoros no total</h2>
                <p>Dia 1: {day1ls}</p>
                <p>Dia 2: {day2ls}</p>
                <p>Dia 3: {day3ls}</p>
            </div>
            <div className='info'>
            <div className='card'>
                    <h2></h2>
                </div>
            </div>
        </div>
    )
}