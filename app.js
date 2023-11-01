const titulo = document.querySelector('h1');
const paragrafo = document.querySelector('.texto__paragrafo');

titulo.innerHTML = 'Jogo do número secreto';
paragrafo.innerHTML = 'Escolha um número entre 1 e 10!';

function verificarChute() {
    console.log('O botão foi clicado');
}