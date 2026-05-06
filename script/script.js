// Impede selecionar datas passadas
const dataInput = document.getElementById('data');
const hoje = new Date().toISOString().split('T')[0];
dataInput.setAttribute('min', hoje);

// Função para aplicar a máscara de telefone
function mascaraTelefone(event) {
    let input = event.target;
    // Remove tudo o que não for número (letras, símbolos)
    let valor = input.value.replace(/\D/g, "");

    // Aplica a formatação dependendo da quantidade de números digitados
    if (valor.length > 0) {
        valor = valor.replace(/^(\d{2})/, "($1) "); // Coloca o parêntese em volta do DDD e o espaço
    }
    if (valor.length > 6) {
        // Se tiver mais de 6 números (já passou do DDD e dos primeiros dígitos)
        // Se for celular (9 dígitos), o traço fica depois do 5º número
        if (valor.length === 11) {
            valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
        } else {
            // Se for telefone fixo (8 dígitos), o traço fica depois do 4º número
            valor = valor.replace(/(\d{4})(\d{4})$/, "$1-$2");
        }
    }

    // Atualiza o valor do input com a máscara
    input.value = valor;
}