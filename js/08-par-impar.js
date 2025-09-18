const numeroParImpar = document.getElementById('numeroParImpar');
const verificarParImpar = document.getElementById('verificarParImpar');
const resultadoParImpar = document.getElementById('resultadoParImpar');

const ehPar = (numero) => {
    return numero % 2 === 0;
};

verificarParImpar.addEventListener('click', function() {
    let numeroDigitado = numeroParImpar.value;
    resultadoParImpar.innerHTML = ""; // Limpa o resultado anterior

    console.log(ehPar(numeroDigitado));

    resultadoParImpar.innerHTML = ehPar(numeroDigitado);

    if (ehPar(numeroDigitado)) {
        resultadoParImpar.style.color = 'green';
    } else {
        resultadoParImpar.style.color = 'red';
    }
});











/* const ehPar = (numero) => {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}; */