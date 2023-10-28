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

    // Define regular expressions for validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const cardNumberPattern = /^[0-9]{16}$/;
    // const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const monthPattern = /^(0[1-9]|1[0-2])$/;
    const yearPattern = /^\d{2}$/;
    const cvvPattern = /^\d{3}$/;
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
    }else if (cname.trim() === "") {
            displayErrorMessage("cnameValidationError", "Please enter name in the card.");
            return false;
    } else if (!cardNumberPattern.test(ccnum)) {
        displayErrorMessage("ccnumValidationError","Please enter a valid 16-digit card number.");
        return false;
        // } else if (!expirationDatePattern.test(expmonth)) {
        //     displayErrorMessage("Please enter a valid expiration date (MM/YY).");
        //     return false;
    } else if (!monthPattern.test(expmonth)) {
        displayErrorMessage("expmonthValidationError","Please enter a valid expiration Month.");
        return false;
    } else if (!yearPattern.test(expyear)) {
        displayErrorMessage("expyearValidationError","Please enter a valid expiration Year.");
        return false;
    } else if (!cvvPattern.test(cvv)) {
        displayErrorMessage("cvvValidationError", "Please enter a valid 3-digit CVV.");
        return false;
    }
    if (isValid) {
        saveFormDetailsToLocalStorage();
        alert("Your order has been placed! Thank you for shopping with us.");
    //    openPopupWindow();
       
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



}

function openPopupWindow() {
    var popupURL = "reciept.html"; // Replace with the actual URL
    var width = 800;
    var height = 800;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    window.open(popupURL, "_blank", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);

    displayCheckoutReceipt()
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


// Function to retrieve cart data and checkout details, then populate the receipt
function displayCheckoutReceipt() {
    // Retrieve cart data from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    // Retrieve checkout details from localStorage
    const checkoutDetails = JSON.parse(localStorage.getItem("formDetails"));

    // Get the receipt elements
    const cartItemsList = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    // Display cart items on the receipt
    if (cartItems && cartItems.length > 0) {
        cartItemsList.innerHTML = "";
        cartItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsList.appendChild(listItem);
        });
    }

    // Display cart total on the receipt
    if (checkoutDetails) {
        document.getElementById("checkoutName").textContent = checkoutDetails.name;
        document.getElementById("checkoutPhone").textContent = checkoutDetails.phone;
        document.getElementById("checkoutPostcode").textContent = checkoutDetails.postcode;
        document.getElementById("checkoutAddress").textContent = checkoutDetails.address;
        document.getElementById("checkoutCity").textContent = checkoutDetails.city;
        document.getElementById("checkoutProvince").textContent = checkoutDetails.province;
        document.getElementById("checkoutEmail").textContent = checkoutDetails.email;
    }

    // Calculate and display the total
    if (cartItems) {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
        cartTotal.textContent = total;
    }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", displayCheckoutReceipt);
