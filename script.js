const paypalEmail = "angelexepaypal@gmail.com"; // CAMBIA ESTO

document.querySelectorAll(".btn-buy").forEach(button => {
    button.onclick = function() {
        const item = this.getAttribute("data-product");
        const price = this.getAttribute("data-price");
        
        this.innerText = "Conectando...";
        
        // URL de PayPal
        const url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${paypalEmail}&item_name=${encodeURIComponent(item)}&amount=${price}&currency_code=USD`;
        
        setTimeout(() => {
            window.location.href = url;
            this.innerText = "Contratar";
        }, 800);
    };
});

// Lógica de Modales
const modal = document.getElementById("authModal");
const groupUser = document.getElementById("groupUser");
const modalTitle = document.getElementById("modalTitle");

document.getElementById("btnOpenLogin").onclick = () => {
    modal.style.display = "block";
    modalTitle.innerText = "Iniciar Sesión";
    groupUser.style.display = "none";
};

document.getElementById("btnOpenRegister").onclick = () => {
    modal.style.display = "block";
    modalTitle.innerText = "Crear Cuenta";
    groupUser.style.display = "block";
};

document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
