


document.addEventListener("DOMContentLoaded", function () {
  const timeElement = document.getElementById("current-time");

  function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options);
    const dateString = now.toLocaleDateString();
    timeElement.textContent = ${dateString} ${timeString};
    setTimeout(updateTime, 1000);
  }

  updateTime();
});














// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Toggle Hamburger Animation
  const bars = hamburgerMenu.querySelectorAll("span");
  bars[0].classList.toggle("rotate1");
  bars[1].classList.toggle("hide");
  bars[2].classList.toggle("rotate2");
});

// Navbar Responsive Logic
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});