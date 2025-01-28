document.addEventListener("DOMContentLoaded", setupHeader);

function setupHeader() {
  const header = document.querySelector("header");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const filtro = document.querySelector(".filtro");

  // Detectar si el dispositivo es táctil
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    );
  }

  if (isTouchDevice()) {
    document.body.classList.add("touch-device");
  } else {
    document.body.classList.remove("touch-device");
  }

  // Inicializar checkboxes y asegurarse de que .filtro no esté visible
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  if (filtro) {
    filtro.style.display = "block"; // Aseguramos que .filtro no esté visible inicialmente
  }

  // Aplicar a todos los enlaces
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Ocultar todas las listas antes de navegar
      const lists = document.querySelectorAll("ul");
      lists.forEach((ul) => {
        ul.style.display = "none";
      });

      // Desmarcar todas las checkboxes y manejar el filtro
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      // Navegar a la URL del enlace
      window.location.href = link.href;
    });
  });

  // Función para desmarcar checkboxes al hacer clic en .filtro
  if (filtro) {
    filtro.addEventListener("click", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    });
  }
}
