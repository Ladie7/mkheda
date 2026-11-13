
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
          block: "start"
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

  // Purchase button placeholder
  const purchaseButton = document.getElementById("purchaseButton");

  const WHOP_LINK = "";

  if (purchaseButton && WHOP_LINK) {
    purchaseButton.href = WHOP_LINK;
  }

});
