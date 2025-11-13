const products = [
  { name: "Smart Watch", price: 2999, category: "electronics", img: "https://m.media-amazon.com/images/I/71qoQVetqhL.jpg" },
  { name: "Wireless Headphones", price: 1499, category: "electronics", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5761/5761208_rd.jpg" },
  { name: "Casual Sneakers", price: 2199, category: "fashion", img: "https://tse3.mm.bing.net/th/id/OIP.8B1lZAMriKkcpT8UCkwZBAHaHa?pid=Api&P=0&h=180" },
  { name: "Sunglasses", price: 999, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.XrG4925fPGIRJ_BV6y_hhAHaE8?pid=Api&P=0&h=180" },
  { name: "Backpack", price: 1299, category: "fashion", img: "https://tse4.mm.bing.net/th/id/OIP.0Bq4D0D3gV-1xXRB5rkkrwHaI0?pid=Api&P=0&h=180" },
  { name: "Smartphone", price: 14999, category: "electronics", img: "https://www.samsungmobilepress.com/file/B1451680D49421D2EF196E8744B721CB102084AE494FEF3EA0040E0EA67ED31E895F515F2E6B5A8920B2251EF086C1662A573753A31D59F35A05E4724CEA7A052F35353ECFFE1C40AC11DF482128D81EA3D05347CFFF7AD38B703E0F7BB4F7847C1395FF032CCD0E85C72D1D97B6B2DFDBC24B570CAFE3316C10B5EFEE876114" }
];

let cart = [];

const productList = document.getElementById("productList");
const cartSection = document.getElementById("cartSection");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");

function displayProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <button class="shop-btn" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  cartSection.classList.add("active");
  window.scrollTo({ top: cartSection.offsetTop, behavior: "smooth" });
}


function updateCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p>Your cart is empty 🛒</p>`;
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${index})">Remove</button>
      `;
      cartItems.appendChild(div);
    });
  }

  cartCount.textContent = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("cart-total");
  totalDiv.innerHTML = `
    <h3>Total: ₹${totalPrice}</h3>
    <button class="clear-btn" onclick="clearCart()">Clear Cart</button>
  `;
  cartItems.appendChild(totalDiv);
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}


function clearCart() {
  cart = [];
  updateCart();
}

cartBtn.addEventListener("click", () => {
  cartSection.classList.add("active");
  window.scrollTo({ top: cartSection.offsetTop, behavior: "smooth" });
});

function filterProducts() {
  let filtered = [...products];

  const searchValue = searchInput.value.toLowerCase();
  filtered = filtered.filter(p => p.name.toLowerCase().includes(searchValue));

  const categoryValue = categoryFilter.value;
  if (categoryValue !== "all") {
    filtered = filtered.filter(p => p.category === categoryValue);
  }

  const sortValue = priceSort.value;
  if (sortValue === "low") filtered.sort((a, b) => a.price - b.price);
  if (sortValue === "high") filtered.sort((a, b) => b.price - a.price);

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceSort.addEventListener("change", filterProducts);

displayProducts(products);


