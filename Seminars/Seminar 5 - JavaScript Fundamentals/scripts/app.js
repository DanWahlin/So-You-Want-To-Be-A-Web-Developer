// A collection of image name. This is called an "array" in JavaScript.
let products = [
    { title: 'Iceland', path: 'iceland.jpg'}, 
    { title: 'Grand Canyon', path: 'grandcanyon.jpg'}, 
    { title: 'Paris', path: 'paris.jpg'}
];

function showProducts() {
    let productsHtml = ``;
    for (let product of products) {
        productsHtml += `<li>${product.title}</li>`;
    }

    let productsUl = document.querySelector('#products');
    productsUl.innerHTML = productsHtml;
}

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
}

showProducts();
showImages();