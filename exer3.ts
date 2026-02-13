/*
    Exercício 3 da Tarefa TypeScript - Processo Seletivo da IN Junior
    Fase: Treinamento
    Autor: Cláudio Pires Salgado

    Programa com a interface "Livro" e a função "resumirLivro()".
*/


// Interface Livro
interface ILivro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

// Função "resumirLivro()" com o parâmetro sendo um objeto do tipo Livro
function resumirLivro(livro: ILivro): string {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}

// Exemplo esperado mencionado no Enunciado
const livro: ILivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
};

console.log(resumirLivro(livro));
// "O livro 'Dom Casmurro' foi escrito por Machado de Assis em 1899."

// Outros Exemplos
const livro1: ILivro = {
    titulo: "A Biblioteca da Meia-Noite",
    autor: "Matt Haig",
    anoPublicacao: 2021 // Obs.: É o ano de Publicação no Brasil, porém foi publicado na Inglaterra em 2020.
};

const livro2: ILivro = {
    titulo: "O Homem que Calculava",
    autor: "Júlio César de Mello e Souza (pseudônimo: Malba Tahan)",
    anoPublicacao: 1938
};

console.log(resumirLivro(livro1))
// "O livro 'A Biblioteca da Meia-Noite' foi escrito por Matt Haig em 2021."

console.log(resumirLivro(livro2))
// "O livro 'O Homem que Calculava' foi escrito por Júlio César de Mello e Souza (pseudônimo: Malba Tahan) em 1938."
