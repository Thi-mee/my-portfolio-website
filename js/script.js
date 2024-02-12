const sections = document.querySelectorAll("section");
const navLinks = Array.from(document.querySelectorAll("nav a"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const navLink = navLinks.find(
        (link) => link.getAttribute("href") === `#${entry.target.id}`
      );
      if (entry.isIntersecting && navLink) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));
