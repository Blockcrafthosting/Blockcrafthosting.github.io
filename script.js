// Seleccionar elementos
const modal = document.getElementById("authModal");
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");
const closeBtn = document.querySelector(".close-btn");
const toggleAuth = document.getElementById("toggleAuth");
const modalTitle = document.getElementById("modalTitle");
const userGroup = document.getElementById("userGroup");

// Función para abrir como Login
btnLogin.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "Iniciar Sesión";
    userGroup.style.display = "none";
};

// Función para abrir como Registro
btnRegister.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "Crea tu cuenta";
    userGroup.style.display = "block";
};

// Cerrar al hacer clic en la X
closeBtn.onclick = () => modal.style.display = "none";

// Cerrar si hacen clic fuera del cuadro
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};
