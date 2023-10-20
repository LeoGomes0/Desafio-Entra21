
const data = new Date();

const dias = 30;

function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}

const novaData = addDays(data, dias);
// toISOString() retorna uma string representando esta data no formato de string de data e hora , um formato simplificado
// retorna uma cópia superficial de uma parte de um array em um novo objeto de array
const proximaData = novaData.toISOString().slice(0, 10)
let dataFormatada = new Date(proximaData);
// Data formatada com com getDate() + 1, pois estava subtraindo um dia
dataFormatada.setDate(dataFormatada.getDate() + 1);
console.log(dataFormatada.toLocaleDateString("pt-br"));
// Data formatada para data local pt-br
const proxDataFormatada = dataFormatada.toLocaleDateString("pt-br");


// Dados temporários para guardar os cadastros 
const cadastro = []

// Função para salvar o cadastro de reserva
function salvarCadastro() {
    const cpf = document.getElementById("Cpf").value;
    const nome = document.getElementById("Nome").value;
    const data = document.getElementById("Data Nascimento").value;


    // Adicione o novo cadastro
    cadastro.push({ cpf, nome, data });

    // Limpar o cadastro
    document.getElementById("cadastro").reset();

    // Exiba uma mensagem de confirmação
    alert("Cadastro realizado");

    // Atualize a lista de cadastro
    listarCadastro();
}

// Event listener para o formulário de cadastro
document.getElementById("cadastro").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão
    salvarCadastro();
});

// Inicialize a lista de vagas na tela de listagem
listarCadastro();

// Função para exibir as vagas na tela de listagem
function listarCadastro() {
    const vacinaList = document.getElementById("vacina-info");
    vacinaList.innerHTML = "";

    // forEach é um metodo de Arrey que é usado da mesma forma que usamos o for
    cadastro.forEach(vacina => {
        // "createElement" cria o elemento HTML especificado por tagName
        const listCadastro = document.createElement("li");
        listCadastro.textContent = `Cpf: ${vacina.cpf}, Nome: ${vacina.nome}, Data Nascimento: ${vacina.data}, Próxima Data: ${proxDataFormatada}`;
        // "appendChild" adiciona um nó ao final da lista.
        vacinaList.appendChild(listCadastro);
    });
}


