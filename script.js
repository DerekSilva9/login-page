function logar() {
    var login = document.querySelector('input[name="usuario"]').value;
    var senha = document.querySelector('input[name="senha"]').value;
  
    if (login === "admin@admin" && senha === "admin") {
      alert("Sucesso");
      // Redirecionar para a página desejada após o login
      window.location.href = "home.html";
    } else {
      alert("No");
    }
  }