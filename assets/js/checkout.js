/*
==========================================
RAIHAN COFFEE
CHECKOUT
==========================================
*/

const Checkout = {

    /*
    ==========================================
    CONFIG
    ==========================================
    */

    taxRate: 0,

    shippingFee: 0,

    discount: 0,

    order: null,



    /*
    ==========================================
    BIND EVENTS
    ==========================================
    */

    bindEvents() {

        const form =

            Utils.$("#checkout-form");

        if (form) {

            form.addEventListener(

                "submit",

                event => {

                    event.preventDefault();

                    this.processPayment();

                }

            );

        }



        const paymentMethod =

            document.querySelectorAll(

                "input[name='payment']"

            );

        paymentMethod.forEach(input => {

            input.addEventListener(

                "change",

                () => {

                    Utils.showToast(

                        `Payment : ${input.value}`

                    );

                }

            );

        });

    },



    /*
    ==========================================
    RESET FORM
    ==========================================
    */

    reset() {

        const form =

            Utils.$("#checkout-form");

        if (form) {

            form.reset();

        }

    },

    /*
    ==========================================
    CREATE CHECKOUT ITEM
    ==========================================
    */

    createCheckoutItem(item) {

        return `

        <article
            class="checkout-item">

            <div class="checkout-image">

                <img

                    src="${item.product.image}"

                    alt="${item.product.name}"

                    loading="lazy">

            </div>



            <div class="checkout-info">

                <span>

                    ${Utils.capitalize(

                        item.product.category

                    )}

                </span>

                <h3>

                    ${item.product.name}

                </h3>

                <p>

                    Qty : ${item.qty}

                </p>

            </div>



            <div class="checkout-price">

                ${Utils.formatRupiah(

                    item.subtotal

                )}

            </div>

        </article>

        `;

    },



    /*
    ==========================================
    RENDER ORDER
    ==========================================
    */

    renderOrder() {

        const container =

            Utils.$("#checkout-items");

        if (!container) return;

        const items =

            Cart.getDetailedItems();

        if (!items.length) {

            container.innerHTML = `

                <div class="empty-checkout">

                    <h3>

                        Cart is Empty

                    </h3>

                    <p>

                        Please add your favorite
                        coffee first.

                    </p>

                </div>

            `;

            return;

        }

        container.innerHTML =

            items

            .map(item =>

                this.createCheckoutItem(item)

            )

            .join("");

    },



    /*
    ==========================================
    RENDER SUMMARY
    ==========================================
    */

    renderSummary() {

        const subtotal =

            Utils.$("#checkout-subtotal");

        const shipping =

            Utils.$("#checkout-shipping");

        const tax =

            Utils.$("#checkout-tax");

        const discount =

            Utils.$("#checkout-discount");

        const total =

            Utils.$("#checkout-total");



        if (subtotal)

            subtotal.textContent =

                Utils.formatRupiah(

                    Cart.getSubtotal()

                );



        if (shipping)

            shipping.textContent =

                Utils.formatRupiah(

                    Cart.getShipping()

                );



        if (tax)

            tax.textContent =

                Utils.formatRupiah(

                    Cart.getTax(

                        this.taxRate

                    )

                );



        if (discount)

            discount.textContent =

                Utils.formatRupiah(

                    Cart.getDiscount()

                );



        if (total)

            total.textContent =

                Utils.formatRupiah(

                    Cart.getTotal()

                );

    },

    /*
    ==========================================
    VALIDATE FORM
    ==========================================
    */

    validateForm() {

        const customer =

            Utils.$("#customer-name")

            ?.value

            .trim();

        const phone =

            Utils.$("#customer-phone")

            ?.value

            .trim();

        const payment =

            document.querySelector(

                "input[name='payment']:checked"

            );

        if (!customer) {

            Utils.showToast(

                "Please enter your name."

            );

            return false;

        }

        if (!phone) {

            Utils.showToast(

                "Please enter your phone number."

            );

            return false;

        }

        if (!payment) {

            Utils.showToast(

                "Please select payment method."

            );

            return false;

        }

        return {

            customer,

            phone,

            payment:

                payment.value

        };

    },



    /*
    ==========================================
    CREATE ORDER
    ==========================================
    */

    createOrder() {

        const form =

            this.validateForm();

        if (!form) return null;

        const order = {

            orderId:

                Utils.generateOrderId(),

            customer:

                form.customer,

            phone:

                form.phone,

            payment:

                form.payment,

            items:

                Cart.getDetailedItems(),

            totalItems:

                Cart.getTotalItems(),

            subtotal:

                Cart.getSubtotal(),

            shipping:

                Cart.getShipping(),

            tax:

                Cart.getTax(

                    this.taxRate

                ),

            discount:

                Cart.getDiscount(),

            total:

                Cart.getTotal(),

            createdAt:

                new Date().toISOString()

        };

        this.order = order;

        return order;

    },

    /*
    ==========================================
    PROCESS PAYMENT
    ==========================================
    */

    processPayment() {

        const order =

            this.createOrder();

        if (!order) return;

        Storage.set(

            STORAGE_KEY.LAST_ORDER,

            order

        );

        this.loading();

    },



    /*
    ==========================================
    LOADING
    ==========================================
    */

    loading() {

        const button =

            Utils.$("#pay-button");

        if (button) {

            Utils.buttonLoading(

                button,

                "Processing..."

            );

        }

        Utils.showToast(

            "Processing your payment..."

        );

        setTimeout(() => {

            this.redirect();

        }, 2000);

    },



    /*
    ==========================================
    REDIRECT
    ==========================================
    */

    redirect() {

        this.finishOrder();

    },

    /*
    ==========================================
    SAVE HISTORY
    ==========================================
    */

    saveHistory() {

        if (!this.order) return;

        const history =

            Storage.get(

                STORAGE_KEY.HISTORY,

                []

            );

        history.unshift(this.order);

        Storage.set(

            STORAGE_KEY.HISTORY,

            history

        );

    },



    /*
    ==========================================
    CLEAR CART
    ==========================================
    */

    clearCart() {

        Cart.clear();

    },



    /*
    ==========================================
    FINISH ORDER
    ==========================================
    */

    finishOrder() {

        this.saveHistory();

        this.clearCart();

        this.reset();

        window.location.href =

            "payment-success.html";

    },



    /*
    ==========================================
    INITIALIZE
    ==========================================
    */

    init() {

        Cart.load();

        this.renderOrder();

        this.renderSummary();

        this.bindEvents();

    }

    };
