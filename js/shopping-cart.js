function updateCart() {
    const cartItemsList = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartTotal = 0;

    cartItemsList.innerHTML = "";

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsList.appendChild(listItem);

        cartTotal += item.price * item.quantity;
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}

window.addEventListener("load", updateCart);
// function checkout() {
//     // Here you can implement the checkout logic, e.g., process the payment or clear the cart.
//     // For this example, we'll simply clear the cart.
   
//     updateCart();
// }

// // Function to navigate to the checkout page
// function navigateToCheckout() {
//     // Pass cart data to the checkout page
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     // Redirect to the checkout page
//     window.location.href = "cart.html";
// }

// // Add an event listener to the "Checkout" button
// document.getElementById("checkoutButton").addEventListener("click", navigateToCheckout);


// Function to navigate to the checkout page
function navigateToCheckout() {
    // Get the cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Redirect to the checkout page and pass the cart data
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}

// Add an event listener to the "Checkout" button
document.getElementById("checkoutButton").addEventListener("click", navigateToCheckout);



