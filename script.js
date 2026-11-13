
// MIKHADDA - Website Scripts

document.addEventListener("DOMContentLoaded", () => {

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: targetId === "#purchase" ? "center" : "start"
        });
      }
    });
  });

  // FAQ interaction
  const questions = document.querySelectorAll(".faq details");

  questions.forEach(question => {
    question.addEventListener("toggle", () => {
      if (question.open) {
        questions.forEach(other => {
          if (other !== question) {
            other.open = false;
          }
        });
      }
    });
  });

  // Whop Purchase Link
  const WHOP_LINK = "https://whop.com/checkout/plan_f6vVHr2D3Dxro";

  const purchaseButton = document.getElementById("purchaseButton");

  if (purchaseButton) {
    purchaseButton.href = WHOP_LINK;
  }

});
