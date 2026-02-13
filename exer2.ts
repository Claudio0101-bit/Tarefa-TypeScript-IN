/*
    Exercício 2 da Tarefa TypeScript - Processo Seletivo da IN Junior
    Fase: Treinamento
    Autor: Cláudio Pires Salgado

    Programa com Type StatusRequisicao e função "mostrarMensagemStatus()".
*/

// Criação do Type StatusRequisicao
type StatusRequisicao = "sucesso" | "erro" | "carregando";


// Função "mostrarMensagemStatus()" com um parâmetro do tipo StatusRequisicao
function mostrarMensagemStatus(status: StatusRequisicao) {
    switch (status) {

        // Mensagem quando StatusRequisicao é "sucesso" 
        case "sucesso":
            return "Operação realizada com sucesso!";
        
        // Mensagem quando StatusRequisicao é "erro"
        case "erro":
            return "Alerta: Ocorreu um erro na requisição.";
        
        // Mensagem quando StatusRequisicao é "carregando"
        case "carregando":
            return "Aguarde... carregando dados.";
    }
}

// Exemplos de uso
console.log(mostrarMensagemStatus("carregando"));  // "Aguarde... carregando dados."
console.log(mostrarMensagemStatus("sucesso"));     // "Operação realizada com sucesso!"
console.log(mostrarMensagemStatus("erro"));        // "Alerta: Ocorreu um erro na requisição."
