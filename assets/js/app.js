/*
==========================================
RAIHAN COFFEE
APPLICATION CONTROLLER
==========================================
*/

const App = {

    /*
    ==========================================
    CONFIG
    ==========================================
    */

    name: "Raihan Coffee",

    version: "1.0.0",

    author: "Ilham Muhammad Nur Irfan",

    initialized: false,



    /*
    ==========================================
    APPLICATION READY
    ==========================================
    */

    ready(callback) {

        if (

            document.readyState ===

            "loading"

        ) {

            document.addEventListener(

                "DOMContentLoaded",

                callback

            );

        }

        else {

            callback();

        }

    },



    /*
    ==========================================
    INITIALIZE
    ==========================================
    */

    init() {

        if (this.initialized) return;

        this.initialized = true;

        this.initLoader();

        this.initToast();

        this.initNavbar();

        this.initProducts();

        this.initGallery();

        this.initCart();

        this.initCheckout();

        this.initScrollTop();

        this.initAnimation();

        this.initObserver();

        this.initPerformance();

        this.consoleBrand();

    },

    /*
    ==========================================
    NAVBAR
    ==========================================
    */

    initNavbar() {

        if (

            typeof Navbar === "undefined"

        ) return;

        Navbar.init();

    },



    /*
    ==========================================
    PRODUCT
    ==========================================
    */

    initProducts() {

        if (

            typeof ProductService ===

            "undefined"

        ) return;

        if (

            Utils.$("#featured-products")

        ) {

            ProductService.renderFeatured();

        }

        if (

            Utils.$("#product-list")

        ) {

            ProductService.renderAll();

        }

    },



    /*
    ==========================================
    GALLERY
    ==========================================
    */

    initGallery() {

        if (

            typeof GalleryService ===

            "undefined"

        ) return;

        if (

            Utils.$(".gallery-grid")

        ) {

            GalleryService.renderPreview();

        }

        if (

            Utils.$("#gallery-list")

        ) {

            GalleryService.renderGallery();

        }

    },



    /*
    ==========================================
    CART
    ==========================================
    */

    initCart() {

        if (

            typeof Cart ===

            "undefined"

        ) return;

        Cart.init();

    },



    /*
    ==========================================
    CHECKOUT
    ==========================================
    */

    initCheckout() {

        if (

            typeof Checkout ===

            "undefined"

        ) return;

        if (

            Utils.$("#checkout-form")

        ) {

            Checkout.init();

        }

    },

    /*
    ==========================================
    SCROLL TOP
    ==========================================
    */

    initScrollTop() {

        const button =

            Utils.$("#scroll-top");

        if (!button) return;

        window.addEventListener(

            "scroll",

            () => {

                button.classList.toggle(

                    "show",

                    window.scrollY > 400

                );

            }

        );

        button.addEventListener(

            "click",

            Utils.scrollTop

        );

    },



    /*
    ==========================================
    SCROLL ANIMATION
    ==========================================
    */

    initAnimation() {

        const elements =

            document.querySelectorAll(

                ".fade-up, .fade-scale"

            );

        if (!elements.length) return;

        const observer =

            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (

                            entry.isIntersecting

                        ) {

                            entry.target

                                .classList

                                .add("show");

                        }

                    });

                },

                {

                    threshold: 0.15

                }

            );

        elements.forEach(element =>

            observer.observe(element)

        );

    },



    /*
    ==========================================
    INTERSECTION OBSERVER
    ==========================================
    */

    initObserver() {

        const lazyImages =

            document.querySelectorAll(

                "img[loading='lazy']"

            );

        if (!lazyImages.length) return;

        const observer =

            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (

                            entry.isIntersecting

                        ) {

                            entry.target.classList.add(

                                "loaded"

                            );

                        }

                    });

                },

                {

                    rootMargin: "100px"

                }

            );

        lazyImages.forEach(image =>

            observer.observe(image)

        );

    },

    /*
    ==========================================
    LOADER
    ==========================================
    */

    initLoader() {

        const loader =

            Utils.$("#loader");

        if (!loader) return;

        window.addEventListener(

            "load",

            () => {

                loader.classList.add(

                    "hide"

                );

                setTimeout(() => {

                    loader.remove();

                }, 500);

            }

        );

    },



    /*
    ==========================================
    TOAST
    ==========================================
    */

    initToast() {

        if (

            !Utils.$("#toast")

        ) {

            const toast =

                document.createElement("div");

            toast.id = "toast";

            document.body.appendChild(

                toast

            );

        }

    },



    /*
    ==========================================
    CONSOLE BRANDING
    ==========================================
    */

    consoleBrand() {

        console.clear();

        console.log(

            `%c☕ ${this.name}`,

            `
            color:#ffffff;
            background:#5B3A29;
            padding:10px 16px;
            border-radius:6px;
            font-size:16px;
            font-weight:bold;
            `
        );

        console.table({

            Application:

                this.name,

            Version:

                this.version,

            Author:

                this.author,

            Status:

                "Production"

        });

    },



    /*
    ==========================================
    PERFORMANCE
    ==========================================
    */

    initPerformance() {

        window.addEventListener(

            "load",

            () => {

                const time =

                    Math.round(

                        performance.now()

                    );

                console.info(

                    `🚀 Loaded in ${time} ms`

                );

            }

        );

    },
};

/*
==========================================
BOOTSTRAP APPLICATION
==========================================
*/

App.ready(() => {

    App.init();

});
