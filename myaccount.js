// Protect this page
checkLogin();

// Get logged-in user from localStorage or sessionStorage
const user =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(sessionStorage.getItem("loggedInUser"));

// Display user details
if (user) {

    document.getElementById("userName").textContent = user.name;

    document.getElementById("userEmail").textContent = user.email;

    document.getElementById("profileLetter").textContent =
        user.name.charAt(0).toUpperCase();

}