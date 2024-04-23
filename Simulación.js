function mostrarContenido(event, idContenido) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  const contenido = document.getElementById(idContenido);
  if (contenido.style.display === 'none') {
    contenido.style.display = 'block';
  } else {
    contenido.style.display = 'none';
  }
}
