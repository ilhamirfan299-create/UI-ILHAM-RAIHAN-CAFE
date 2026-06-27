/*
==========================================
RAIHAN COFFEE
UTILITY MODULE
==========================================
*/

const Utils = {

    /*
    ==========================================
    FORMAT RUPIAH
    ==========================================
    */

    formatRupiah(number = 0) {

        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(number);

    },



    /*
    ==========================================
    FORMAT NUMBER
    ==========================================
    */

    formatNumber(number = 0) {

        return new Intl.NumberFormat("id-ID")
            .format(number);

    },



    /*
    ==========================================
    GENERATE ORDER ID
    ==========================================
    */

    generateOrderId() {

        const now = new Date();

        const year = now.getFullYear();

        const month = String(
            now.getMonth() + 1
        ).padStart(2, "0");

        const date = String(
            now.getDate()
        ).padStart(2, "0");

        const random = Math.floor(
            1000 + Math.random() * 9000
        );

        return `RC-${year}${month}${date}-${random}`;

    },



    /*
    ==========================================
    TODAY
    ==========================================
    */

    getToday() {

        return new Date().toLocaleDateString(
            "id-ID",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );

    },



    /*
    ==========================================
    CURRENT TIME
    ==========================================
    */

    getCurrentTime() {

        return new Date().toLocaleTimeString(
            "id-ID",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    },



    /*
    ==========================================
    SLUG
    ==========================================
    */

    slugify(text = "") {

        return text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-");

    },



    /*
    ==========================================
    DEBOUNCE
    ==========================================
    */

    debounce(callback, delay = 300) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    },



    /*
    ==========================================
    SCROLL TOP
    ==========================================
    */

    scrollTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    },



    /*
    ==========================================
    SELECTOR
    ==========================================
    */

    $(selector) {

        return document.querySelector(selector);

    },



    $$(selector) {

        return document.querySelectorAll(selector);

    },



    /*
    ==========================================
    CREATE ELEMENT
    ==========================================
    */

    createElement(tag, className = "") {

        const element =
            document.createElement(tag);

        element.className = className;

        return element;

    },



    /*
    ==========================================
    BUTTON
    ==========================================
    */

    buttonLoading(button, text = "Loading...") {

        if (!button) return;

        button.disabled = true;

        button.dataset.text =
            button.innerHTML;

        button.innerHTML = text;

    },



    buttonReset(button) {

        if (!button) return;

        button.disabled = false;

        button.innerHTML =
            button.dataset.text;

    },



    /*
    ==========================================
    TOAST
    ==========================================
    */

    showToast(message, duration = 2500) {

        let toast =
            document.getElementById("toast");

        if (!toast) {

            toast =
                document.createElement("div");

            toast.id = "toast";

            document.body.appendChild(toast);

        }

        toast.textContent = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, duration);

    },



    /*
    ==========================================
    RANDOM
    ==========================================
    */

    randomItem(array = []) {

        return array[
            Math.floor(
                Math.random() * array.length
            )
        ];

    },



    /*
    ==========================================
    COPY
    ==========================================
    */

    async copyText(text) {

        try {

            await navigator.clipboard.writeText(text);

            this.showToast("Copied!");

        }

        catch {

            this.showToast("Copy Failed");

        }

    },



    /*
    ==========================================
    EMPTY
    ==========================================
    */

    isEmpty(value) {

        return value === null ||
            value === undefined ||
            value === "";

    },



    /*
    ==========================================
    SLEEP
    ==========================================
    */

    sleep(ms) {

        return new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    },



    /*
    ==========================================
    CAPITALIZE
    ==========================================
    */

    capitalize(text = "") {

        return text.charAt(0)
            .toUpperCase() +
            text.slice(1);

    }

};