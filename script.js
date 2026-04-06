function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu-links");
  const hamburger = document.querySelector(".hamburger-menu");
  if (menu.classList.contains("open") && !hamburger.contains(e.target)) {
    menu.classList.remove("open");
    document.querySelector(".hamburger-icon").classList.remove("open");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll("section:not(#hero)").forEach((section) => {
  section.classList.add("fade-section");
  observer.observe(section);
});
