const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const somarNumero = document.getElementById('somarNumero');

function somar(a, b) {
    let soma = a + b;
    console.log(`A soma de ${a} + ${b} é: ${soma}`);
}

somarNumero.addEventListener('click', function() {
    let num1 = parseFloat(primeiroNumero.value);
    let num2 = parseFloat(segundoNumero.value);

    somar(num1, num2);
});