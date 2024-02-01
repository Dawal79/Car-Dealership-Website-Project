document.addEventListener("DOMContentLoaded", function() {
    var cars = document.querySelectorAll(".car img");

    cars.forEach(function(carImg) {
        carImg.addEventListener("click", function() {
            // Remove 'active' class from all cars and hide details
            cars.forEach(function(otherImg) {
            otherImg.parentElement.classList.remove("active");
            otherImg.parentElement.classList.add("inactive");
            otherImg.nextElementSibling.style.display = "none"; // Hide details
        });

        // Add 'active' class to clicked car and show details
        var selectedCar = carImg.parentElement;
        selectedCar.classList.add("active");
        selectedCar.classList.remove("inactive");
        selectedCar.querySelector(".details").style.display = "block"; // Show details
        });
    });
});
