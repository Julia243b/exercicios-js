const numeroLimite = document.getElementById('numeroLimite');
const somaSequencia = document.getElementById('somaSequencia');
const resultadoSequencia = document.getElementById('resultadoSequencia');

function somarAte(limite) {
    let somaTotal = 0;
    for (let i = 1; i <= limite; i++) {
        somaTotal += i;
    }
    return somaTotal;
}

somaSequencia.addEventListener('click', function(){
    const numero = Number(numeroLimite.value);
    const resultado = somarAte(numero);

    resultadoSequencia.textContent = `A soma de 1 até ${numero} é: ${resultado}`;

    console.log(`A soma de 1 até ${numero} é: ${resultado}`);

});




/* function somarAte(limite) {
    let somaTotal = 0;
    for (let i = 1; i <= limite; i++) {
        somaTotal += i;
    }
    return somaTotal;
} */