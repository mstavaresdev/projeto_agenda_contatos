const form = document.getElementById('form-agenda');
const nomeContato = [];
const numeroTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    validarNumero();
});

function validarNumero(input) {
    let valor = input.value.replace(/\D/g, '');

    if (valor.length < 9) {
        input.setCustomValidity('Digite pelo menos 9 números');
    } else if (valor.length > 11) {
        valor = valor.slice(0, 11);
    } else {
        input.setCustomValidity('');
    }

    input.value = valor;
}

function adicionaLinha() {
    let inputNomeContato = document.getElementById('nome-contato');
    let inputTelefoneContato = document.getElementById('telefone-contato');

    

    if (numeroTelefone.includes(inputTelefoneContato.value)) {
        alert(`O numero de telefone ${inputTelefoneContato.value}, já esta cadastrado!`);
    }else {
    nomeContato.push(inputNomeContato.value);
    numeroTelefone.push(inputTelefoneContato.value);


    let linha  = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    }

    inputNomeContato = '';
    inputTelefoneContato = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}