/*
==========================================
RAIHAN COFFEE
CHECKOUT
==========================================
*/

const Checkout = {

    taxRate: 0,
    serviceRate: 0,

    init() {

        this.renderOrder();

        this.bindEvents();

    },



    bindEvents() {

        const form =
            document.getElementById("checkout-form");

        if (!form) return;

        form.addEventListener(

            "submit",

            (event) => {

                event.preventDefault();

                this.processPayment();

            }

        );

    },



    renderOrder() {

        const container =
            document.getElementById("checkout-items");

        if (!container) return;

        container.innerHTML = "";

        if (Cart.items.length === 0) {

            container.innerHTML = `

                <div class="empty-checkout">

                    <h3>

                        Cart is Empty

                    </h3>

                    <p>

                        Please add some coffee first.

                    </p>

                </div>

            `;

            return;

        }

        Cart.items.forEach(item => {

            const product =
                ProductService.getById(item.id);

            if (!product) return;

            container.innerHTML += `

                <div class="checkout-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}">

                    <div>

                        <h3>

                            ${product.name}

                        </h3>

                        <p>

                            Qty : ${item.qty}

                        </p>

                    </div>

                    <strong>

                        ${formatRupiah(
                            product.price * item.qty
                        )}

                    </strong>

                </div>

            `;

        });

        this.renderSummary();

    },



    renderSummary() {

        const subtotal =
            Cart.getSubtotal();

        const tax =
            subtotal * this.taxRate;

        const service =
            subtotal * this.serviceRate;

        const total =
            subtotal + tax + service;

        document.getElementById("checkout-subtotal").textContent =
            formatRupiah(subtotal);

        document.getElementById("checkout-tax").textContent =
            formatRupiah(tax);

        document.getElementById("checkout-service").textContent =
            formatRupiah(service);

        document.getElementById("checkout-total").textContent =
            formatRupiah(total);

    },



    processPayment() {

        const customer =
            document.getElementById("customer-name").value.trim();

        const phone =
            document.getElementById("customer-phone").value.trim();

        const payment =
            document.querySelector(

                "input[name='payment']:checked"

            );

        if (!customer) {

            alert("Please enter your name.");

            return;

        }

        if (!phone) {

            alert("Please enter your phone number.");

            return;

        }

        if (!payment) {

            alert("Please select payment method.");

            return;

        }

        const order = {

            orderId:
                generateOrderId(),

            customer,

            phone,

            payment:
                payment.value,

            items:
                Cart.items,

            subtotal:
                Cart.getSubtotal(),

            total:
                Cart.getSubtotal(),

            createdAt:
                new Date()

        };

        localStorage.setItem(

            "raihan-last-order",

            JSON.stringify(order)

        );

        this.showLoading();

    },



    showLoading() {

        const button =
            document.getElementById("pay-button");

        if (button) {

            button.disabled = true;

            button.innerHTML =

                "Processing Payment...";

        }

        setTimeout(() => {

            Cart.clear();

            window.location.href =
                "payment-success.html";

        }, 2500);

    }

};



document.addEventListener(

    "DOMContentLoaded",

    () => {

        Checkout.init();

    }

);