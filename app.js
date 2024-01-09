let mensagemBoasVindas = "Olá, bem vindo ao jogo da adivinhação";
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute = 0;
let tentativas = 1;

alert(mensagemBoasVindas);

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    
    if (chute == numeroSecreto) {
        break;
    } 
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//criar uma variavel, palavra tentativa é maior que 1? se sim "tentativas" se não : "tentativa"