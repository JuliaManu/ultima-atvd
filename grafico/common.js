// common.js
function fetchComparacao() {
    fetch('http://localhost:3000/api/comparacao')
        .then(response => response.json())
        .then(data => {
            console.log('Dados de comparação:', data);
        })
        .catch(error => {
            console.error('Erro ao carregar os dados da comparação:', error);
        });
}
