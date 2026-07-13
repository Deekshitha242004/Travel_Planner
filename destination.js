
const destinationGrid = document.getElementById("destinationGrid");

let currentFilter = "all";
let currentSearch = "";

/* DISPLAY DESTINATIONS */

function displayDestinations() {

    const saved =
    JSON.parse(localStorage.getItem("savedDestinations")) || [];

    const filteredDestinations = destinations.filter(destination => {

        const matchesFilter =
        currentFilter === "all"
        ? true
        : currentFilter === "india"
        ? destination.country === "india"
        : destination.category === currentFilter;

        const matchesSearch =
        destination.name.toLowerCase().includes(currentSearch.toLowerCase());

        return matchesFilter && matchesSearch;

    });

    if(filteredDestinations.length===0){

        destinationGrid.innerHTML=`

        <div class="no-results">

            <h2>No Destinations Found 😔</h2>

            <p>Try searching for another destination.</p>

        </div>

        `;

        return;

    }

    const cards = filteredDestinations.map(destination => `

<div class="package-card">

    <img
    src="${destination.image}"
    alt="${destination.name}"
    loading="lazy"
    decoding="async">

    <div class="package-content">

        <h3>${destination.name}</h3>

       <p class="location">
    📍 ${destination.location}
</p>

        <p class="rating">
            ⭐ ${destination.rating}
        </p>

        <p class="price">
            ${destination.price}
        </p>

        <div class="card-footer">

           <button
         class="view-btn"
          onclick="openDetails('${destination.name}')">
            View Details
         </button>
            <button
            class="save-btn ${saved.includes(destination.name) ? "saved" : ""}"
            onclick="toggleSave('${destination.name}')">

                ${saved.includes(destination.name) ? "❤️" : "🤍"}

            </button>

        </div>

    </div>

</div>

`).join("");

destinationGrid.innerHTML = cards;
    destinationGrid.innerHTML = cards;

    document
    .querySelectorAll(".package-card img")
    .forEach(img=>{

        if(img.complete){

            img.classList.add("loaded");

        }else{

            img.onload=()=>{

                img.classList.add("loaded");

            };

        }

    });

}

/* FILTERS */

const filterButtons=document.querySelectorAll(".filters button");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter=button.dataset.filter;

        displayDestinations();

    });

});

/* SEARCH */

const searchInput=document.getElementById("searchInput");

let timer;

searchInput.addEventListener("input",()=>{

    clearTimeout(timer);

    timer=setTimeout(()=>{

        currentSearch=searchInput.value.trim();

        displayDestinations();

    },150);

});

/* SAVE */

function toggleSave(destinationName){

    let saved=
    JSON.parse(localStorage.getItem("savedDestinations")) || [];

    if(saved.includes(destinationName)){

        saved=saved.filter(item=>item!==destinationName);

    }else{

        saved.push(destinationName);

    }

    localStorage.setItem(
        "savedDestinations",
        JSON.stringify(saved)
    );

    displayDestinations();

}

/* SHOW DETAILS */

function showDetails(destinationName){

    const destination=destinations.find(
        item=>item.name===destinationName
    );

    if(!destination) return;

    alert(

`${destination.name}

📍 ${destination.location}

⭐ ${destination.rating}

💰 ${destination.price}

⏳ ${destination.duration || "Best Time to Visit"}`

    );

}

/* INITIAL LOAD */

displayDestinations();
function openDetails(destinationName){

    localStorage.removeItem("selectedPackage");

    localStorage.setItem(
        "selectedDestination",
        destinationName
    );

    window.location.href = "viewdetails.html";

}

    