/*
    Exercício 6 da Tarefa TypeScript - Processo Seletivo da IN Junior
    Fase: Treinamento
    Autor: Cláudio Pires Salgado

    Programa com função genérica "retornarElemento()".
*/

// Função genérica "retornarElemento()"
// Obs.: Retorno pode ser do tipo T ou undefined se o index dado não for válido.
function retornarElemento<T>(array: T[], index: number): T | undefined {
    return array[index];
}

// Exemplos esperados mencionados no Enunciado + Exemplo com index inválido

// Teste com Numbers
const numero = retornarElemento([10, 20, 30], 1);
console.log(numero); // 20

// Teste com Strings
const letra = retornarElemento(["a", "b", "c"], 0);
console.log(letra); // "a"

// Teste com Índice inválido
const tentativa = retornarElemento(["abc", "def", "ghi"], 4)
console.log(tentativa) // undefined
