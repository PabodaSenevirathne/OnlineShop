// validate function
function validateForm() {

    clearErrorMessages();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const postcode = document.getElementById("postcode").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const email = document.getElementById("email").value;
    const cname = document.getElementById("name").value;
    const ccnum = document.getElementById("ccnum").value;
    const expmonth = document.getElementById("expmonth").value;
    const expyear = document.getElementById("expyear").value;
    const cvv = document.getElementById("cvv").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    //compare 'Password' and 'Confirm Password'
    if (password !== confirmPassword) {
        displayErrorMessage("passwordValidationError", "Password and Confirm Password must match.");
        return false;
    }

    // regular expressions for validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const monthPattern = /^(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)$/;
    const yearPattern = /^\d{4}$/;
    const cvvPattern = /^\d{3}$/;

    let isValid = true;

    if (name.trim() === "") {
        displayErrorMessage("nameValidationError", "Please enter your name.");
        return false;
    } else if (phone.trim() === "") {
        displayErrorMessage("phoneValidationError", "Please enter your phone.");
        return false;
    } else if (postcode.trim() === "") {
        displayErrorMessage("postcodeValidationError", "Please enter your postcode.");
        return false;
    } else if (address.trim() === "") {
        displayErrorMessage("addressValidationError", "Please enter your address.");
        return false;
    } else if (city.trim() === "") {
        displayErrorMessage("cityValidationError", "Please enter your city.");
        return false;
    } else if (province.trim() === "") {
        displayErrorMessage("provinceValidationError", "Please enter your province.");
        return false;
    } else if (!emailPattern.test(email)) {
        displayErrorMessage("emailValidationError", "Please enter a valid email address.");
        return false;
    } else if (cname.trim() === "") {
        displayErrorMessage("cnameValidationError", "Please enter name in the card.");
        return false;
    } else if (!cardNumberPattern.test(ccnum)) {
        displayErrorMessage("ccnumValidationError", "Please enter a valid 16-digit card number.");
        return false;
    } else if (!monthPattern.test(expmonth)) {
        displayErrorMessage("expmonthValidationError", "Please enter a valid expiration Month.");
        return false;
    } else if (!yearPattern.test(expyear)) {
        displayErrorMessage("expyearValidationError", "Please enter a valid expiration Year.");
        return false;
    } else if (!cvvPattern.test(cvv)) {
        return false;
    }
    if (isValid) {
        saveFormDetailsToLocalStorage();
        alert("Your order has been placed! Thank you for shopping with us.");

    }

    return isValid;
}

// display error messages
function displayErrorMessage(id, message) {
    document.getElementById(id).innerHTML = message;
}

// clear error messages
function clearErrorMessages() {
    const errorElements = document.getElementsByClassName("error");
    for (const element of errorElements) {
        element.innerHTML = "";
    }
}

// open popup window
function openPopupWindow() {
    var popupURL = "reciept.html";
    var width = 800;
    var height = 800;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;

    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const totalPurchaseAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (totalPurchaseAmount < 10) {
        alert("The minimum purchase should be $10 or more. Please add more items to your cart.");
    } else {
        window.open(popupURL, "_blank", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
        displayCheckoutReceipt();
    }
}

function saveFormDetailsToLocalStorage() {
    // Retrieve form input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const postcode = document.getElementById("postcode").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const email = document.getElementById("email").value;

    // Create an object to store form details
    const formDetails = {
        name,
        phone,
        postcode,
        address,
        city,
        province,
        email,
    };

    // Save form details to local storage
    localStorage.setItem("formDetails", JSON.stringify(formDetails));
}


// Function to retrieve cart data and checkout details
function displayCheckoutReceipt() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const checkoutDetails = JSON.parse(localStorage.getItem("formDetails"));

    const cartItemsList = document.getElementById("cartItems");
    const subTotal = document.getElementById("subTotal")
    const cartTotal = document.getElementById("cartTotal");

    const taxAmount = document.getElementById("taxAmount")

    // Display an error if the cart is empty
    if (!cartItems || cartItems.length === 0) {
        cartItemsList.innerHTML = "";
        cartTotal.textContent = "";
        taxAmount.textContent = "";
        subTotal.textContent = "";
        alert("Your cart is empty. Please add items to your cart before proceeding.");
        return;
    }

    // Calculate the subtotal and sales tax based on the province/territory
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const provinceTaxRates = {
        Ontario: 0.13,
        Alberta: 0.05,
        BritishColumbia: 0.07,
        Saskatchewan: 0.06,
    };

    const selectedProvince = checkoutDetails.province;
    const salesTaxRate = provinceTaxRates[selectedProvince] || 0;
    const salesTax = subtotal * salesTaxRate;

    // Calculate the total cost including sales tax
    const total = subtotal + salesTax;

    // Check if the total cost is $10 or more
    if (total < 10) {
        cartItemsList.innerHTML = "";
        cartTotal.textContent = "";
        taxAmount.textContent = "";
        subTotal.textContent = "";
        alert("The minimum purchase should be $10 or more. Please add more items to your cart.");
        return;
    }

    cartItemsList.innerHTML = "";
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    if (checkoutDetails) {
        document.getElementById("checkoutName").textContent = checkoutDetails.name;
        document.getElementById("checkoutPhone").textContent = checkoutDetails.phone;
        document.getElementById("checkoutPostcode").textContent = checkoutDetails.postcode;
        document.getElementById("checkoutAddress").textContent = checkoutDetails.address;
        document.getElementById("checkoutCity").textContent = checkoutDetails.city;
        document.getElementById("checkoutProvince").textContent = checkoutDetails.province;
        document.getElementById("checkoutEmail").textContent = checkoutDetails.email;
    }

    // display subtotal
    subTotal.textContent = `${subtotal.toFixed(2)}`

    // display taxAmount
    taxAmount.textContent = `${selectedProvince}: $${salesTax.toFixed(2)}`;

    // Display the cartTotal
    cartTotal.textContent = `${total.toFixed(2)}`;
}

// Clear local storage
function Ok() {
    localStorage.removeItem("cart");
    window.close();
}

document.addEventListener("DOMContentLoaded", displayCheckoutReceipt);
