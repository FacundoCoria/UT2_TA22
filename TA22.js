const tamañoVentana = document.getElementById('tamañoVentana');

// Función para actualizar el tamaño de la ventana en el párrafo
function actualizarTamañoVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    tamañoVentana.textContent = `Ancho: ${ancho}px, Alto: ${alto}px`;
}

// Detectar cuando el usuario cambia el tamaño de la ventana
window.addEventListener('resize', actualizarTamañoVentana);

// Mostrar el tamaño inicial al cargar la página
actualizarTamañoVentana();
