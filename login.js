const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("travelUser"));

    if (!storedUser) {

        alert("No account found. Please Sign Up first.");

        window.location.href = "signup.html";

        return;
    }

    if (
    email === storedUser.email &&
    password === storedUser.password
) {

    alert("Login Successful!");

    const rememberMe = document.getElementById("rememberMe").checked;

    const loggedInUser = {

        name: storedUser.name,

        email: storedUser.email

    };

    if (rememberMe) {

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    localStorage.setItem("isLoggedIn", "true");

} else {

    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    sessionStorage.setItem("isLoggedIn", "true");

}

    window.location.href = "index.html";

}

    else {

        alert("Invalid Email or Password.");

    }

});