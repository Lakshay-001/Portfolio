// Page load animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Scroll reveal
const revealEls = document.querySelectorAll(".card, .section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => observer.observe(el));

// Work page filters
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const categories = card.dataset.category.split(",");

      if (filter === "all" || categories.includes(filter)) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), 50);
      } else {
        card.classList.remove("show");
        setTimeout(() => card.style.display = "none", 300);
      }
    });
  });
});


// Mobile tap = hover fallback
if (window.matchMedia("(hover: none)").matches) {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
}
