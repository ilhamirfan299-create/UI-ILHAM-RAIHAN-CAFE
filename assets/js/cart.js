/*
==========================================
RAIHAN COFFEE
SHOPPING CART
==========================================
*/

const Cart = {

    /*
    ==========================================
    CONFIG
    ==========================================
    */

    storageKey: STORAGE_KEY.CART,

    items: [],



    /*
    ==========================================
    LOAD CART
    ==========================================
    */

    load() {

        this.items =

            Storage.get(

                this.storageKey,

                []

            );

    },



    /*
    ==========================================
    SAVE CART
    ==========================================
    */

    save() {

        Storage.set(

            this.storageKey,

            this.items

        );

        this.updateBadge();

        this.render();

    },



    /*
    ==========================================
    RESET CART
    ==========================================
    */

    reset() {

        this.items = [];

        this.save();

    },



    /*
    ==========================================
    ADD PRODUCT
    ==========================================
    */

    add(productId) {

        const product =

            ProductService.getById(productId);

        if (!product) return;

        const item =

            this.items.find(

                cartItem =>

                cartItem.id === productId

            );

        if (item) {

            item.qty++;

        }

        else {

            this.items.push({

                id: product.id,

                qty: 1

            });

        }

        Utils.showToast(

            `${product.name} added to cart`

        );

        this.save();

    },



    /*
    ==========================================
    REMOVE PRODUCT
    ==========================================
    */

    remove(productId) {

        this.items =

            this.items.filter(

                item =>

                item.id !== productId

            );

        Utils.showToast(

            "Product removed"

        );

        this.save();

    },



    /*
    ==========================================
    INCREASE QUANTITY
    ==========================================
    */

    increase(productId) {

        const item =

            this.items.find(

                item =>

                item.id === productId

            );

        if (!item) return;

        item.qty++;

        this.save();

    },



    /*
    ==========================================
    DECREASE QUANTITY
    ==========================================
    */

    decrease(productId) {

        const item =

            this.items.find(

                item =>

                item.id === productId

            );

        if (!item) return;

        if (item.qty > 1) {

            item.qty--;

        }

        else {

            this.remove(productId);

            return;

        }

        this.save();

    },



    /*
    ==========================================
    CLEAR CART
    ==========================================
    */

    clear() {

        this.items = [];

        Utils.showToast(

            "Cart cleared"

        );

        this.save();

    },

    /*
    ==========================================
    GET ITEMS
    ==========================================
    */

    getItems() {

        return this.items;

    },



    /*
    ==========================================
    GET TOTAL ITEMS
    ==========================================
    */

    getTotalItems() {

        return this.items.reduce(

            (total, item) =>

                total + item.qty,

            0

        );

    },



    /*
    ==========================================
    GET SUBTOTAL
    ==========================================
    */

    getSubtotal() {

        return this.items.reduce(

            (subtotal, item) => {

                const product =

                    ProductService.getById(

                        item.id

                    );

                if (!product) {

                    return subtotal;

                }

                return subtotal +

                    (product.price * item.qty);

            },

            0

        );

    },



    /*
    ==========================================
    GET TAX
    ==========================================
    */

    getTax(rate = 0) {

        return Math.round(

            this.getSubtotal()

            * rate

        );

    },



    /*
    ==========================================
    GET SHIPPING
    ==========================================
    */

    getShipping() {

        return 0;

    },



    /*
    ==========================================
    GET DISCOUNT
    ==========================================
    */

    getDiscount() {

        return 0;

    },



    /*
    ==========================================
    GET TOTAL
    ==========================================
    */

    getTotal() {

        return (

            this.getSubtotal()

            +

            this.getShipping()

            +

            this.getTax()

            -

            this.getDiscount()

        );

    },

    /*
    ==========================================
    GET DETAILED ITEMS
    ==========================================
    */

    getDetailedItems() {

        return this.items

            .map(item => {

                const product =

                    ProductService.getById(

                        item.id

                    );

                if (!product) return null;

                return {

                    ...item,

                    product,

                    subtotal:

                        product.price *

                        item.qty

                };

            })

            .filter(Boolean);

    },



    /*
    ==========================================
    CREATE CART ITEM
    ==========================================
    */

    createCartItem(item) {

        return `

        <article
            class="cart-card"

            data-product-id="${item.product.id}">

            <div class="cart-image">

                <img

                    src="${item.product.image}"

                    alt="${item.product.name}"

                    loading="lazy">

            </div>



            <div class="cart-info">

                <span>

                    ${Utils.capitalize(

                        item.product.category

                    )}

                </span>

                <h3>

                    ${item.product.name}

                </h3>

                <p>

                    ${Utils.formatRupiah(

                        item.product.price

                    )}

                </p>

            </div>



            <div class="cart-quantity">

                <button

                    class="qty-btn"

                    data-action="decrease"

                    data-id="${item.product.id}">

                    −

                </button>

                <span>

                    ${item.qty}

                </span>

                <button

                    class="qty-btn"

                    data-action="increase"

                    data-id="${item.product.id}">

                    +

                </button>

            </div>



            <div class="cart-subtotal">

                ${Utils.formatRupiah(

                    item.subtotal

                )}

            </div>



            <button

                class="cart-remove"

                data-action="remove"

                data-id="${item.product.id}"

                aria-label="Remove">

                <i

                    class="ri-delete-bin-line">

                </i>

            </button>

        </article>

        `;

    },



    /*
    ==========================================
    RENDER CART
    ==========================================
    */

    render() {

        const container =

            Utils.$(

                "#cart-items"

            );

        if (!container) return;

        const items =

            this.getDetailedItems();

        if (!items.length) {

            container.innerHTML = `

                <div class="cart-empty">

                    <h3>

                        Cart is Empty

                    </h3>

                    <p>

                        Start ordering your
                        favorite coffee.

                    </p>

                </div>

            `;

            this.renderSummary();

            return;

        }

        container.innerHTML =

            items

            .map(item =>

                this.createCartItem(item)

            )

            .join("");

        this.renderSummary();

        this.bindEvents();

    },



    /*
    ==========================================
    RENDER SUMMARY
    ==========================================
    */

    renderSummary() {

        const subtotal =

            Utils.$("#subtotal");

        const tax =

            Utils.$("#tax");

        const shipping =

            Utils.$("#shipping");

        const discount =

            Utils.$("#discount");

        const total =

            Utils.$("#total");

        if (subtotal)

            subtotal.textContent =

                Utils.formatRupiah(

                    this.getSubtotal()

                );

        if (tax)

            tax.textContent =

                Utils.formatRupiah(

                    this.getTax()

                );

        if (shipping)

            shipping.textContent =

                Utils.formatRupiah(

                    this.getShipping()

                );

        if (discount)

            discount.textContent =

                Utils.formatRupiah(

                    this.getDiscount()

                );

        if (total)

            total.textContent =

                Utils.formatRupiah(

                    this.getTotal()

                );

    },

    /*
    ==========================================
    UPDATE BADGE
    ==========================================
    */

    updateBadge() {

        const badge =

            Utils.$("#cart-count");

        if (!badge) return;

        badge.textContent =

            this.getTotalItems();

    },



    /*
    ==========================================
    BIND QUANTITY
    ==========================================
    */

    bindQuantity() {

        document

            .querySelectorAll(

                ".qty-btn"

            )

            .forEach(button => {

                button.addEventListener(

                    "click",

                    () => {

                    const id = Number(

                        button.dataset.id

                    );

                    const action =

                        button.dataset.action;

                    switch (action) {

                        case "increase":

                            this.increase(id);

                            break;

                        case "decrease":

                            this.decrease(id);

                            break;

                    }

                }

                );

            });

    },



    /*
    ==========================================
    BIND REMOVE
    ==========================================
    */

    bindRemove() {

        document

            .querySelectorAll(

                ".cart-remove"

            )

            .forEach(button => {

                button.onclick = () => {

                    this.remove(

                        Number(

                            button.dataset.id

                        )

                    );

                };

            });

    },



    /*
    ==========================================
    BIND CHECKOUT
    ==========================================
    */

    bindCheckout() {

        const button =

            Utils.$("#checkout-button");

        if (!button) return;

        button.onclick = () => {

            if (!this.items.length) {

                Utils.showToast(

                    "Cart is empty"

                );

                return;

            }

            window.location.href =

                "checkout.html";

        };

    },



    /*
    ==========================================
    BIND EVENTS
    ==========================================
    */

    bindEvents() {

        this.bindQuantity();

        this.bindRemove();

        this.bindCheckout();

    },



    /*
    ==========================================
    INITIALIZE
    ==========================================
    */

    init() {

        this.load();

        this.updateBadge();

        this.render();

    }
}
