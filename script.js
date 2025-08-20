// script.js
// Theme toggle with localStorage
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const icon = btn.querySelector("i");
  const label = btn.querySelector("span");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (theme === "dark") {
      icon.className = "bi bi-moon-stars";
      label && (label.textContent = "Dark");
    } else {
      icon.className = "bi bi-sun";
      label && (label.textContent = "Light");
    }
  }
  const saved = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  apply(saved);

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    apply(next);
  });
})();

// Reveal on scroll
(function () {
  const items = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); });
  }, { threshold: 0.12 });
  items.forEach((el) => obs.observe(el));
})();

// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Collapse navbar on link click (mobile)
document.querySelectorAll("#navlinks .nav-link").forEach((a) => {
  a.addEventListener("click", () => {
    const nav = document.getElementById("navlinks");
    if (nav.classList.contains("show")) {
      const inst = bootstrap.Collapse.getInstance(nav) || new bootstrap.Collapse(nav, { toggle: false });
      inst.hide();
    }
  });
});
