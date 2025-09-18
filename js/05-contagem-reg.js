const iniciarContagemRegressiva = document.getElementById('iniciarContagemRegressiva');

iniciarContagemRegressiva.addEventListener('click', function() {
    
    console.log("Iniciando contagem de 10 a 1:");
    
    let contador = 10;
    while (contador >= 1) {
        console.log(contador);
        contador = contador - 1;
    }
    console.log("Contagem finalizada!");
});

redefinirRegressiva.addEventListener('click', function() {
    console.clear();
    console.log("Console limpo! Clique em Iniciar Contagem para iniciar a contagem novamente.");
});