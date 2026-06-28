/*
==========================================
RAIHAN COFFEE
PRODUCT DATABASE
==========================================
*/

const PRODUCTS = [

    {
        id: 1,

        slug: "espresso",

        name: "Espresso",

        category: "coffee",

        badge: "Best Seller",

        featured: true,

        available: true,

        rating: 4.9,

        sold: 842,

        price: 18000,

        image: "./assets/images/menu/espresso.jpg",

        description:
            "Rich espresso with bold aroma and intense flavor.",

        details: {

            origin: "Gayo Highland",

            roast: "Medium Dark",

            serving: "Hot",

            size: "Single Shot",

            notes: [

                "Dark Chocolate",

                "Caramel",

                "Nutty"

            ]

        }

    },



    {
        id: 2,

        slug: "cappuccino",

        name: "Cappuccino",

        category: "coffee",

        badge: "Best Seller",

        featured: true,

        available: true,

        rating: 4.8,

        sold: 675,

        price: 28000,

        image: "./assets/images/menu/cappuccino.jpg",

        description:
            "Smooth espresso combined with steamed milk and creamy foam.",

        details: {

            origin: "Toraja",

            roast: "Medium",

            serving: "Hot / Ice",

            size: "Regular",

            notes: [

                "Creamy",

                "Milk",

                "Chocolate"

            ]

        }

    },



    {
        id: 3,

        slug: "signature-latte",

        name: "Signature Latte",

        category: "coffee",

        badge: "Signature",

        featured: true,

        available: true,

        rating: 4.9,

        sold: 593,

        price: 30000,

        image: "./assets/images/menu/latte.jpg",

        description:
            "Signature blend with creamy milk and premium espresso.",

        details: {

            origin: "Kintamani",

            roast: "Medium",

            serving: "Hot / Ice",

            size: "Large",

            notes: [

                "Vanilla",

                "Caramel",

                "Cream"

            ]

        }

    },



    {
        id: 4,

        slug: "americano",

        name: "Americano",

        category: "coffee",

        badge: "",

        featured: false,

        available: true,

        rating: 4.7,

        sold: 421,

        price: 22000,

        image: "./assets/images/menu/americano.jpg",

        description:
            "Espresso diluted with hot water for a smooth finish.",

        details: {

            origin: "Aceh",

            roast: "Medium Dark",

            serving: "Hot / Ice",

            size: "Regular",

            notes: [

                "Bold",

                "Cocoa",

                "Clean Finish"

            ]

        }

    },



    {
        id: 5,

        slug: "matcha-latte",

        name: "Matcha Latte",

        category: "non-coffee",

        badge: "Popular",

        featured: true,

        available: true,

        rating: 4.9,

        sold: 712,

        price: 32000,

        image: "./assets/images/menu/matcha.jpg",

        description:
            "Premium Japanese matcha mixed with fresh milk.",

        details: {

            origin: "Kyoto",

            roast: "-",

            serving: "Hot / Ice",

            size: "Large",

            notes: [

                "Matcha",

                "Milk",

                "Fresh"

            ]

        }

    },



    {
        id: 6,

        slug: "chocolate",

        name: "Chocolate",

        category: "non-coffee",

        badge: "",

        featured: false,

        available: true,

        rating: 4.6,

        sold: 338,

        price: 27000,

        image: "./assets/images/menu/chocolate.jpg",

        description:
            "Creamy chocolate drink for every mood.",

        details: {

            origin: "-",

            roast: "-",

            serving: "Hot / Ice",

            size: "Large",

            notes: [

                "Chocolate",

                "Sweet",

                "Creamy"

            ]

        }

    },



    {
        id: 7,

        slug: "croissant",

        name: "Butter Croissant",

        category: "dessert",

        badge: "Fresh",

        featured: false,

        available: true,

        rating: 4.8,

        sold: 287,

        price: 24000,

        image: "./assets/images/menu/croissant.jpg",

        description:
            "Fresh baked buttery croissant with crispy outside and soft inside.",

        details: {

            origin: "Fresh Bakery",

            roast: "-",

            serving: "Ready",

            size: "1 pcs",

            notes: [

                "Butter",

                "Crispy",

                "Soft"

            ]

        }

    },



    {
        id: 8,

        slug: "cheesecake",

        name: "Cheesecake",

        category: "dessert",

        badge: "Chef Choice",

        featured: false,

        available: true,

        rating: 4.9,

        sold: 366,

        price: 35000,

        image: "./assets/images/menu/cheesecake.jpg",

        description:
            "Soft homemade cheesecake with creamy texture and premium cheese.",

        details: {

            origin: "Homemade",

            roast: "-",

            serving: "Slice",

            size: "Regular",

            notes: [

                "Cheese",

                "Cream",

                "Sweet"

            ]

        }

    }

];

/*
==========================================
PRODUCT SERVICE
==========================================
*/

