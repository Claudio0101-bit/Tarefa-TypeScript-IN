/*
    Exercício 7 da Tarefa TypeScript - Processo Seletivo da IN Junior
    Fase: Treinamento
    Autor: Cláudio Pires Salgado

    Programa com Interface genérica "RespostaAPI".
*/


interface RespostaAPI<T> {
    dados: T;
    sucesso: boolean;
}

// Exemplos esperados mencionados no Enunciado

// Objeto com dados do tipo String
const resposta1: RespostaAPI<string> = {
    dados: "OK",
    sucesso: true
};

// Objeto com dados do tipo Number[]
const resposta2: RespostaAPI<number[]> = {
    dados: [1, 2, 3],
    sucesso: false
};

// Exibição dos Objetos
console.log(resposta1);
console.log(resposta2);
