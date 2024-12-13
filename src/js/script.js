function logar(){

    // Obtém os valores dos campos de login e senha
    let user = document.querySelector('#user').value;
    let senha = document.querySelector('#password').value;

    // Verifica se o login e a senha estão corretos
    if (user == "admin" && senha == "admin") {
        alert('Login bem-sucedido!')
        window.location.href = "index.html" // Redireciona para outra página
    } else {
        alert('Senha ou usuário incorretos')
    }
}

