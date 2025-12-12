// ===== Page Fade In =====
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll(".card, .video-box, .about, .contact-box");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== Active Nav Link =====
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
