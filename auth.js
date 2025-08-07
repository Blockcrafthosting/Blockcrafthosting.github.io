
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  const netlifyIdentity = window.netlifyIdentity;

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.password.value;
      netlifyIdentity.login(email, password, true)
        .then(user => {
          window.location.href = "dashboard.html";
        })
        .catch(err => alert("Error de inicio de sesión"));
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = signupForm.email.value;
      const password = signupForm.password.value;
      netlifyIdentity.signup(email, password)
        .then(user => {
          window.location.href = "dashboard.html";
        })
        .catch(err => alert("Error al registrar"));
    });
  }
});
