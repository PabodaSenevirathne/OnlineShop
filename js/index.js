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
    
    alert("Item has been added to your cart.");

}
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code, including the showSlides function
    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

});


