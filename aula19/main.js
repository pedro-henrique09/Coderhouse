"use strict";
console.log("HOISTING\nIdade: ", idade(21));

var helloWorld = "Olá mundo";
console.log(helloWorld);

var helloWorld = "Olá mundo, de novo?";
console.log(helloWorld);

helloWorld = "Olá mundo, será que isto tá certo?";
console.log(helloWorld);

if (true) {
  var endereco = "rua do bispo";
}

console.log("endereco:\n", endereco);

if (true) {
  let nomeEmpresa = "Coderhouse Brasil";
  console.log(nomeEmpresa);
}

if (true) {
  const país = "Brasil";
  console.log(país);

  país = "Argentina";
  console.log(país);
}

function media(nota1, nota2, nota3) {
  const calculoMedia = (nota1 + nota2 + nota3) / 3;

  if (calculoMedia < 6) {
    console.log("reprovada");
  } else {
    console.log(Parabens);
  }
  return calculoMedia;
}

function subtrair(num1, num2) {
  if (num1 < num2) {
    console.error("Erro na subtracao");
  } else {
    console.log(num1 - num2);
    return num1 - num2;
  }
}

console.log(nomeEmpresa);

const pessoas = ["Pedro", "Karen"];

console.log(pessoas[0]);

pessoas.push("Leo");
pessoas.pop();
pessoas.shift();
pessoas.unshift("Matheus");
console.log("pessoas");


// Objeto 
let xicara = {
    cor: 'preta' ,
    forma: 'redonda' ,
    peso: 5,
    capacidade: 200,
    fabricacao: {
        lote: '123456',
        estado: 'RJ',
    }

}

console.log(xiicara.cor)