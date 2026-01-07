/**
 * BlockCraft Hosting v1.0 - Logic System
 * Controla compras, tickets y animaciones del panel
 */

// 1. Sistema de Compras
function processPurchase(planName, price) {
    console.log(`Iniciando transacción para: ${planName}`);
    
    // Simulación de carga de pasarela
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "PROCESANDO...";
    btn.disabled = true;

    setTimeout(() => {
        alert(`🚀 ¡PLAN ${planName} SELECCIONADO!\n\nPrecio: $${price}.00\nRedirigiendo a Stripe/PayPal...`);
        btn.innerText = originalText;
        btn.disabled = false;
    }, 1500);
}

// 2. Gestión de Tickets Dinámica
function newTicket() {
    const searchInput = document.getElementById('ticketSearch');
    const issueText = searchInput.value.trim();

    if (issueText === "") {
        alert("⚠️ Por favor, escribe el asunto de tu consulta antes de crear un ticket.");
        searchInput.focus();
        return;
    }

    // Lógica para actualizar contadores visuales
    const openCountElement = document.querySelector('.stat:nth-child(2) .val');
    let currentOpen = parseInt(openCountElement.innerText.replace('(', '').replace(')', ''));
    
    // Simulación de envío
    alert(`✅ TICKET CREADO: "${issueText}"\nID de seguimiento: #BC-${Math.floor(Math.random() * 9000) + 1000}`);
    
    // Actualizar interfaz
    openCountElement.innerText = `(${currentOpen + 1})`;
    searchInput.value = "";
}

// 3. Sistema de Modales (Registro/Login)
function toggleModal(type) {
    // Aquí puedes integrar ventanas emergentes reales o redirecciones
    const status = type === 'register' ? "Formulario de Registro" : "Acceso a Clientes";
    console.log(`Navegando a: ${status}`);
    
    // Ejemplo de redirección lógica
    // window.location.href = `/auth/${type}`; 
    alert(`💻 Panel de ${type.toUpperCase()} en mantenimiento.\nBlockCraft v1.0 estará listo para producción pronto.`);
}

// 4. Animación de Entrada (Efecto Matrix/Gamer)
document.addEventListener('DOMContentLoaded', () => {
    console.log("BlockCraft Hosting v1.0 - Sistema Cargado");
    
    // Añade un efecto de parpadeo aleatorio a las luces de neón
    const lionLogo = document.querySelector('.lion-logo-glow');
    if(lionLogo) {
        setInterval(() => {
            lionLogo.style.opacity = Math.random() > 0.9 ? '0.7' : '1';
        }, 150;
    }
});
