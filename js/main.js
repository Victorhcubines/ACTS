document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/denuncias")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("denuncias-container");
      container.innerHTML = data.map(d => `<p>${d.titulo}</p>`).join("");
    });
});
