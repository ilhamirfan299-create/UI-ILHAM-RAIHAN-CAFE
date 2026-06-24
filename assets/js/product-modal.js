document.addEventListener("DOMContentLoaded", () => {

  const products = {
    espresso: {
      name: "Espresso",
      price: "Rp 18.000",
      image: "./assets/images/espresso.jpeg",
      description:
        "Espresso dibuat dari biji kopi pilihan dengan karakter kuat, aroma intens, dan rasa yang kaya."
    },

    cappuccino: {
      name: "Cappuccino",
      price: "Rp 28.000",
      image: "./assets/images/cappuccino.jpeg",
      description:
        "Perpaduan espresso premium, steamed milk, dan foam lembut yang menghasilkan rasa seimbang."
    },

    latte: {
      name: "Signature Latte",
      price: "Rp 30.000",
      image: "./assets/images/latte.jpeg",
      description:
        "Minuman favorit dengan espresso berkualitas tinggi dan susu creamy yang lembut."
    }
  };

  // Create Modal
  const modal = document.createElement("div");

  modal.id = "productModal";

  modal.className =
    "fixed inset-0 bg-black/70 hidden z-[9999] flex items-center justify-center p-4";

  modal.innerHTML = `
    <div
      id="modalContent"
      class="bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto">

      <div class="grid md:grid-cols-2">

        <img
          id="modalImage"
          src=""
          alt=""
          class="w-full h-[350px] md:h-full object-cover">

        <div class="p-8">

          <div class="flex justify-between items-start mb-6">

            <div>

              <h2
                id="modalTitle"
                class="text-3xl font-bold mb-2">
              </h2>

              <p
                id="modalPrice"
                class="text-xl font-semibold text-[#4b3621]">
              </p>

            </div>

            <button
              id="closeModal"
              class="text-2xl font-bold">

              ✕

            </button>

          </div>

          <p
            id="modalDescription"
            class="text-gray-600 leading-8 mb-8">
          </p>

          <a
            href="#order"
            id="modalOrderBtn"
            class="inline-block bg-[#4b3621] text-white px-6 py-3 rounded-full">

            Pesan Sekarang

          </a>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  const modalImage =
    document.getElementById("modalImage");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalPrice =
    document.getElementById("modalPrice");

  const modalDescription =
    document.getElementById("modalDescription");

  const closeModal =
    document.getElementById("closeModal");

  const cards =
    document.querySelectorAll(".product-card");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const key = card.dataset.key;

      const product = products[key];

      if (!product) return;

      modalImage.src = product.image;
      modalImage.alt = product.name;

      modalTitle.textContent = product.name;
      modalPrice.textContent = product.price;
      modalDescription.textContent =
        product.description;

      modal.classList.remove("hidden");

      document.body.style.overflow = "hidden";

    });

  });

  function hideModal() {

    modal.classList.add("hidden");

    document.body.style.overflow = "";

  }

  closeModal.addEventListener("click", hideModal);

  modal.addEventListener("click", (e) => {

    if (e.target === modal) {

      hideModal();

    }

  });

  document.addEventListener("keydown", (e) => {

    if (
      e.key === "Escape" &&
      !modal.classList.contains("hidden")
    ) {

      hideModal();

    }

  });

});  
