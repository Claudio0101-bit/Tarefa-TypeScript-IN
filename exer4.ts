/*
    Exercício 4 da Tarefa TypeScript - Processo Seletivo da IN Junior
    Fase: Treinamento
    Autor: Cláudio Pires Salgado

    Programa com a interface "Usuario", com nome, e-mail e método "exibirInfo()".
*/

// Interface "Usuario"
interface IUsuario {
    nome: string;
    email: string;
    exibirInfo(): string;
}

// Criação da Classe "Usuario" para implementar o método "exibirInfo()"
class Usuario implements IUsuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    exibirInfo(): string {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
}

// Exemplo esperado mencionado no Enunciado
const usuario = new Usuario("João", "joao@email.com")

console.log(usuario.exibirInfo());
// "Nome: João - Email: joao@email.com"

// Outro Exemplo
const eu = new Usuario("Cláudio Pires Salgado", "claudio@email.com")

console.log(eu.exibirInfo())
// "Nome: Cláudio Pires Salgado - Email: claudio@email.com"
