// Protect this page
checkLogin();

// Get logged-in user
const user =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(sessionStorage.getItem("loggedInUser"));

if (!user) {

    window.location.href = "login.html";

}

// Future booking functionality will be added here.
// When users book packages, this page will automatically
// display their bookings.