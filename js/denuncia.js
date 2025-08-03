document.getElementById("form-denuncia").addEventListener("submit", function(e) {
  e.preventDefault();
  const tipo = document.getElementById("tipo").value;
  const endereco = document.getElementById("endereco").value;
  const descricao = document.getElementById("descricao").value;

  const urgencia = calcularUrgencia(tipo, descricao);

  alert(`Denúncia registrada!\nTipo: ${tipo}\nUrgência estimada: ${urgencia}`);
});

function calcularUrgencia(tipo, descricao) {
  let pontos = 0;

  if (tipo === "buraco" || tipo === "iluminacao") pontos += 2;
  if (descricao.toLowerCase().includes("risco") || descricao.toLowerCase().includes("acidente")) pontos += 3;
  if (descricao.length > 100) pontos += 1;

  const nivel = pontos >= 5 ? "Alta" : pontos >= 3 ? "Média" : "Baixa";
  document.getElementById("grau-urgencia").innerText = nivel;
  return nivel;
}
