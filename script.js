function startQuiz() {
  window.location.href = "sobre.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));

  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("menu-active");
    menuBtn.classList.toggle("active");
  });
});
