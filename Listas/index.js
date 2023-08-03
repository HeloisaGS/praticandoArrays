//Você deve criar três listas em JavaScript:

//1. para guardar os nomes de dez pessoas;
//2. para guardar as suas idades;
//3. para guardar as suas cores favoritas.

//Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.


//Criando as listas
let nome = [
    prompt("Digite o nome da pessoa 1: ") ,
    prompt("Digite o nome da pessoa 2: ") ,
    prompt("Digite o nome da pessoa 3: ") ,
    prompt("Digite o nome da pessoa 4: ") ,
    prompt("Digite o nome da pessoa 5: ") , 
    prompt("Digite o nome da pessoa 6: ") ,
    prompt("Digite o nome da pessoa 7: ") ,
    prompt("Digite o nome da pessoa 8: ") ,
    prompt("Digite o nome da pessoa 9: ") ,
    prompt("Digite o nome da pessoa 10: ") , 
]
let idade = [
    Number(prompt(`Digite a idade de ${nome[0]}: `)) , 
    Number(prompt(`Digite a idade de ${nome[1]}: `)) ,
    Number(prompt(`Digite a idade de ${nome[2]}: `)) ,
    Number(prompt(`Digite a idade de ${nome[3]}: `)) ,
    Number(prompt(`Digite a idade de ${nome[4]}: `)) ,
    Number(prompt(`Digite a idade de ${nome[5]}: `)) , 
    Number(prompt(`Digite a idade de ${nome[6]}: `)) ,
    Number(prompt(`Digite a idade de ${nome[7]}: `)) ,
    Number(prompt(`Digite a idade de ${nome[8]}: `)) ,
    Number(prompt(`Digite a idade de ${nome[9]}: `)) ,
    
]
let cor = [
    prompt(`Digite a cor favorita de ${nome[0]}: `) ,
    prompt(`Digite a cor favorita de ${nome[1]}: `) ,
    prompt(`Digite a cor favorita de ${nome[2]}: `) ,
    prompt(`Digite a cor favorita de ${nome[3]}: `) ,
    prompt(`Digite a cor favorita de ${nome[4]}: `) ,
    prompt(`Digite a cor favorita de ${nome[5]}: `) , 
    prompt(`Digite a cor favorita de ${nome[6]}: `) ,
    prompt(`Digite a cor favorita de ${nome[7]}: `) ,
    prompt(`Digite a cor favorita de ${nome[8]}: `) ,
    prompt(`Digite a cor favorita de ${nome[9]}: `) ,
 
]

//Mostrando as listas
console.log("Lista de nomes: ", nome);
console.log("Lista de idades: ", idade);
console.log("Lista de cores: ", cor);

//Fazendo as alterações nas listas
//alterar cor
let posicaoCor = Number(prompt("Escolha uma posição de da cor que você quer alterar: "))

if(posicaoCor >= 1 && posicaoCor <= 10){
    let novaCor = prompt("Digite para que cor você deseja alterar: ");
    cor[posicaoCor - 1] = novaCor;
}else{
    console.log("Você escolheu uma posição inválida");
}

//alterar idade
let posicaoIdade = Number(prompt("Escolha a posição da idade que você quer alterar: "));
if(posicaoIdade >= 1 && posicaoIdade <= 10){
    let novaIdade = Number(prompt("Digite para que idade você deseja alterar: "));
    idade[posicaoIdade - 1] = novaIdade;
}else{
    console.log("Você escolheu uma posição inválida");
}


//Mostrando novamente as listas
console.log("Lista de nomes: ", nome);
console.log ("Lista de idades alterada: ", idade)
console.log("Lista de cores altarada: ", cor);
