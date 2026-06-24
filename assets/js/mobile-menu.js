document.addEventListener("DOMContentLoaded", () => {

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMobileMenu = document.getElementById("closeMobileMenu");

  if (!mobileMenuBtn || !mobileMenu || !closeMobileMenu) {
    console.error("Mobile menu element tidak ditemukan.");
    return;
  }

  // Open Menu
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  // Close Menu
  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  });

  // Klik area gelap untuk close
  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  // Klik menu otomatis close
  const menuLinks = mobileMenu.querySelectorAll("a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  // ESC key
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      !mobileMenu.classList.contains("hidden")
    ) {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

});