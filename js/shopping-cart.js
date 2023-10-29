//update cart
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

//navigate to the checkout page
function navigateToCheckout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Redirect to the checkout page and pass the cart data
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "checkout.html";
}

document.getElementById("checkoutButton").addEventListener("click", navigateToCheckout);



