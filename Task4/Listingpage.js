const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortBy = document.getElementById("sortBy");

const products = [
  { id: 1, name: "Denim Jacket", category: "clothing", price: 70, rating: 4.3, img: "https://tse1.mm.bing.net/th/id/OIP.g0J8DjgQHAnE_WdvFPLghwHaLH?pid=Api&P=0&h=180" },
  { id: 2, name: "Wireless Headphones", category: "electronics", price: 120, rating: 4.8, img: "https://tse3.mm.bing.net/th/id/OIP.DpO9BvSC8255RfrqM4QGqgHaHa?pid=Api&P=0&h=180" },
  { id: 3, name: "Face Serum", category: "beauty", price: 45, rating: 4.1, img: "https://tse2.mm.bing.net/th/id/OIP.o_nHYf-DKXEDIJKPLRz3WgHaHa?pid=Api&P=0&h=180" },
  { id: 4, name: "Smartwatch", category: "electronics", price: 150, rating: 4.6, img: "https://tse2.mm.bing.net/th/id/OIP.cYdBmJQqdevpyDfe6p0mwwHaIv?pid=Api&P=0&h=180" },
  { id: 5, name: "T-shirt", category: "clothing", price: 30, rating: 3.9, img: "https://img.ltwebstatic.com/images3_spmp/2024/10/08/43/17283620192c1fd14132966ed0cc728c584a3f3c59_thumbnail_900x.webp" },
  { id: 6, name: "Lipstick", category: "beauty", price: 25, rating: 4.5, img: "https://tse4.mm.bing.net/th/id/OIP.HP2MmvLWhX-7cWmP8-JrYQHaHa?pid=Api&P=0&h=180" },
  { id: 7, name: "Bluetooth Speaker", category: "electronics", price: 95, rating: 4.4, img: "https://tse4.mm.bing.net/th/id/OIP.TUtqhlRqOZXursfqG2OBMwHaHa?pid=Api&P=0&h=180" },
  { id: 8, name: "Leather Boots", category: "clothing", price: 130, rating: 4.7, img: "https://tse1.mm.bing.net/th/id/OIP.EcTatoHiZal0iij2st_d1AHaHu?pid=Api&P=0&h=180" }
];

function displayProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <h4>${p.name}</h4>
        <p class="price">$${p.price}</p>
        <p class="rating">⭐ ${p.rating}</p>
      </div>
    `;
    productGrid.appendChild(product);
  });
}

function filterProducts() {
  const category = categoryFilter.value;
  const price = priceFilter.value;

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (price !== "all") {
    const [min, max] = price.split("-").map(Number);
    filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true));
  }

  sortProducts(filtered);
}

function sortProducts(list) {
  const sortValue = sortBy.value;

  if (sortValue === "priceLowHigh") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHighLow") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortValue === "ratingHighLow") {
    list.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(list);
}

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
sortBy.addEventListener("change", filterProducts);

displayProducts(products);
