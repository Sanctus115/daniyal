let cartCount = 0;
const cartSpan = document.getElementById("cart-count");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartSpan.textContent = cartCount;
  });
});