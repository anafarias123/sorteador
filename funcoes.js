document.getElementById('sorteioButton').addEventListener('click', function() {
    // Obtemos o valor do input e dividimos os nomes
    const nomesInput = document.getElementById('nomes').value;
    const nomesArray = nomesInput.split(',').map(nome => nome.trim()).filter(nome => nome);

    // Verificamos se há nomes suficientes para o sorteio
    if (nomesArray.length === 0) {
        alert("Por favor, insira pelo menos um nome.");
        return;
    }

    // Sorteio de um nome aleatório
    const nomeSorteado = nomesArray[Math.floor(Math.random() * nomesArray.length)];

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `Nome Sorteado: ${nomeSorteado}`;
});
