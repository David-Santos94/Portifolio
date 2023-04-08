
function insert(num){
    var numero = document.getElementById('tela').innerHTML;
    atualTela(numero, num);
}

function allClean(){
    document.getElementById('tela').innerHTML = "";
}

function backClean(){
    let tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1);
}

function calcular(){


}

function atualTela(numero, num){
    document.getElementById('tela').innerHTML = numero + num;
}