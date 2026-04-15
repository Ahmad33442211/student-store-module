const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

async function loadProducts() {
  const res = await fetch("/api/products");
  const products = await res.json();

  productList.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${product.productName}</h3>
      <p><strong>Store ID:</strong> ${product.storeId}</p>
      <p><strong>Store Name:</strong> ${product.storeName}</p>
      <p><strong>Product ID:</strong> ${product.productId}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <button onclick="deleteProduct('${product._id}')">Delete</button>
    `;

    productList.appendChild(card);
  });
}

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newProduct = {
    storeId: document.getElementById("storeId").value,
    storeName: document.getElementById("storeName").value,
    productId: document.getElementById("productId").value,
    productName: document.getElementById("productName").value,
    price: document.getElementById("price").value
  };

  await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct)
  });

  productForm.reset();
  loadProducts();
});

async function deleteProduct(id) {
  await fetch(`/api/products/${id}`, {
    method: "DELETE"
  });

  loadProducts();
}

loadProducts();