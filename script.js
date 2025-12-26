const modal = document.getElementById("authModal");
const modalTitle = document.getElementById("modalTitle");
const groupUser = document.getElementById("groupUser");
const btnSubmitForm = document.getElementById("btnSubmitForm");

// Funciones para abrir Modal
document.getElementById("btnOpenLogin").onclick = () => {
    modal.style.display = "block";
    modalTitle.innerText = "Iniciar Sesión";
    groupUser.style.display = "none";
    btnSubmitForm.innerText = "Entrar";
};

document.getElementById("btnOpenRegister").onclick = () => {
    modal.style.display = "block";
    modalTitle.innerText = "Crea tu Cuenta";
    groupUser.style.display = "block";
    btnSubmitForm.innerText = "Registrarse";
};

// Cerrar Modal
document.querySelector(".close").onclick = () => modal.style.display = "none";

// Botones de Compra
document.querySelectorAll(".btn-buy").forEach(button => {
    button.onclick = function() {
        const product = this.getAttribute("data-product");
        this.innerText = "Procesando...";
        setTimeout(() => {
            alert("Redirigiendo a la pasarela de pago para: " + product);
            this.innerText = "Contratar";
        }, 1000);
    };
});

// Manejo de Formulario
document.getElementById("authForm").onsubmit = (e) => {
    e.preventDefault();
    alert("¡Éxito! Procesando tus datos en BlockCraft...");
    modal.style.display = "none";
};
