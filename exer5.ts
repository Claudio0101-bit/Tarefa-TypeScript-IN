/*
    Exercício 5 da Tarefa TypeScript - Processo Seletivo da IN Junior
    Fase: Treinamento
    Autor: Cláudio Pires Salgado

    Programa com o Type "Genero", a interface "Pessoa", com nome, idade e genero,
    e função "apresentarPessoa()".
*/


// Type "Genero"
type Genero = "masculino" | "feminino";

// Interface Pessoa
interface IPessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

// Função "apresentarPessoa()" com o parâmetro sendo um objeto do tipo Pessoa
function apresentarPessoa(pessoa: IPessoa): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}

// Exemplo esperado mencionado no Enunciado
const pessoa: IPessoa = {
    nome: "Maria",
    idade: 30,
    genero: "feminino"
};

console.log(apresentarPessoa(pessoa));
// "Maria tem 30 anos e se identifica como feminino."

// Outro Exemplo
const eu: IPessoa = {
    nome: "Cláudio",
    idade: 20,
    genero: "masculino"
}

console.log(apresentarPessoa(eu))
// "Cláudio tem 20 anos e se identifica como masculino."
