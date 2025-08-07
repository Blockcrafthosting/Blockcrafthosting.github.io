
const stripe = Stripe("pk_test_XXXXXXXXXXXXXXXXXXXX"); // Reemplaza con tu clave pública

function goToCheckout(planId) {
  stripe.redirectToCheckout({
    lineItems: [{ price: planId, quantity: 1 }],
    mode: "subscription",
    successUrl: window.location.origin + "/dashboard.html",
    cancelUrl: window.location.origin + "/plans.html",
  }).then(result => {
    if (result.error) {
      alert(result.error.message);
    }
  });
}
