

async function fetchProductInfo(productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    return product;
}

async function calculateTotalPrice() {
   
    const items = [
        { productId: 1, quantity: 3 },
        { productId: 4, quantity: 4 },
        { productId: 3, quantity: 5 }
    ];

    let totalPrice = 0;

    for (const item of items) {
        const product = await fetchProductInfo(item.productId);
        const itemPrice = product.price * item.quantity;
        totalPrice += itemPrice;
    }

    return totalPrice;
}


calculateTotalPrice()
    .then(totalPrice => {
        console.log("Total price:", totalPrice);
    })
    .catch(error => {
        console.error("Error:", error);
    });
