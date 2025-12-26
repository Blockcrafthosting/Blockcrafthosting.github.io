// --- Lógica de Iniciar Sesión / Registro ---
const modal = document.getElementById("authModal");
const openLogin = document.getElementById("openLogin");
const openRegister = document.getElementById("openRegister");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modalTitle");
const userInput = document.getElementById("userInput");
const btnSubmit = document.getElementById("btnSubmit");

// Abrir Login
openLogin.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "Iniciar Sesión";
    userInput.style.display = "none";
    btnSubmit.innerText = "Entrar";
};

// Abrir Registro
openRegister.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "Crear Cuenta";
    userInput.style.display = "block";
    btnSubmit.innerText = "Registrarse";
};

// Cerrar Modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

// --- Lógica de Botones de Compra ---
const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
    button.onclick = function(e) {
        e.preventDefault();
        const plan = this.getAttribute('data-plan');
        
        // Efecto visual de carga
        this.innerText = "Cargando...";
        this.style.opacity = "0.6";
        
        setTimeout(() => {
            alert(`Redirigiendo a la pasarela de pago para: ${plan}`);
            // Aquí pondrías tu link real: window.location.href = "URL_PAYPAL";
            this.innerText = "Comprar Ahora";
            this.style.opacity = "1";
        }, 800);
    };
});

// Manejo del formulario de Login/Registro
document.getElementById("authForm").onsubmit = (e) => {
    e.preventDefault();
    alert("¡Acción realizada con éxito! Bienvenido a BlockCraft.");
    modal.style.display = "none";
};
