/*
==========================================
RAIHAN COFFEE
GALLERY DATABASE
==========================================
*/

const GALLERY = [

  {
    id: 1,
    title: "Coffee Brewing",
    category: "coffee",
    image: "./assets/images/gallery/gallery-1.jpg"
  },

  {
    id: 2,
    title: "Cafe Interior",
    category: "interior",
    image: "./assets/images/gallery/gallery-2.jpg"
  },

  {
    id: 3,
    title: "Coffee Beans",
    category: "beans",
    image: "./assets/images/gallery/gallery-3.jpg"
  },

  {
    id: 4,
    title: "Barista Activity",
    category: "barista",
    image: "./assets/images/gallery/gallery-4.jpg"
  },

  {
    id: 5,
    title: "Signature Coffee",
    category: "coffee",
    image: "./assets/images/gallery/gallery-5.jpg"
  },

  {
    id: 6,
    title: "Customer Moment",
    category: "customer",
    image: "./assets/images/gallery/gallery-6.jpg"
  },

  {
    id: 7,
    title: "Coffee Corner",
    category: "interior",
    image: "./assets/images/gallery/gallery-7.jpg"
  },

  {
    id: 8,
    title: "Roasted Beans",
    category: "beans",
    image: "./assets/images/gallery/gallery-8.jpg"
  }

];


/*
==========================================
SERVICE
==========================================
*/

const GalleryService = {

  getAll() {
    return GALLERY;
  },

  getPreview(limit = 6) {
    return GALLERY.slice(0, limit);
  },

  getByCategory(category) {
    return GALLERY.filter(
      image => image.category === category
    );
  }

};



/*
==========================================
RENDER
==========================================
*/

function renderGalleryPreview() {

  const container =
    document.querySelector(".gallery-grid");

  if (!container) return;

  container.innerHTML = "";

  GalleryService
    .getPreview()
    .forEach(item => {

      container.innerHTML += `

      <article class="gallery-card">

        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy">

        <div class="gallery-overlay">

          <h3>${item.title}</h3>

        </div>

      </article>

      `;

    });

}



function renderGalleryPage() {

  const container =
    document.querySelector("#gallery-list");

  if (!container) return;

  container.innerHTML = "";

  GalleryService
    .getAll()
    .forEach(item => {

      container.innerHTML += `

      <article class="gallery-card">

        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy">

        <div class="gallery-overlay">

          <h3>${item.title}</h3>

        </div>

      </article>

      `;

    });

}



/*
==========================================
INIT
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

  renderGalleryPreview();

  renderGalleryPage();

});