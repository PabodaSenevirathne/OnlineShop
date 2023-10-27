function validateForm() {

    clearErrorMessages();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
        const postcode = document.getElementById("postcode").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
        const province = document.getElementById("province").value;
    const email = document.getElementById("email").value;
    // const cardNumber = document.getElementById("cardNumber").value;
    // const expirationDate = document.getElementById("expirationDate").value;
    // const cvv = document.getElementById("cvv").value;

    // Define regular expressions for validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // const cardNumberPattern = /^[0-9]{16}$/;
    // const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    // const cvvPattern = /^\d{3}$/;
    let isValid = true;
    if (name.trim() === "") {
        displayErrorMessage("nameValidationError", "Please enter your name.");
        return false;
    } else if (phone.trim() === "") {
        displayErrorMessage("emailValidationError", "Please enter your phone.");
        return false;
    } else if (postcode.trim() === "") {
        displayErrorMessage("postcodeValidationError", "Please enter your postcode.");
        return false;    
    } else if (address.trim() === "") {
        displayErrorMessage("addressValidationError","Please enter your address.");
        return false;
    } else if (city.trim() === "") {
        displayErrorMessage("cityValidationError","Please enter your city.");
        return false; 
    } else if (province.trim() === "") {
        displayErrorMessage("provinceValidationError","Please enter your province.");
        return false;           
    } else if (!emailPattern.test(email)) {
        displayErrorMessage("emailValidationError","Please enter a valid email address.");
        return false;
    // } else if (!cardNumberPattern.test(cardNumber)) {
    //     displayErrorMessage("Please enter a valid 16-digit card number.");
    //     return false;
    // } else if (!expirationDatePattern.test(expirationDate)) {
    //     displayErrorMessage("Please enter a valid expiration date (MM/YY).");
    //     return false;
    // } else if (!cvvPattern.test(cvv)) {
    //     displayErrorMessage("Please enter a valid 3-digit CVV.");
    //     return false;
    if (isValid) {
        openPopupWindow1();
    }

    return isValid;
}

// function displayErrorMessage(message) {
//     document.getElementById("demo").innerHTML = message;
// }

function displayErrorMessage(id, message) {
    document.getElementById(id).innerHTML = message;
}


function clearErrorMessages() {
    const errorElements = document.getElementsByClassName("error");
    for (const element of errorElements) {
        element.innerHTML = "";
    }

function openPopupWindow() {
    var popupURL = "reciept.html"; // Replace with the actual URL
    var width = 600;
    var height = 400;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    window.open(popupURL, "_blank", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
}

}
}


// // cart

// // Variables to store cart items and total
// const cartItems = [];
// let cartTotal = 0;

// // Function to add items to the cart
// function addToCart(name, price) {
//     // Check if the item is already in the cart
//     const existingItem = cartItems.find(item => item.name === name);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cartItems.push({ name, price, quantity: 1 });
//     }

//     // Calculate and update the total
//     cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

//     // Update the cart display
//     updateCartDisplay();
// }

// // Function to update the cart display
// function updateCartDisplay() {
//     const cartItemsList = document.getElementById("cartItems");
//     const cartTotalElement = document.getElementById("cartTotal");

//     // Clear the existing cart items
//     cartItemsList.innerHTML = "";

//     // Add items to the cart
//     cartItems.forEach(item => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
//         cartItemsList.appendChild(listItem);
//     });

//     // Update the total
//     cartTotalElement.textContent = cartTotal;
// }


// // cart.js

// // Function to update the cart on the shopping-cart.html page
// function updateCart() {
//     const cartItemsElement = document.getElementById("cartItems");
//     const cartTotalElement = document.getElementById("cartTotal");

//     // Check if there is a cart in localStorage
//     if (localStorage.getItem("cart")) {
//         const cart = JSON.parse(localStorage.getItem("cart"));
//         cartItemsElement.innerHTML = ""; // Clear the cart items

//         let total = 0;

//         // Iterate through cart items and display them
//         for (const item of cart) {
//             const li = document.createElement("li");
//             li.textContent = `${item.name} - $${item.price}`;
//             cartItemsElement.appendChild(li);

//             total += item.price;
//         }

//         // Update the total
//         cartTotalElement.textContent = total.toFixed(2);
//     } else {
//         // If the cart is empty, display a message
//         cartItemsElement.innerHTML = "Your cart is empty.";
//         cartTotalElement.textContent = "0.00";
//     }
// }

// // Call the updateCart function when the page loads
// window.addEventListener("load", updateCart);

