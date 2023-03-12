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

    horas.textContent = hr + ':';
    minutos.textContent = min + ':';
    segundos.textContent = sec;
    dia.textContent = d;

    switch (m){
        case 0:
            mes.textContent = 'Janeiro';
            break;
        case 1:
            mes.textContent = 'Fevereiro';
            break;
        case 2:
            mes.textContent = 'Março';
            break;
        case 3:
            mes.textContent = 'Abril';
            break;
        case 4:
            mes.textContent = 'Maio';
            break;
        case 5:
            mes.textContent = 'Junho';
            break;
        case 6:
            mes.textContent = 'Julho';
            break;
        case 7:
            mes.textContent = 'Agosto';
            break;
        case 8:
            mes.textContent = 'Setembro';
            break;
        case 9:
            mes.textContent = 'Outubro';
            break;
        case 10:
            mes.textContent = 'Novembro';
            break;
        case 11:
            mes.textContent = 'Dezembro';
            break;
    }
    ano.textContent = a;

    if (hr >= 06) {
        document.querySelector("body").setAttribute("class","day")
    }
    if (hr >= 18) {
        document.querySelector("body").setAttribute("class","afternoon")
    }if (hr >= 20 || hr < 06) {
        document.querySelector("body").setAttribute("class","night")
    }
})

