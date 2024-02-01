document.addEventListener("DOMContentLoaded", function() {
    var searchBox = document.getElementById('searchbox');
    var cars = document.querySelectorAll(".car");

    searchBox.addEventListener("keyup", function(event) {
        // Execute the search when the Enter key is pressed
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action
            
            var searchText = searchBox.value.toLowerCase();

            // First, reset all cars to inactive state
            cars.forEach(function(car) {
                car.classList.remove("active");
                car.classList.add("inactive");
                car.querySelector(".details").style.display = "none"; // Hide details
            });

            // Then, activate the car that matches the search
            cars.forEach(function(car) {
                var carTitle = car.querySelector("img").alt.toLowerCase();
                if (carTitle.indexOf(searchText) !== -1) {
                    car.classList.add("active");
                    car.classList.remove("inactive");
                    car.querySelector(".details").style.display = "block"; // Show details
                }
            });

            // If no search text is entered, reset to default state
            if (searchText === "") {
                cars.forEach(function(car) {
                    car.classList.remove("inactive");
                    car.querySelector(".details").style.display = "none"; // Hide details
                });
            }
        }
    });
});