const ProductService = {

    /*
    ==========================================
    GET ALL
    ==========================================
    */

    getAll() {

        return PRODUCTS;

    },



    /*
    ==========================================
    GET FEATURED
    ==========================================
    */

    getFeatured() {

        return PRODUCTS.filter(

            product => product.featured

        );

    },



    /*
    ==========================================
    GET AVAILABLE
    ==========================================
    */

    getAvailable() {

        return PRODUCTS.filter(

            product => product.available

        );

    },



    /*
    ==========================================
    GET BY ID
    ==========================================
    */

    getById(id) {

        return PRODUCTS.find(

            product => product.id === Number(id)

        );

    },



    /*
    ==========================================
    GET BY SLUG
    ==========================================
    */

    getBySlug(slug) {

        return PRODUCTS.find(

            product => product.slug === slug

        );

    },



    /*
    ==========================================
    GET CATEGORY
    ==========================================
    */

    getByCategory(category) {

        return PRODUCTS.filter(

            product =>

            product.category ===
            category.toLowerCase()

        );

    },



    /*
    ==========================================
    GET BADGE
    ==========================================
    */

    getByBadge(badge) {

        return PRODUCTS.filter(

            product =>

            product.badge
            .toLowerCase() ===
            badge.toLowerCase()

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

        return PRODUCTS.filter(product =>

            product.name
            .toLowerCase()
            .includes(keyword)

            ||

            product.category
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

                PRODUCTS.map(

                    product =>
                    product.category

                )

            )

        ];

    },



    /*
    ==========================================
    GET FEATURED LIMIT
    ==========================================
    */

    getFeaturedLimit(limit = 3) {

        return this
            .getFeatured()
            .slice(0, limit);

    },



    /*
    ==========================================
    GET RANDOM
    ==========================================
    */

    getRandom(limit = 3) {

        return [...PRODUCTS]

            .sort(() =>

                Math.random() - .5

            )

            .slice(0, limit);

    },



    /*
    ==========================================
    GET RELATED
    ==========================================
    */

    getRelated(productId, limit = 3) {

        const product =

            this.getById(productId);

        if (!product) return [];

        return PRODUCTS

            .filter(item =>

                item.category ===

                product.category

                &&

                item.id !== product.id

            )

            .slice(0, limit);

    },

    /*
    ==========================================
    CREATE PRODUCT CARD
    ==========================================
    */

    createCard(product) {

        return `

        <article
            class="product-card fade-up">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy">

                <div class="product-overlay"></div>

                ${product.badge
                    ? `
                    <span class="product-badge">

                        ${product.badge}

                    </span>
                    `
                    : ""
                }

            </div>



            <div class="product-content">

                <span class="product-tag">

                    <i class="ri-cup-line"></i>

                    ${Utils.capitalize(product.category)}

                </span>



                <h3>

                    ${product.name}

                </h3>



                <p>

                    ${product.description}

                </p>



                <div class="product-rating">

                    <i class="ri-star-fill"></i>

                    <span>

                        ${product.rating}

                    </span>

                    <span class="product-meta">

                        ⭐ ${product.rating}

                        •

                        ${product.sold} Sold

                    </span>

                </div>



                <div class="product-footer">

                    <span class="product-price">

                        ${Utils.formatRupiah(
                            product.price
                        )}

                    </span>



                    <button

                        class="product-button"

                        data-product-id="${product.id}"

                        aria-label="Add ${product.name}">

                        <i class="ri-add-line"></i>

                    </button>

                </div>

            </div>

        </article>

        `;

    },

    /*
    ==========================================
    RENDER
    ==========================================
    */

    render(products, selector) {

        const container =
            Utils.$(selector);

        if (!container) return;

        if (!products.length) {

            container.innerHTML = `

                <div class="empty-state">

                    <h3>

                        Product Not Found

                    </h3>

                    <p>

                        No product available.

                    </p>

                </div>

            `;

            return;

        }

        const html = products

            .map(product =>

                this.createCard(product)

            )

            .join("");

        container.innerHTML = html;

        this.bindEvents();

    },



    /*
    ==========================================
    RENDER FEATURED
    ==========================================
    */

    renderFeatured(selector = "#featured-products") {

        this.render(

            this.getFeaturedLimit(3),

            selector

        );

    },



    /*
    ==========================================
    RENDER ALL
    ==========================================
    */

    renderAll(selector = "#product-list") {

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

        selector = "#product-list"

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

        selector = "#product-list"

    ) {

        this.render(

            this.search(keyword),

            selector

        );

    },

    /*
    ==========================================
    BIND ADD TO CART
    ==========================================
    */

    bindAddToCart() {

        const buttons =

            document.querySelectorAll(

                ".product-button"

            );

        buttons.forEach(button => {

            button.addEventListener(

                "click",

                () => {

                    const productId =

                        Number(

                            button.dataset.productId

                        );

                    if (

                        typeof Cart !== "undefined" &&

                        Cart.add

                    ) {

                        Cart.add(productId);

                    }

                    else {

                        console.warn(

                            "Cart Module Not Found"

                        );

                    }

                }

            );

        });

    },



    /*
    ==========================================
    BIND PRODUCT DETAIL
    ==========================================
    */

    bindProductDetail() {

        const cards =

            document.querySelectorAll(

                ".product-card"

            );

        cards.forEach(card => {

            card.addEventListener(

                "click",

                event => {

                    if (

                        event.target.closest(

                            ".product-button"

                        )

                    ) {

                        return;

                    }

                    const name =

                        card.querySelector("h3")

                        ?.textContent;

                    console.log(

                        "Open Detail :", name

                    );

                    /*
                    NEXT SPRINT

                    ProductModal.open()

                    */

                }

            );

        });

    },



    /*
    ==========================================
    BIND EVENTS
    ==========================================
    */

    bindEvents() {

        this.bindAddToCart();

        this.bindProductDetail();

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
