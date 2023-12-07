function CadastrarUsuario() {
    
}



function validarLogin() {
    // Obter os valores do login e senha do formulário
    var login = document.getElementById("loginUsuario").value;
    var senha = document.getElementById("senhaUsuario").value;

    // Verificar se o login e a senha são válidos (exemplo: login "admin" e senha "admin")
    if (login === "admin" && senha === "admin") {
        alert("Login efetuado com sucesso");
        setTimeout = 1
        window.location.href = "index.html";
    } else {
        alert("Erro no login. Verifique seu usuário e senha.");
    }
}

// Adicionar um ouvinte de evento para o botão
document.getElementById("loginButton").addEventListener("click", validarLogin);