const products = [];
const priceGraph = document.getElementById("price-graph");
const ratingGraph = document.getElementById("rating-graph");

function renderGraphs() {
    priceGraph.innerHTML = "";
    ratingGraph.innerHTML = "";
    products.forEach(product => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.innerHTML = `
            <span>${product.name} ($${product.price})</span>
            <div class="price-bar" style="width: ${product.price * 5}px;"></div>
        `;
        priceGraph.appendChild(bar);
    });

    products.forEach(product => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.innerHTML = `
            <span>${product.name} (${product.rating}⭐)</span>
            <div class="rating-bar" style="width: ${product.rating * 40}px;"></div>
        `;
        ratingGraph.appendChild(bar);
    });
}

document.getElementById("add-product").addEventListener("click", () => {
    const name = document.getElementById("product-name").value.trim();
    const price = parseFloat(document.getElementById("product-price").value);
    const rating = parseFloat(document.getElementById("product-rating").value);

    if (!name || price <= 0 || rating < 1 || rating > 5) {
        alert("Please enter valid product details!");
        return;
    }

    products.push({ name, price, rating });

    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-rating").value = "";

    renderGraphs();
});

function sortGraph(criteria, order) {
    products.sort((a, b) => {
        if (order === "asc") {
            return a[criteria] - b[criteria];
        } else {
            return b[criteria] - a[criteria];
        }
    });

    renderGraphs();
}
