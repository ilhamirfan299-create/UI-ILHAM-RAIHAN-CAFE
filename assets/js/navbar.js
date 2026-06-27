/*
==========================================
RAIHAN COFFEE
NAVBAR
==========================================
*/

const Navbar = {

    init() {

        this.header =
            document.getElementById("header");

        this.menuButton =
            document.getElementById("mobile-menu");

        this.navigation =
            document.querySelector(".navigation");

        this.bindEvents();

        this.activePage();

    },



    /*
    ==========================================
    EVENTS
    ==========================================
    */

    bindEvents() {

        window.addEventListener(

            "scroll",

            () => {

                this.stickyNavbar();

            }

        );

        if (this.menuButton) {

            this.menuButton.addEventListener(

                "click",

                () => {

                    this.toggleMenu();

                }

            );

        }

        document.addEventListener(

            "keydown",

            (event) => {

                if (event.key === "Escape") {

                    this.closeMenu();

                }

            }

        );

        document.addEventListener(

            "click",

            (event) => {

                if (
                    this.navigation &&
                    this.navigation.classList.contains("show") &&
                    !this.navigation.contains(event.target) &&
                    !this.menuButton.contains(event.target)
                ) {

                    this.closeMenu();

                }

            }

        );

    },



    /*
    ==========================================
    STICKY HEADER
    ==========================================
    */

    stickyNavbar() {

        if (!this.header) return;

        if (window.scrollY > 40) {

            this.header.classList.add("scrolled");

        } else {

            this.header.classList.remove("scrolled");

        }

    },



    /*
    ==========================================
    MOBILE MENU
    ==========================================
    */

    toggleMenu() {

        if (!this.navigation) return;

        this.navigation.classList.toggle("show");

        document.body.classList.toggle("menu-open");

    },



    closeMenu() {

        if (!this.navigation) return;

        this.navigation.classList.remove("show");

        document.body.classList.remove("menu-open");

    },



    /*
    ==========================================
    ACTIVE PAGE
    ==========================================
    */

    activePage() {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop();

        const links =
            document.querySelectorAll(
                ".navigation a"
            );

        links.forEach(link => {

            const href =
                link.getAttribute("href");

            if (

                href === currentPage ||

                (
                    currentPage === "" &&
                    href === "index.html"
                )

            ) {

                link.classList.add("active");

            }

        });

    }

};