// Función para cambiar el fondo
function cambiarFondo() {
  const colores = ["#f5f5f5", "#e0f7fa", "#fff3e0", "#fce4ec", "#e8f5e9"];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor;

  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === colorActual);

  document.body.style.backgroundColor = nuevoColor;
}

// Todo el código cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // FORMULARIO
  const formulario = document.getElementById("formulario-contacto");
  const mensajeOk = document.getElementById("mensaje-gracias");
  const mensajeError = document.getElementById("mensaje-error");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    mensajeError.classList.add("oculto");
    mensajeOk.classList.remove("oculto");

    setTimeout(() => {
      mensajeOk.classList.add("oculto");
      modal.classList.add("oculto"); // cierra el modal después del envío
    }, 5000);
  });

  // MODAL
  const btnAbrirModal = document.getElementById("btnAbrirModal");
  const modal = document.getElementById("modal");
  const cerrarModal = document.getElementById("cerrarModal");

  btnAbrirModal.addEventListener("click", () => {
    modal.classList.remove("oculto");
  });

  cerrarModal.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("oculto");
    }
  });
});
