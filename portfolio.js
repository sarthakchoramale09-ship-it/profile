// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Fade-in Animation
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

faders.forEach(fade => observer.observe(fade));

// Skill Bars
const bars = document.querySelectorAll(".progress");
bars.forEach(bar => {
  const level = bar.getAttribute("data-level");
  bar.style.width = level + "%";
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (!name || !email || !subject || !message) {
    msg.textContent = "All fields are required!";
    msg.style.color = "red";
    return;
  }

  if (!emailPattern.test(email)) {
    msg.textContent = "Enter a valid email!";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";
  e.target.reset();
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
