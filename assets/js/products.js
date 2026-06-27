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
    price: 18000,
    image: "./assets/images/menu/espresso.jpg",
    description:
      "Rich espresso with bold aroma and intense flavor.",
    featured: true,
    bestseller: true,
    available: true,

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
    price: 28000,
    image: "./assets/images/menu/cappuccino.jpg",
    description:
      "Smooth espresso combined with steamed milk and creamy foam.",
    featured: true,
    bestseller: true,
    available: true,

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
    price: 30000,
    image: "./assets/images/menu/latte.jpg",
    description:
      "Signature blend with creamy milk and premium espresso.",
    featured: true,
    bestseller: false,
    available: true,

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
    price: 22000,
    image: "./assets/images/menu/americano.jpg",
    description:
      "Espresso diluted with hot water for a smooth finish.",
    featured: false,
    bestseller: false,
    available: true,

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
    price: 32000,
    image: "./assets/images/menu/matcha.jpg",
    description:
      "Premium Japanese matcha mixed with fresh milk.",
    featured: true,
    bestseller: true,
    available: true,

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
    price: 27000,
    image: "./assets/images/menu/chocolate.jpg",
    description:
      "Creamy chocolate drink for every mood.",
    featured: false,
    bestseller: false,
    available: true,

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
    price: 24000,
    image: "./assets/images/menu/croissant.jpg",
    description:
      "Fresh baked buttery croissant.",
    featured: false,
    bestseller: true,
    available: true,

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
    price: 35000,
    image: "./assets/images/menu/cheesecake.jpg",
    description:
      "Soft cheesecake with creamy texture.",
    featured: false,
    bestseller: true,
    available: true,

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
HELPER
==========================================
*/

const ProductService = {

  getAll() {
    return PRODUCTS;
  },

  getFeatured() {
    return PRODUCTS.filter(product => product.featured);
  },

  getBestSeller() {
    return PRODUCTS.filter(product => product.bestseller);
  },

  getByCategory(category) {
    return PRODUCTS.filter(
      product => product.category === category
    );
  },

  getById(id) {
    return PRODUCTS.find(
      product => product.id === id
    );
  },

  getBySlug(slug) {
    return PRODUCTS.find(
      product => product.slug === slug
    );
  }

};