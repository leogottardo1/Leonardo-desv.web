//o vento DOM é acionado quando todo o HTML foi completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    //alert(123);
  
    //tipos de dados
  //String: Sequencia de caracter
  //Number: numeros inteiros ou pontos flutuantes (10.4)
  //boolean; Retorna dois valores, true ou false
  //object: estrutura de dados qque pode armazenar multiplos valores
  //null: quando esta vazio
  //array: objeto especial ordenado
  //fuction: bloco de código reutilizavel
  
  //é usado para declarar uma variavel cuja valor é permanente 
  const test = 50
  
  // LET é usado para declarar variaveis que nao podem ser 
  // retribuidos
  let C= 0;
  C = 10
  console.log(C)

const notaMedia = 6;
if (notaMedia >= 6) {
  //alert("aluno passou");
}
else if (notaMedia >= 4 && notaMedia < 6) {
  //alert("aluno quase passou");
}
else {
  //alert("aluno reprovou!");
}


//---------------OPERADORES---------------

// = sinal de atribuição
// == sinal de comparação 
// === verifica se os dois são iguais e tem o mesmo tipo de dados
// != se é diferente
// !== é estritamente diferente
// > maior
// < menor

const num = "6";
if ( num === 6) {
  //alert(" é igual");
} 
else {
  alert(" o tipo de dado é diferente");
}

const professor = "João";
if(professor == "Lucas") {
  console.log('sim é Lucas')
} else {
  console.log('Não é Lucas')
}


//-----------------------------------------/-----------------------------------------------------------

//Funções são blocos de codigo que podem ser chamados e reutilizados
//Dentro dos parenteses da função vai os parâmetros/propriedades

function primeiraFuncao() {
  
  return parametro + ',' + segundoparametro; //variaveis concatenadas

}

const parametro = "essa é uma função com parametro";
const segundoparametro = "agora com dois parametros";

console.log(primeiraFuncao(parametro, segundoparametro));

//-----------------------------------/----------------------------------------------
//arrays em javascript são estruturas de dados que permitem
//armazenar uma coleção ordenada de elementos.

let primeiroarray = ['Lucas','João','Paulo','Marcos'];

//console.log(primeiroarray[2]); //numero 2 para percorrer o array

//----------------------------------/----------------------------------------------------

//Os objetos são coleções NÃO ORDENADAS de pares chave-valor
//a uma chave única 

let pessoa = {
  nome: 'Maria',
  idade: '22',
  profissao:'Programadora'
}
  //console.log(pessoa['idade']);

  //--------------------------------------/--------------------------------------

  const numeros= ["A","B","C","D"]

  numeros.forEach(num => {
    console.log(num)

  })

});
