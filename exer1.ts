/*
    Exercício 1 da Tarefa TypeScript - Processo Seletivo da IN Junior
    Fase: Treinamento
    Autor: Cláudio Pires Salgado

    Programa com função "adicionar()" sem tipos explícitos,
    e com variável "total" com valor 100.
*/


// Variável "total" com o valor 100
let total = 100;

// Função "adicionar" sem os tipos dos parâmetros explícitos
function adicionar(a, b) {
    return a + b;
}

// Exemplo esperado mencionado no Enunciado
const resultado = adicionar(20, 30); // resultado = 50

// Exemplos de resultados
console.log(adicionar(total, 50)) // 150
console.log(adicionar(total, 20)) // 120
console.log(adicionar(20, 30))    // 50

// Exemplo adicional para demonstrar a função "adicionar()" com Strings
console.log(adicionar("Olá, ", "mundo!")) // "Olá, mundo!"
