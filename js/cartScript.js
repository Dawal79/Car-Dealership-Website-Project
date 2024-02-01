document.addEventListener("DOMContentLoaded", function(){

    //CART
    var cartItems = document.getElementById("cartList");
    var subTotal = document.getElementById("subTotal");
    var total = document.getElementById("total");
    var buttonClear = document.getElementById("clear");

    var taxes = 0.14975

    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var subTotalAmount = 0
    var totalAmount = 0

    cart.forEach(function(car){
        var listTag = document.createElement("li");
        listTag.textContent = "Car Make: " + car.id + " Price: $" + car.price;
        cartItems.appendChild(listTag);

        subTotalAmount += car.price
        var totalAmountTax = subTotalAmount * taxes
        totalAmount = totalAmountTax + subTotalAmount
    })

    
    subTotal.textContent = subTotalAmount.toFixed(2)
    total.textContent = totalAmount.toFixed(2)

    buttonClear.addEventListener('click', function() {

       var accept = confirm("Are you sure you want to empty the cart?")

        if (accept) {
            localStorage.clear();
            location.reload();
        }
    })



///////////////////////////////////////




    //Payment
    var inputs = document.querySelectorAll("input[type='text']")
    console.log(inputs)

    var patterns = {
        cNumber: /^\d{4} \d{4} \d{4} \d{4}$/,      
        expiration: /^(0[1-9]|1[0-2])\s[0-9]{2}$/, 
        cName: /^[a-zA-Z]+ [a-zA-Z]+$/,             
        cvc: /^\d{3}$/,                             
        aName: /^[a-zA-Z]+ [a-zA-Z]+$/,                     
        address: /^\d+\s[a-zA-Z\s]+$/,              
        country: /^[A-Z][a-zA-Z]*$/,                     
        province: /^[A-Z]{2}$/,                    
        city: /^[A-Z][a-zA-Z]*$/,                        
        pCode: /^[A-Z0-9]{3} [A-Z0-9]{3}$/                     
    };

    function Validate(field, regEx){
        if(regEx.test(field.value)){
            field.className = "valid";
        }
        else{
            field.className = "invalid"
        }
    }

    inputs.forEach((input) =>{
        input.addEventListener("keyup", function(e){
            console.log(e.target.attributes.name.value)
            Validate(e.target, patterns[e.target.attributes.name.value])
        })
    })

    //form
    var myForm = document.querySelector("#myForm");

    myForm.addEventListener("submit", function(e){

        //there is no actuall payment so ill just clear the form

            localStorage.clear();
            alert("Purchase Successfully Completed. Your new vehicle will be ready for pickup in 5 business days.");
        })

    

});