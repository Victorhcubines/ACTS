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
function openRegister() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <h2>Criar Conta</h2>
    <input type="text" id="nome" placeholder="Nome completo"><br>
    <input type="text" id="cpf" placeholder="CPF"><br>
    <input type="email" id="email_cadastro" placeholder="E-mail"><br>
    <input type="password" id="senha_cadastro" placeholder="Senha"><br>
    <input type="password" id="confirmar_senha" placeholder="Confirmar senha"><br>
    <button onclick="validarCadastro()">Cadastrar</button>
    <button onclick="document.body.removeChild(this.parentNode)">Fechar</button>
  `;
  document.body.appendChild(popup);
}

function validarCadastro() {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email_cadastro").value;
  const senha = document.getElementById("senha_cadastro").value;
  const confirmar = document.getElementById("confirmar_senha").value;

  if (!validarCPF(cpf)) {
    alert("CPF inválido!");
    return;
  }
  if (senha !== confirmar) {
    alert("As senhas não coincidem.");
    return;
  }

  alert("Cadastro válido para " + nome);
}

// Validação de CPF (com dígito verificador)
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;
  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}
