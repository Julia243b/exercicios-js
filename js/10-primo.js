const numeroPrimo = document.getElementById('numeroPrimo');
const verificarPrimo = document.getElementById('verificarPrimo');
const resultadoPrimo = document.getElementById('resultadoPrimo');

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    if (numero === 2) {
        return true;
    }

    if (numero % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % 1 === 0) {
            return false;
        }
    }
    return true;
}


verificarPrimo.addEventListener('click', function() {
    const numero = Number(numeroPrimo.value);
    const ehPrimoResultado = ehPrimo(numero);

    if (ehPrimoResultado) {
        resultadoPrimo.textContent = `True, o número ${numero} é primo.`;
    }else {
        resultadoPrimo.textContent = `False, o número ${numero} NÃO é primo.`;
    }
    console.log(ehPrimoResultado);
});