const savedTripsContainer=document.getElementById("savedTrips");

const savedDestinations=
JSON.parse(localStorage.getItem("savedDestinations"))||[];

const savedPackages=
JSON.parse(localStorage.getItem("savedPackages"))||[];

let savedItems=[];

savedItems=[];

/* DESTINATIONS */

savedDestinations.forEach(name=>{

const destination=
destinations.find(item=>item.name===name);

if(destination){

savedItems.push({

type:"destination",

...destination

});

}

});

/* PACKAGES */

savedPackages.forEach(name=>{

const pkg=
packages.find(item=>item.name===name);

if(pkg){

savedItems.push({

type:"package",

...pkg

});

}

});

function displaySavedTrips(){

if(savedItems.length===0){

savedTripsContainer.innerHTML=`

<div class="no-results">

<h2>No Saved Trips ❤️</h2>

<p>Save your favourite destinations and packages to see them here.</p>

</div>

`;

return;

}

savedTripsContainer.innerHTML=savedItems.map(item=>`

<div class="saved-card">

<div class="type-badge ${item.type==="package"?"package-badge":"destination-badge"}">

${item.type==="package"?"Package":"Destination"}

</div>

<img src="${item.image}" alt="${item.name}" loading="lazy">

<h3>${item.name}</h3>

${
item.type==="destination"

?

`

<p class="location">${item.location}</p>

<p class="rating">⭐ ${item.rating}</p>

<p class="price">${item.price}</p>

`

:

`

<p class="location">📍 ${item.places.join(" • ")}</p>

<p class="duration">
<span>⏳</span>
<span>${item.duration}</span>
</p>

<p class="rating">⭐ ${item.rating}</p>

<p class="price">${item.price}</p>

`

}

<div class="card-buttons">

<button class="view-btn">

View Details

</button>

<button
class="save-btn saved"
onclick="toggleSave('${item.name}','${item.type}')">

❤️

</button>

</div>

</div>

`).join("");

}

function toggleSave(name,type){

if(type==="destination"){

let saved=

JSON.parse(localStorage.getItem("savedDestinations"))||[];

saved=saved.filter(item=>item!==name);

localStorage.setItem(

"savedDestinations",

JSON.stringify(saved)

);

}else{

let saved=

JSON.parse(localStorage.getItem("savedPackages"))||[];

saved=saved.filter(item=>item!==name);

localStorage.setItem(

"savedPackages",

JSON.stringify(saved)

);

}

savedItems=savedItems.filter(item=>item.name!==name);

displaySavedTrips();

}
displaySavedTrips();