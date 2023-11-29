// Función para ir a una sección
function irASeccion(idSeccion) {
    // Obtiene el elemento de la sección
    const seccion = document.getElementById(idSeccion);
  
    // Centra la sección en la pantalla
    seccion.scrollIntoView({ behavior: "smooth" });
  }
  
  // Escucha el evento click en el botón de la sección 1
  document.getElementById("btnAcerca").addEventListener("click", () => {
    // Llama a la función para ir a la sección 1
    irASeccion("seccion-acerca");
  });
  
  // Escucha el evento click en el botón de la sección 2
  document.getElementById("boton-seccion-2").addEventListener("click", () => {
    // Llama a la función para ir a la sección 2
    irASeccion("seccion-2");
  });