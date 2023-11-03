let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('.texto__paragrafo', 'Escolha um número entre 1 e 10!');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas';
        let mensagemtentativas = `Você descobriu o número secreto com ${tentativas} de ${palavraTentativa}!`;

        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('.texto__paragrafo', mensagemtentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
        
        reiniciarJogo();

    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('.texto__paragrafo', `O número secreto é menor que ${chute}!`);
        }else {
            exibirTextoNaTela('.texto__paragrafo', `O número secreto é maior que ${chute}!`);
        }

        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLIsta = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLIsta == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(NumeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    let reiniciar = document.querySelector('#reiniciar');
    
    reiniciar.addEventListener('click', () => {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    });

}
