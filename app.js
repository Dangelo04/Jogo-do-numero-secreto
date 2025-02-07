let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto =   gerarNumeroAleatorio();
let tentativas =  1; 

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function mensagemInicial(){
exibirTextoNatela("h1", "jogo do número secreto");
exibirTextoNatela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input') . value;
  
    if (chute == numeroSecreto) {
        exibirTextoNatela("h1","Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `"Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNatela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if (chute > numeroSecreto){
            exibirTextoNatela("p", "O número secreto é menor");
        }else{
            exibirTextoNatela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
}
}
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == "10"){
        listaDeNumerosSorteados = [];

    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo (){
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarjogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;    
    mensagemInicial();
    document.getElementById("riniciar").setAttribute("disabled", true)
}

