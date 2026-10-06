const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const solutionItems = document.querySelectorAll(".solution-item");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

solutionItems.forEach((item) => {
  item.addEventListener("click", () => {
    solutionItems.forEach((currentItem) => currentItem.classList.remove("active"));
    item.classList.add("active");
  });
});
