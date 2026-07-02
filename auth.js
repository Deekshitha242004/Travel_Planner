// ================= GET LOGGED-IN USER =================

function getLoggedInUser() {

    return JSON.parse(
        localStorage.getItem("loggedInUser")
    ) ||

    JSON.parse(
        sessionStorage.getItem("loggedInUser")
    );

}

// ================= CHECK LOGIN =================

function checkLogin() {

    const user = getLoggedInUser();

    if (!user) {

        alert("Please login first.");

        window.location.href = "login.html";

    }

}

// ================= LOGOUT =================

function logout() {

    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");

    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("isLoggedIn");

    alert("Logged out successfully.");

    window.location.href = "login.html";

}

// ================= SHOW USER DETAILS =================

function loadUserDetails() {

    const user = getLoggedInUser();

    if (!user) return;

    const name = document.getElementById("userName");
    const email = document.getElementById("userEmail");

    if (name) {

        name.textContent = user.name;

    }

    if (email) {

        email.textContent = user.email;

    }

}