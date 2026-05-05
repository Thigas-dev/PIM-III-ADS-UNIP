// Impede selecionar datas passadas
const dataInput = document.getElementById('data');
const hoje = new Date().toISOString().split('T')[0];
dataInput.setAttribute('min', hoje);