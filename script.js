window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const revealElements = document.querySelectorAll(".reveal-up, .card, .glass-panel");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach(element => revealObserver.observe(element));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

const tiltElements = document.querySelectorAll("[data-tilt]");

if (!prefersReducedMotion && !coarsePointer) {
  tiltElements.forEach(element => {
    element.addEventListener("mousemove", event => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      const rotateY = (x - 0.5) * 14;
      const rotateX = (0.5 - y) * 14;

      element.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "";
    });
  });
} else {
  tiltElements.forEach(element => element.classList.add("is-static"));
}

const filterButtons = document.querySelectorAll(".filter-btn");
const filterCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    filterCards.forEach(card => {
      const categories = card.dataset.category.split(",");
      const shouldShow = filter === "all" || categories.includes(filter);

      if (shouldShow) {
        card.style.display = "";
        requestAnimationFrame(() => {
          card.classList.add("show");
        });
      } else {
        card.classList.remove("show");
        setTimeout(() => {
          card.style.display = "none";
        }, 220);
      }
    });
  });
});

if (coarsePointer) {
  document.querySelectorAll(".portfolio-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
}
