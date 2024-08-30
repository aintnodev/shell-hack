let div = "";
let html = "";

for (let i = 0; i < products.length; i++) {
  const priceRupee = products[i].pricePaisa / 100;
  const prodRating = products[i].ratings / 10;

  div = `
  <div class="service-box id-${products[i].productId}">
    <img src="${products[i].img}"/>
    <p class="pname">${products[i].pname}</p>
    <p class="rating">${prodRating} (${products[i].ratingn})</p>
    <p class="price">$${priceRupee}</p>
    <button class="id-${products[i].productId}" onclick="addToCart()">Buy Now</button>
  </div>`;

  html += div;
  document.getElementById("product-container").innerHTML = html;
}

function addToCart() {
  location.href = "thank.html";
}

function redirectLast() {
  location.href = "last.html";
}
