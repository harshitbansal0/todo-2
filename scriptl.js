var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Perform login validation here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example login validation
    if (username === "admin" && password === "password") {
        // Login successful
        alert("Login successful!");
        // Redirect to the todo list page
        window.location.href = "todo-list.html";
    } else {
        // Login failed
        alert("Invalid username or password. Please try again.");
    }
});
