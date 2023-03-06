const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

setInterval(function time() {
    let dateToday = new Date();
    
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let d = dateToday.getDate();
    let m = dateToday.getMonth();
    let a = dateToday.getFullYear();

    if (hr < 10) {hr = '0' + hr;}
    if (min < 10) {min = '0' + min;}
    if (sec < 10) {sec = '0' + sec;}
    if (d < 10) {d = '0' + d;}
    if (m < 10) {m = '0' + m;}

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    dia.textContent = d;

    switch (m){
        case 0:
            break;
        case 1:
            mes.textContent = Março;
            break;
        case 2:
            var string = 'Março';
            mes.textContent = string;
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
    }
    ano.textContent = a;
})

