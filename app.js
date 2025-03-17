let listaDeNomeAmigoSecreto = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o input
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    let ListadosPaticipantes = document.getElementById("listaAmigos"); // Captura a lista
    let novoItem = document.createElement("li"); // Cria um novo item da lista
    novoItem.textContent = nome; // Adiciona o nome digitado ao item

    ListadosPaticipantes.appendChild(novoItem); // Adiciona o item à lista na tela

    input.value = ""; // Limpa o campo de input
    input.focus(); // Mantém o cursor no input
}

function sortearAmigo() {
    let lista = document.querySelectorAll("#listaAmigos li"); // Pega todos os itens da lista

    if (lista.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * lista.length); // Sorteia um número
    let nomeSorteado = lista[indiceSorteado].textContent; // Pega o nome correspondente

    let resultado = document.getElementById("resultado"); // Captura a lista de resultado
    resultado.innerHTML = `<li>O Amigo Secreto Sorteado é: <strong>${nomeSorteado}</strong></li>`; // Exibe a mensagem

}
