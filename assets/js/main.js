document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     HEADER SCROLL EFFECT
  ========================== */

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });


  /* ==========================
     ACTIVE NAVIGATION
  ========================== */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('a[href^="#"]');

  function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("text-[#4b3621]", "font-semibold");

      if (
        link.getAttribute("href") === `#${current}`
      ) {
        link.classList.add(
          "text-[#4b3621]",
          "font-semibold"
        );
      }

    });

  }

  window.addEventListener("scroll", updateActiveNav);


  /* ==========================
     FADE UP ANIMATION
  ========================== */

  const fadeElements =
    document.querySelectorAll(".fade-up");

  if (fadeElements.length > 0) {

    const observer =
      new IntersectionObserver((entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

          }

        });

      }, {
        threshold: 0.15
      });

    fadeElements.forEach(el => {

      observer.observe(el);

    });

  }


  /* ==========================
     WHATSAPP ORDER FORM
  ========================== */

  const orderForm =
    document.querySelector("#order form");

  if (orderForm) {

    orderForm.addEventListener("submit", (e) => {

      e.preventDefault();

      const inputs =
        orderForm.querySelectorAll("input, textarea");

      const nama =
        inputs[0]?.value.trim() || "";

      const whatsapp =
        inputs[1]?.value.trim() || "";

      const catatan =
        inputs[2]?.value.trim() || "";

      if (!nama || !whatsapp) {

        alert(
          "Silakan isi Nama dan WhatsApp terlebih dahulu."
        );

        return;

      }

      const pesan = `
Halo Artisan Bean ☕

Nama: ${nama}
WhatsApp: ${whatsapp}

Catatan:
${catatan}
      `.trim();

      /* GANTI DENGAN NOMOR CAFE */

      const nomorWA =
        "6281234567890";

      const url =
        `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

      window.open(url, "_blank");

    });

  }

});