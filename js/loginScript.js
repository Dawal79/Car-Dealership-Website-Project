document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('loginForm').onsubmit = function(event) {
    
        var username = this.username.value;
        var password = this.password.value;
    
        if(username === 'admin' && password === '12345') {
            return true;
        } else {
            event.preventDefault();
            alert('Incorrect username or password. Please try again.');
            return false;
        }
    };
});
