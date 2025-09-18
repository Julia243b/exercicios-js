const digiteSenha = document.getElementById("digiteSenha");

digiteSenha.addEventListener("click", function() {

    let senha;
    let tentativas = 0;

    do {
        tentativas++;
        if (tentativas > 1) {
            console.log("Senha incorreta. Tente novamente.");
        }

        senha = prompt("Digite a senha corretamente:");
    } while (senha !== "1234");

        if (tentativas > 1) {
            console.log(`Finalmente acertou! Você tentou ${tentativas} vezes.`);
        }

    if (senha === "1234") {
        console.log("Acesso concedido.");
    }
});