const iniciarContagem = document.getElementById('iniciarContagemProgressiva');

iniciarContagem.addEventListener('click', function() {

    console.log("Iniciando contagem de 1 a 10:");
    for (let i = 1; i <= 10; i++) {
        console.log("Contagem:", i);
    }
});

const redefinir = document.getElementById('redefinirProgressiva');
redefinir.addEventListener('click', function() {
    console.clear();
    console.log("Console limpo! Clique em Iniciar Contagem para iniciar a contagem novamente.");
});