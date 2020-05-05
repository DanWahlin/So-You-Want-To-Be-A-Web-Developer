// A collection of products. This is called an "array" in JavaScript.
let products = [
    { title: 'Iceland', path: 'iceland.jpg'}, 
    { title: 'Grand Canyon', path: 'grandcanyon.jpg'}, 
    { title: 'Paris', path: 'paris.jpg'}
];

// Function to show the products in the <ul>
function showProducts() {
    let productsHtml = ``;
    for (let product of products) {
        productsHtml += `<li>${product.title}</li>`;
    }

    let productsUl = document.querySelector('#products');
    productsUl.innerHTML = productsHtml;
}

// Function to dynamically change the image shown in the page
function showImages() {
    let selectedProductIndex = 0;

    // Find the tag with an id of "product-image"
    let image = document.querySelector('#product-image');
    let imageTitle = document.querySelector('#product-image-title');

    // Start a timer that fires every 5 seconds
    // Will change img tag's src attribute
    setInterval(function() {
        selectedProductIndex++;
        if (selectedProductIndex === products.length) {
            selectedProductIndex = 0;
        }
        let selectedProduct = products[selectedProductIndex];
        image.src = `images/${selectedProduct.path}`;
        imageTitle.innerText = selectedProduct.title;
    }, 5000);

    // NOTE: Normally when doing a timer you want to capture the timer ID and clear it
    // but that's overkill for this scenario since it keeps running
    // See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
}

// Call the functions so that they perform their intended action
showProducts();
showImages();