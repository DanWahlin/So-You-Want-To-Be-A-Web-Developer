// NOTE: Using features available in modern browsers (NOT for Internet Explorer)

// A collection of products. This is called an "array" in JavaScript.
let products = [
    { id: 1, title: 'Tahiti', path: 'tahiti.jpg', price: 2599 }, 
    { id: 2, title: 'Iceland', path: 'iceland.jpg', price: 1499 }, 
    { id: 3, title: 'Grand Canyon', path: 'grandcanyon.jpg', price: 999}, 
    { id: 4, title: 'Paris', path: 'paris.jpg', price: 1999 }
];

// Function to show the products in the <ul>
function showProducts() {
    let productsHtml = ``;
    for (let product of products) {
        productsHtml += `<li><a href="buy.html?dest=${product.id}">${product.title}</a></li>`;
    }

    let productsUl = document.querySelector('#products');
    productsUl.innerHTML = productsHtml;
}

// Function to dynamically change the image shown in the page
function showImages() {
    let selectedProductIndex = 0;
    updateImage(products[selectedProductIndex]);

    // Start a timer that fires every 5 seconds
    // Will change img tag's src attribute
    setInterval(() => {
        selectedProductIndex++;
        if (selectedProductIndex === products.length) {
            selectedProductIndex = 0;
        }
        let selectedProduct = products[selectedProductIndex];
        updateImage(selectedProduct);
    }, 5000);

    // NOTE: Normally when doing a timer you want to capture the timer ID and clear it
    // but that's overkill for this scenario since it keeps running
    // See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
}

function updateImage(selectedProduct) {
    // Find the tag with an id of "product-image"
    let image = document.querySelector('#product-image');
    let imageTitle = document.querySelector('#product-image-title');

    if (selectedProduct) {
        image.src = `images/${selectedProduct.path}`;
        imageTitle.innerText = selectedProduct.title;
        imageTitle.alt = `Picture of ${selectedProduct.title}`;
    }
    else {
        image.style.display = 'none';
    }
}

function showTravelDestination(destId) {
    if (destId) {
        // Find destination
        // The + in front of destId converts it from a "string" to a "number"
        let productMatches = products.filter(product => product.id === +destId);
        if (productMatches) {
            let product = productMatches[0];
            updateImage(product);
            let price = document.querySelector('#price');
            price.innerText = '$' + product.price.toFixed(2);
        }
    }
    else {
        // Find div with purchase-container id
        let div = document.querySelector('#purchase-container');
        div.innerHTML = 'No product selected!';
    }
}