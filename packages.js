const packages = [

{
    name:"North India Explorer",
    places:["Kashmir","Manali","Shimla","Leh Ladakh"],
    duration:"7 Days / 6 Nights",
    rating:4.9,
    price:"₹48,999",
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
},

{
    name:"Bali Explorer",
    places:["Ubud","Kuta","Seminyak","Nusa Penida"],
    duration:"5 Days / 4 Nights",
    rating:4.9,
    price:"₹65,999",
    image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80"
},

{
    name:"South India Paradise",
    places:["Goa","Ooty","Munnar","Coorg"],
    duration:"6 Days / 5 Nights",
    rating:4.8,
    price:"₹42,999",
    image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80"
},

{
    name:"Dubai Luxury Tour",
    places:["Burj Khalifa","Palm Jumeirah","Dubai Marina","Desert Safari"],
    duration:"5 Days / 4 Nights",
    rating:4.8,
    price:"₹72,999",
    image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
},

{
    name:"East India Heritage Tour",
    places:["Darjeeling","Gangtok","Puri","Kolkata"],
    duration:"6 Days / 5 Nights",
    rating:4.7,
    price:"₹44,999",
    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80"
},

{
    name:"Paris & France Escape",
    places:["Paris","Eiffel Tower","Louvre Museum","Versailles"],
    duration:"6 Days / 5 Nights",
    rating:4.8,
    price:"₹95,999",
    image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80"
},

{
    name:"West India Discovery",
    places:["Mumbai","Udaipur","Jaipur","Mount Abu"],
    duration:"6 Days / 5 Nights",
    rating:4.8,
    price:"₹46,999",
    image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80"
},

{
    name:"Switzerland Dream Tour",
    places:["Zurich","Interlaken","Lucerne","Jungfraujoch"],
    duration:"8 Days / 7 Nights",
    rating:5.0,
    price:"₹1,35,999",
    image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80"
},

{
    name:"Japan Highlights",
    places:["Tokyo","Kyoto","Osaka","Mount Fuji"],
    duration:"7 Days / 6 Nights",
    rating:4.9,
    price:"₹1,15,999",
    image:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80"
},

{
    name:"Thailand Adventure",
    places:["Bangkok","Phuket","Krabi","Pattaya"],
    duration:"6 Days / 5 Nights",
    rating:4.7,
    price:"₹69,999",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
}

];
const packageContainer = document.getElementById("packageContainer");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("detailsModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

/* STAR GENERATOR */

function getStars(rating){

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    let stars = "";

    for(let i = 0; i < fullStars; i++){
        stars += "★";
    }

    if(halfStar){
        stars += "⯨";
    }

    while(stars.length < 5){
        stars += "☆";
    }

    return stars;
}

/* DISPLAY PACKAGES */

function displayPackages(data){

    const saved =
    JSON.parse(
    localStorage.getItem("savedPackages")
    ) || [];

    let cards = "";

    data.forEach(pkg => {

        const isSaved =
        saved.includes(pkg.name);

        cards += `

        <div class="package-card">

            <img
            src="${pkg.image}"
            alt="${pkg.name}"
            loading="lazy"
            decoding="async">

            <div class="package-content">

                <h3>${pkg.name}</h3>

                <p class="places">
                    📍 ${pkg.places.join(" • ")}
                </p>

                <p class="duration">
                    ⏳ ${pkg.duration}
                </p>

                <div class="rating">
                    ${getStars(pkg.rating)}
                    (${pkg.rating})
                </div>

                <div class="price">
                    ${pkg.price}
                </div>

                <div class="card-footer">

                    <button
                    class="explore-btn"
                    onclick="showDetails('${pkg.name}')">

                        Explore

                    </button>

                    <span
                    class="save-btn"
                    onclick="toggleSave('${pkg.name}')">

                        ${isSaved ? "❤️" : "🤍"}

                    </span>

                </div>

            </div>

        </div>

        `;
    });

    packageContainer.innerHTML = cards;

    document
    .querySelectorAll(".package-card img")
    .forEach(img => {

        if(img.complete){
            img.classList.add("loaded");
        }else{
            img.onload = () => {
                img.classList.add("loaded");
            };
        }

    });
}

/* SEARCH */

let timer;

searchInput.addEventListener("input", () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        const value =
        searchInput.value.toLowerCase();

        const filtered =
        packages.filter(pkg =>

            pkg.name
            .toLowerCase()
            .includes(value)

            ||

            pkg.places
            .join(" ")
            .toLowerCase()
            .includes(value)

            ||

            pkg.duration
            .toLowerCase()
            .includes(value)

        );

        displayPackages(filtered);

    }, 200);

});

/* SAVE PACKAGE */

function toggleSave(packageName){

    let saved =
    JSON.parse(
    localStorage.getItem("savedPackages")
    ) || [];

    if(saved.includes(packageName)){

        saved = saved.filter(
            item => item !== packageName
        );

    }else{

        saved.push(packageName);

    }

    localStorage.setItem(
        "savedPackages",
        JSON.stringify(saved)
    );

    displayPackages(packages);
}

/* SHOW DETAILS */

function showDetails(packageName){

    const pkg =
    packages.find(
        item => item.name === packageName
    );

    modal.style.display = "flex";

    modalBody.innerHTML = `

        <h2>${pkg.name}</h2>

        <p>
            <strong>Duration:</strong>
            ${pkg.duration}
        </p>

        <br>

        <p>
            <strong>Rating:</strong>
            ${getStars(pkg.rating)}
            (${pkg.rating})
        </p>

        <br>

        <p>
            <strong>Price:</strong>
            ${pkg.price}
        </p>

        <br>

        <h3>Places Covered</h3>

        <ul>

            ${pkg.places
            .map(place => `<li>${place}</li>`)
            .join("")}

        </ul>

    `;
}

/* CLOSE MODAL */

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

/* INITIAL LOAD */

displayPackages(packages);
