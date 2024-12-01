document.getElementById('buscar-btn').addEventListener('click', function() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;

    if (marca && modelo && ano) {
        buscarTabelaFipe(marca, modelo, ano);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function buscarTabelaFipe(marca, modelo, ano) {
    // Substitua este link pela URL da sua API da Tabela FIPE.
    const url = `https://github.com/deividfortuna/fipe.git`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.preco) {
                exibirResultadoTabela(marca, modelo, ano, data.preco);
            } else {
                alert('Veículo não encontrado.');
            }
        })
        .catch(error => {
            console.error('Erro ao consultar a Tabela FIPE:', error);
            alert('Houve um erro ao buscar os dados.');
        });
}

function exibirResultadoTabela(marca, modelo, ano, preco) {
    const tbody = document.getElementById('tabela-fipe').getElementsByTagName('tbody')[0];
    
    const row = tbody.insertRow();
    row.insertCell(0).innerText = marca;
    row.insertCell(1).innerText = modelo;
    row.insertCell(2).innerText = ano;
    row.insertCell(3).innerText = `R$ ${preco}`;

    document.getElementById('resultado').style.display = 'block';
}
