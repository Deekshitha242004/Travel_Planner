const packageContainer=document.getElementById("packageContainer");
const searchInput=document.getElementById("searchInput");




/* DISPLAY PACKAGES */

function displayPackages(data){

    const saved=
    JSON.parse(localStorage.getItem("savedPackages"))||[];

    if(data.length===0){

        packageContainer.innerHTML=`

        <div class="no-results">
            <h2>No Packages Found 😔</h2>
            <p>Try searching for another package.</p>
        </div>

        `;

        return;

    }

    const cards=data.map(pkg=>`

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

            <p class="rating">
         ⭐ ${pkg.rating}
           </p>

            <p class="price">
                ${pkg.price}
            </p>

            <div class="card-footer">

                <button
            class="view-btn"
                 onclick="openDetails('${pkg.name}')">
               View Details
                 </button>
                <button
                class="save-btn ${saved.includes(pkg.name)?"saved":""}"
                onclick="toggleSave('${pkg.name}')">

                    ${saved.includes(pkg.name)?"❤️":"🤍"}

                </button>

            </div>

        </div>

    </div>

    `).join("");

    packageContainer.innerHTML=cards;

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
/* SEARCH */

let timer;

searchInput.addEventListener("input",()=>{

    clearTimeout(timer);

    timer=setTimeout(()=>{

        const value=searchInput.value.toLowerCase().trim();

        const filtered=packages.filter(pkg=>

            pkg.name.toLowerCase().includes(value) ||

            pkg.places.join(" ").toLowerCase().includes(value) ||

            pkg.duration.toLowerCase().includes(value)

        );

        displayPackages(filtered);

    },150);

});

/* SAVE PACKAGE */

function toggleSave(packageName){

    let saved=
    JSON.parse(localStorage.getItem("savedPackages"))||[];

    if(saved.includes(packageName)){

        saved=saved.filter(
            item=>item!==packageName
        );

    }else{

        saved.push(packageName);

    }

    localStorage.setItem(
        "savedPackages",
        JSON.stringify(saved)
    );

    const value=searchInput.value.toLowerCase().trim();

    if(value===""){

        displayPackages(packages);

    }else{

        const filtered=packages.filter(pkg=>

            pkg.name.toLowerCase().includes(value) ||

            pkg.places.join(" ").toLowerCase().includes(value) ||

            pkg.duration.toLowerCase().includes(value)

        );

        displayPackages(filtered);

    }

}

/* SHOW DETAILS */
function openDetails(packageName){

    localStorage.removeItem("selectedDestination");

    localStorage.setItem(
        "selectedPackage",
        packageName
    );

    window.location.href="viewdetails.html";

}

/* CLOSE MODAL */



/* INITIAL LOAD */

displayPackages(packages);
