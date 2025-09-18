const idadeInput = document.getElementById('idadeInput');
const verificarIdade = document.getElementById('verificarIdade');

verificarIdade.addEventListener('click', function() {

    let idadeDigitada = idadeInput.value;
    let idade = Number(idadeDigitada);

    if (isNaN(idade) || idade < 0) {
        console.log("Por favor, insira uma idade válida.");
    } else if (idade >= 60) {
        console.log("Você é um idoso.");
    } else if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else if (idade >=13 && idade <= 17) {
        console.log("Você é um adolescente.");
    } else {
        console.log("Você é uma criança, seus pais devem supervisionar seu uso na internet!!!");
    }
});