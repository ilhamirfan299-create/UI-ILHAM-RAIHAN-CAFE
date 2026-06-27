/*
==========================================
RAIHAN COFFEE
APPLICATION
==========================================
*/

const App = {

    init() {

        this.initNavbar();

        this.initProducts();

        this.initGallery();

        this.initCart();

        this.initCheckout();

        this.scrollTop();

        console.log(
            "%c☕ Raihan Coffee Loaded",
            "color:#6f4e37;font-size:14px;font-weight:bold;"
        );

    },



    /*
    ==========================================
    NAVBAR
    ==========================================
    */

    initNavbar() {

        if (typeof Navbar !== "undefined") {

            Navbar.init();

        }

    },



    /*
    ==========================================
    PRODUCT
    ==========================================
    */

    initProducts() {

        if (typeof renderFeaturedProducts === "function") {

            renderFeaturedProducts();

        }

        if (typeof renderMenuProducts === "function") {

            renderMenuProducts();

        }

    },



    /*
    ==========================================
    GALLERY
    ==========================================
    */

    initGallery() {

        if (typeof renderGalleryPreview === "function") {

            renderGalleryPreview();

        }

        if (typeof renderGalleryPage === "function") {

            renderGalleryPage();

        }

    },



    /*
    ==========================================
    CART
    ==========================================
    */

    initCart() {

        if (typeof Cart !== "undefined") {

            Cart.init();

        }

    },



    /*
    ==========================================
    CHECKOUT
    ==========================================
    */

    initCheckout() {

        if (typeof Checkout !== "undefined") {

            Checkout.init();

        }

    },



    /*
    ==========================================
    SCROLL TO TOP
    ==========================================
    */

    scrollTop() {

        const button =
            document.getElementById("scroll-top");

        if (!button) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                button.classList.add("show");

            } else {

                button.classList.remove("show");

            }

        });

        button.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

};



/*
==========================================
PAGE LOADED
==========================================
*/

document.addEventListener(

    "DOMContentLoaded",

    () => {

        App.init();

    }

);