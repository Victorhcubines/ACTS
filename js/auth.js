function openLogin() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <h2>Login</h2>
    <input type="email" id="email" placeholder="E-mail"><br>
    <input type="password" id="senha" placeholder="Senha"><br>
    <button onclick="login()">Entrar</button>
    <button onclick="document.body.removeChild(this.parentNode)">Fechar</button>
  `;
  document.body.appendChild(popup);
}

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  alert("Login com: " + email);
}
