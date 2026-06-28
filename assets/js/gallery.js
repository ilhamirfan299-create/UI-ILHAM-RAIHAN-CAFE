/*
==========================================
RAIHAN COFFEE
GALLERY DATABASE
==========================================
*/

const GALLERY = [

    {
        id:1,

        title:"Coffee Brewing",

        category:"coffee",

        description:
        "Fresh espresso brewing process every morning.",

        image:"./assets/images/gallery/gallery-1.jpg",

        featured:true
    },

    {
        id:2,

        title:"Cafe Interior",

        category:"interior",

        description:
        "Warm and minimalist coffee shop atmosphere.",

        image:"./assets/images/gallery/gallery-2.jpg",

        featured:true
    },

    {
        id:3,

        title:"Premium Coffee Beans",

        category:"beans",

        description:
        "Selected arabica beans from Indonesian farmers.",

        image:"./assets/images/gallery/gallery-3.jpg",

        featured:true
    },

    {
        id:4,

        title:"Professional Barista",

        category:"barista",

        description:
        "Experienced barista preparing every cup carefully.",

        image:"./assets/images/gallery/gallery-4.jpg",

        featured:false
    },

    {
        id:5,

        title:"Signature Coffee",

        category:"coffee",

        description:
        "One of Raihan Coffee best selling menu.",

        image:"./assets/images/gallery/gallery-5.jpg",

        featured:true
    },

    {
        id:6,

        title:"Customer Moment",

        category:"customer",

        description:
        "Sharing beautiful moments together at Raihan Coffee.",

        image:"./assets/images/gallery/gallery-6.jpg",

        featured:false
    },

    {
        id:7,

        title:"Coffee Corner",

        category:"interior",

        description:
        "Favorite corner for working and relaxing.",

        image:"./assets/images/gallery/gallery-7.jpg",

        featured:false
    },

    {
        id:8,

        title:"Roasted Beans",

        category:"beans",

        description:
        "Freshly roasted beans with premium quality.",

        image:"./assets/images/gallery/gallery-8.jpg",

        featured:false
    }

];

/*
==========================================
GALLERY SERVICE
==========================================
*/

const GalleryService = {

    /*
    ==========================================
    GET ALL
    ==========================================
    */

    getAll() {

        return GALLERY;

    },



    /*
    ==========================================
    GET FEATURED
    ==========================================
    */

    getFeatured() {

        return GALLERY.filter(

            item => item.featured

        );

    },



    /*
    ==========================================
    GET PREVIEW
    ==========================================
    */

    getPreview(limit = 6) {

        return this
            .getFeatured()
            .slice(0, limit);

    },



    /*
    ==========================================
    GET BY ID
    ==========================================
    */

    getById(id) {

        return GALLERY.find(

            item =>

            item.id === Number(id)

        );

    },



    /*
    ==========================================
    GET CATEGORY
    ==========================================
    */

    getByCategory(category) {

        return GALLERY.filter(

            item =>

            item.category ===

            category.toLowerCase()

        );

    },



    /*
    ==========================================
    SEARCH
    ==========================================
    */

    search(keyword = "") {

        keyword = keyword

            .trim()

            .toLowerCase();

        return GALLERY.filter(item =>

            item.title

                .toLowerCase()

                .includes(keyword)

            ||

            item.description

                .toLowerCase()

                .includes(keyword)

            ||

            item.category

                .toLowerCase()

                .includes(keyword)

        );

    },



    /*
    ==========================================
    GET CATEGORY LIST
    ==========================================
    */

    getCategories() {

        return [

            ...new Set(

                GALLERY.map(

                    item =>

                    item.category

                )

            )

        ];

    },



    /*
    ==========================================
    GET RANDOM
    ==========================================
    */

    getRandom(limit = 6) {

        return [...GALLERY]

            .sort(

                () =>

                Math.random() - .5

            )

            .slice(0, limit);

    },

    /*
    ==========================================
    CREATE GALLERY CARD
    ==========================================
    */

    createCard(item) {

        return `

        <article

            class="gallery-card fade-up"

            data-gallery-id="${item.id}">

            <img

                src="${item.image}"

                alt="${item.title}"

                loading="lazy">

            <div class="gallery-overlay">

                <h3>

                    ${item.title}

                </h3>

                <p>

                    ${item.description}

                </p>

            </div>

        </article>

        `;

    },



    /*
    ==========================================
    RENDER
    ==========================================
    */

    render(items, selector) {

        const container =

            Utils.$(selector);

        if (!container) return;

        if (!items.length) {

            container.innerHTML = `

                <div class="empty-state">

                    <h3>

                        Gallery Not Found

                    </h3>

                    <p>

                        No image available.

                    </p>

                </div>

            `;

            return;

        }

        container.innerHTML =

            items

            .map(item =>

                this.createCard(item)

            )

            .join("");

        this.bindEvents();

    },



    /*
    ==========================================
    RENDER PREVIEW
    ==========================================
    */

    renderPreview(

        selector = ".gallery-grid"

    ) {

        this.render(

            this.getPreview(),

            selector

        );

    },



    /*
    ==========================================
    RENDER ALL
    ==========================================
    */

    renderGallery(

        selector = "#gallery-list"

    ) {

        this.render(

            this.getAll(),

            selector

        );

    },



    /*
    ==========================================
    RENDER CATEGORY
    ==========================================
    */

    renderCategory(

        category,

        selector = "#gallery-list"

    ) {

        this.render(

            this.getByCategory(category),

            selector

        );

    },



    /*
    ==========================================
    RENDER SEARCH
    ==========================================
    */

    renderSearch(

        keyword,

        selector = "#gallery-list"

    ) {

        this.render(

            this.search(keyword),

            selector

        );

    },

    /*
  ==========================================
  BIND GALLERY CLICK
  ==========================================
  */

  bindGalleryClick() {

      const cards =

          document.querySelectorAll(

              ".gallery-card"

          );

      cards.forEach(card => {

          card.addEventListener(

              "click",

              () => {

                  const id = Number(

                      card.dataset.galleryId

                  );

                  const image =

                      this.getById(id);

                  if (!image) return;

                  this.openLightbox(image);

              }

          );

      });

  },



  /*
  ==========================================
  OPEN LIGHTBOX
  ==========================================
  */

  openLightbox(image) {

      console.log(

          "Gallery Preview",

          image

      );

      /*
      ==========================================
      NEXT SPRINT

      Gallery Modal

      ==========================================
      */

  },



  /*
  ==========================================
  BIND EVENTS
  ==========================================
  */

  bindEvents() {

      this.bindGalleryClick();

  },



  /*
  ==========================================
  INITIALIZE
  ==========================================
  */

  init() {

      this.bindEvents();

  }

  };







