document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("botao");
    const navMenu = document.querySelector("nav ul");
  
    // hamburger menu functionality
    hamburger.addEventListener("click", () => {
      if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        hamburger.textContent = "☰";
      } else {
        navMenu.style.display = "block";
        hamburger.textContent = "✖";
      }
    });
  });