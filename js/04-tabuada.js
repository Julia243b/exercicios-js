const multiplicacaoInput = document.getElementById('multiplicacaoInput');
const tabuadaMultiplicacao = document.getElementById('tabuadaMultiplicacao');
const resultadoMultiplicacao = document.getElementById('resultadoMultiplicacao');

tabuadaMultiplicacao.addEventListener('click', function() {
    let numero = Number(multiplicacaoInput.value);
    resultadoMultiplicacao.innerHTML = ""; // Limpa o resultado anterior

    for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    let linhaTabuada = `${numero} x ${i} = ${resultado}`;
    console.log(`${numero} x ${i} = ${resultado}`);
    resultadoMultiplicacao.innerHTML += linhaTabuada + "<br>";
    }
});