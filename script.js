"use strict"

let cores = ["red", "green", "yellow", "purple", "black", "white", "blue"];
let indice = 0;

const principal = document.querySelector("#principal");
const secundario = document.querySelector("#secundario");
const botaoTroca = document.querySelector("#botaoTrocar");
const texto = document.getElementsByTagName("h1")[0];

botaoTroca.addEventListener("click", (evento) => {
    document.body.style.backgroundColor = cores[indice];
    if (cores[indice] == 'black') {
        texto.style.color = 'white';
    }
    if (cores[indice] == 'white') {
        texto.style.color = 'black';
    }
    indice = (indice + 1) % cores.length;
});