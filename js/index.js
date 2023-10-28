function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if an item with the same name is already in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += 1;
    } else {
        // If the item is not in the cart, add it with a quantity of 1
        cart.push({ name, price, quantity: 1 });
    }
    console.log("cart:", cart);
    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    

}

