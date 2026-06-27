/*
==========================================
RAIHAN COFFEE
SHOPPING CART
==========================================
*/

const Cart = {

    storageKey: "raihan-coffee-cart",

    items: [],

    init() {

        const savedCart = localStorage.getItem(this.storageKey);

        this.items = savedCart
            ? JSON.parse(savedCart)
            : [];

        this.updateBadge();

        this.render();

    },



    save() {

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.items)
        );

    },



    add(productId) {

        const product =
            ProductService.getById(productId);

        if (!product) return;

        const existing =
            this.items.find(
                item => item.id === productId
            );

        if (existing) {

            existing.qty++;

        } else {

            this.items.push({

                id: product.id,
                qty: 1

            });

        }

        this.save();

        this.updateBadge();

        this.render();

    },



    remove(productId) {

        this.items =
            this.items.filter(
                item => item.id !== productId
            );

        this.save();

        this.updateBadge();

        this.render();

    },



    increase(productId) {

        const item =
            this.items.find(
                item => item.id === productId
            );

        if (!item) return;

        item.qty++;

        this.save();

        this.updateBadge();

        this.render();

    },



    decrease(productId) {

        const item =
            this.items.find(
                item => item.id === productId
            );

        if (!item) return;

        item.qty--;

        if (item.qty <= 0) {

            this.remove(productId);

            return;

        }

        this.save();

        this.updateBadge();

        this.render();

    },



    clear() {

        this.items = [];

        this.save();

        this.updateBadge();

        this.render();

    },



    getSubtotal() {

        let subtotal = 0;

        this.items.forEach(item => {

            const product =
                ProductService.getById(item.id);

            if (!product) return;

            subtotal +=
                product.price * item.qty;

        });

        return subtotal;

    },



    getTotalItems() {

        return this.items.reduce(

            (total, item) =>
                total + item.qty,

            0

        );

    },



    updateBadge() {

        const badge =
            document.getElementById("cart-count");

        if (!badge) return;

        badge.textContent =
            this.getTotalItems();

    },



    render() {

        const container =
            document.getElementById("cart-items");

        if (!container) return;

        if (this.items.length === 0) {

            container.innerHTML = `

                <div class="cart-empty">

                    <h3>

                        Cart is Empty

                    </h3>

                    <p>

                        Start ordering your favorite coffee.

                    </p>

                </div>

            `;

            this.renderSummary();

            return;

        }

        container.innerHTML = "";

        this.items.forEach(item => {

            const product =
                ProductService.getById(item.id);

            if (!product) return;

            container.innerHTML += `

            <article class="cart-card">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div class="cart-info">

                    <h3>

                        ${product.name}

                    </h3>

                    <p>

                        ${formatRupiah(product.price)}

                    </p>

                </div>

                <div class="cart-qty">

                    <button
                        onclick="Cart.decrease(${product.id})">

                        -

                    </button>

                    <span>

                        ${item.qty}

                    </span>

                    <button
                        onclick="Cart.increase(${product.id})">

                        +

                    </button>

                </div>

                <div class="cart-total">

                    ${formatRupiah(
                        product.price * item.qty
                    )}

                </div>

                <button
                    class="cart-remove"
                    onclick="Cart.remove(${product.id})">

                    ×

                </button>

            </article>

            `;

        });

        this.renderSummary();

    },



    renderSummary() {

        const subtotal =
            document.getElementById("subtotal");

        const total =
            document.getElementById("total");

        if (!subtotal || !total) return;

        subtotal.textContent =
            formatRupiah(
                this.getSubtotal()
            );

        total.textContent =
            formatRupiah(
                this.getSubtotal()
            );

    }

};



document.addEventListener(

    "DOMContentLoaded",

    () => {

        Cart.init();

    }

);