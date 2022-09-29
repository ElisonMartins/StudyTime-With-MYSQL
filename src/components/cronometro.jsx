import { useState } from 'react'

var minute = 25;
var second = 0;
var cron;

var clicado = false;


function pomodoro() {
    

    if (!clicado) {
        console.log("primeira vez clicado");

        var mls_em_seg = 1000;
        cron = setInterval(() => { timer(); }, mls_em_seg);
        clicado = true;
    }else {
        console.log("não vai clicar de novo nao!");
    }
}
//const [pomo, setPomo] = useState(0);
//const changePomo = () => {
//    setPomo((prevPomo) => prevPomo + 1)
//    localStorage.setItem('ls_pomo', pomo)
//}

function timer() {
    second--
    if (minute === 0 && second === 0) {
        clearInterval(cron);
        //Aqui fica o codigo para o alarme
        console.log('FIM!')
    }
    if (second < 0 && minute != 0) {
        second = 59;
        minute--;
    }

    var format = (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second); 
    document.querySelector('.timer').innerHTML = format;
}
export default ({})=>{
    return(
        <>
            {pomodoro()}
        </>
    );
};
