const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

const closeSidebar = document.getElementById("closeSidebar");

const overlay = document.getElementById("overlay");

/* OPEN SIDEBAR */

menuBtn.addEventListener("click", () => {

    sidebar.classList.add("active");

    overlay.classList.add("active");

});

/* CLOSE BUTTON */

closeSidebar.addEventListener("click", () => {

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

});

/* CLICK OUTSIDE */

overlay.addEventListener("click", () => {

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

});

/* ESC KEY */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        sidebar.classList.remove("active");

        overlay.classList.remove("active");

    }

});