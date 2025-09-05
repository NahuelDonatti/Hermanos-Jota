const form = document.querySelector('#contactoForm');
const notificacion = document.querySelector('#notificacion');

function mostrarNotificacion(mensaje) {     
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = mensaje;
    notificacion.appendChild(toast);
    
    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombreCompleto').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensaje = document.querySelector('#mensaje').value.trim();

    /* Validaciones */
    if (nombre.length < 3) return alert("El nombre debe tener al menos 3 caracteres.");            
    if (nombre.length > 50) return alert("El nombre no puede superar los 50 caracteres.");
    if (!/^[a-zA-Z\s]+$/.test(nombre)) return alert("El nombre solo puede contener letras y espacios.");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Por favor, ingresa un correo electrónico válido.");    
    if (email.length > 50) return alert("El email no puede superar los 50 caracteres.");

    if (mensaje.length < 10) return alert("El mensaje debe tener al menos 10 caracteres.");    
    if (mensaje.length > 500) return alert("El mensaje no puede superar los 500 caracteres.");

    
    mostrarNotificacion(`✅ ¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito.`);   
    form.reset();
})