const numeroInput = document.getElementById('numeroInput');
const verificarNumero = document.getElementById('verificarNumero');

verificarNumero.addEventListener('click', function() {

    let numeroDigitado = numeroInput.value;
    
    let numero = Number(numeroDigitado);
    
    if (numero > 0) {
        console.log("O número é positivo");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else if (numero === 0) {
        console.log("O número é igual a zero.");
    } else {
        console.log("Digite um número válido.");
    }
});