
// MIKHADDA - Website Scripts

document.addEventListener("DOMContentLoaded", () => {

  // Whop Purchase Link
  const WHOP_LINK = "https://whop.com/checkout/plan_f6vVHr2D3Dxro";

  // Welcome Popup
  const welcomePopup = document.getElementById("welcomePopup");
  const closeWelcome = document.getElementById("closeWelcome");
  const continueBrowsing = document.getElementById("continueBrowsing");

  function hideWelcome() {
    if (welcomePopup) {
      welcomePopup.classList.remove("active");
      document.body.classList.remove("popup-open");
    }
  }

  if (welcomePopup) {
    // Show popup after page loads
    setTimeout(() => {
      welcomePopup.classList.add("active");
      document.body.classList.add("popup-open");
    }, 500);

    // Close popup
    if (closeWelcome) {
      closeWelcome.addEventListener("click", hideWelcome);
    }

    // Continue browsing
    if (continueBrowsing) {
      continueBrowsing.addEventListener("click", hideWelcome);
    }

    // Close when clicking outside popup
    welcomePopup.addEventListener("click", (event) => {
      if (event.target === welcomePopup) {
        hideWelcome();
      }
    });

    // Close with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        hideWelcome();
      }
    });
  }

  // Smooth Navigation
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

  // FAQ Interaction
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

  // Apply Whop Link to Purchase Buttons
  document.querySelectorAll("#purchaseButton, .welcome-buy").forEach(button => {
    button.href = WHOP_LINK;
  });

});
