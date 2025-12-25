function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  if (u && p) {
    document.getElementById("msg").innerText = "✅ Bienvenido a BlockCraft Hosting";
  }
}

function openPanel() {
  document.getElementById("panel").classList.remove("hidden");
}

function closePanel() {
  document.getElementById("panel").classList.add("hidden");
}
