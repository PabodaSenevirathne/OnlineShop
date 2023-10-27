// // const cartItems = [];
// // let cartTotal = 0;

// // function addToCart(name, price) {
// //     const existingItem = cartItems.find(item => item.name === name);

// //     if (existingItem) {
// //         existingItem.quantity += 1;
// //     } else {
// //         cartItems.push({ name, price, quantity: 1 });
// //     }

// //     cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
// //     updateCartDisplay();
// // }

// // function updateCartDisplay() {
// //     const cartItemsList = document.getElementById("cartItems");
// //     const cartTotalElement = document.getElementById("cartTotal");

// //     cartItemsList.innerHTML = "";

// //     cartItems.forEach(item => {
// //         const listItem = document.createElement("li");
// //         listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
// //         cartItemsList.appendChild(listItem);
// //     });

// //     cartTotalElement.textContent = cartTotal;
// // }

// // function updateCart() {
// //     const cartItemsElement = document.getElementById("cartItems");
// //     const cartTotalElement = document.getElementById("cartTotal");

// //     if (localStorage.getItem("cart")) {
// //         const cart = JSON.parse(localStorage.getItem("cart"));
// //         cartItemsElement.innerHTML = "";
// //         let total = 0;

// //         for (const item of cart) {
// //             const li = document.createElement("li");
// //             li.textContent = `${item.name} - $${item.price}`;
// //             cartItemsElement.appendChild(li);

// //             total += item.price;
// //         }

// //         cartTotalElement.textContent = total.toFixed(2);
// //     } else {
// //         cartItemsElement.innerHTML = "Your cart is empty.";
// //         cartTotalElement.textContent = "0.00";
// //     }
// // }

// // window.addEventListener("load", updateCart);

// function updateCart() {
//     const cartItemsList = document.getElementById("cartItems");
//     const cartTotalElement = document.getElementById("cartTotal");
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     let cartTotal = 0;

//     cartItemsList.innerHTML = "";

//     cart.forEach(item => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
//         cartItemsList.appendChild(listItem);

//         cartTotal += item.price * item.quantity;
//     });

//     cartTotalElement.textContent = cartTotal.toFixed(2);
// }

// window.addEventListener("load", updateCart);


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
