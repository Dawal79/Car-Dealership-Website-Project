document.addEventListener("DOMContentLoaded", function() {

    var addToCartButtons = document.querySelectorAll(".addToCart");
    console.log(addToCartButtons)

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            var carId = this.getAttribute("carName");
            console.log(carId);
            var carPrice = parseFloat(this.getAttribute("amount"));
            console.log(carPrice);

            addToCart(carId, carPrice);
        });
    });


    function addToCart(carId, price) {
        
        //getting the cart from storage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        //putting our information INTO the cart 
        cart.push({ id: carId, price: price });

        //setting the cart with out price and name
        localStorage.setItem('cart', JSON.stringify(cart));
    }


});

