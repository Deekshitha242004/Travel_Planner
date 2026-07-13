/* ===========================
   GET SELECTED DATA
=========================== */

const selectedPackage =
localStorage.getItem("selectedPackage");

const selectedDestination =
localStorage.getItem("selectedDestination");

let data = null;
let saveKey = "";
let locationText = "";
let durationText = "";

/* ===========================
   LOAD PACKAGE
=========================== */

if(selectedPackage){

    data = packages.find(
        item => item.name === selectedPackage
    );

    saveKey = "savedPackages";

    locationText = data.places.join(" • ");

    durationText = data.duration;

}

/* ===========================
   LOAD DESTINATION
=========================== */

else if(selectedDestination){

    data = destinations.find(
        item => item.name === selectedDestination
    );

    saveKey = "savedDestinations";

    locationText = data.location;

    durationText = "Flexible Trip";

}

/* ===========================
   NOT FOUND
=========================== */

if(!data){

    document.querySelector(".details-container").innerHTML=`
        <h2 style="text-align:center;padding:80px;">
            Details Not Found
        </h2>
    `;

    throw new Error("Data Not Found");

}

/* ===========================
   TOP SECTION
=========================== */

document.getElementById("detailImage").src =
data.image;

document.getElementById("detailImage").alt =
data.name;

document.getElementById("detailName").textContent =
data.name;

document.getElementById("detailLocation").textContent =
locationText;

document.getElementById("detailDuration").textContent =
durationText;

document.getElementById("detailPrice").textContent =
data.price;

document.getElementById("detailRating").textContent =
data.rating;

/* ===========================
   OVERVIEW
=========================== */

document.getElementById("detailOverview").textContent =
data.overview || "No overview available.";

/* ===========================
   PLACES
=========================== */

const placesList =
document.getElementById("placesList");

placesList.innerHTML="";

if(data.places){

    data.places.forEach(place=>{

        placesList.innerHTML += `
            <li>📍 ${place}</li>
        `;

    });

}

/* ===========================
   ACTIVITIES
=========================== */

const activitiesList =
document.getElementById("activitiesList");

activitiesList.innerHTML="";

if(data.activities){

    data.activities.forEach(activity=>{

        activitiesList.innerHTML += `
            <li>🎯 ${activity}</li>
        `;

    });

}

/* ===========================
   WEATHER
=========================== */

if(typeof data.weather==="string"){

    document.getElementById("detailWeather").textContent =
    data.weather;

}

else if(data.weather){

    document.getElementById("detailWeather").innerHTML=`
        <strong>Best Season:</strong>
        ${data.weather.bestSeason}
        <br>
        <strong>Temperature:</strong>
        ${data.weather.temperature}
    `;

}

else{

    document.getElementById("detailWeather").textContent =
    "Weather information unavailable.";

}

/* ===========================
   TRAVEL TIPS
=========================== */

const tipsList =
document.getElementById("tipsList");

tipsList.innerHTML="";

const tips =
data.tips || data.travelTips || [];

tips.forEach(tip=>{

    tipsList.innerHTML += `
        <li>✔ ${tip}</li>
    `;

});

/* ===========================
   SAVE BUTTON
=========================== */

const saveBtn =
document.getElementById("saveBtn");

let saved =
JSON.parse(localStorage.getItem(saveKey)) || [];

updateSave();

saveBtn.onclick=function(){

    if(saved.includes(data.name)){

        saved =
        saved.filter(item=>item!==data.name);

    }

    else{

        saved.push(data.name);

    }

    localStorage.setItem(
        saveKey,
        JSON.stringify(saved)
    );

    updateSave();

};

function updateSave(){

    saveBtn.textContent =
    saved.includes(data.name)
    ? "❤️"
    : "🤍";

}
/* ===========================
   BACK BUTTON
=========================== */

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {

    if(selectedPackage){

        window.location.href = "packages.html";

    }

    else if(selectedDestination){

        window.location.href = "destination.html";

    }

    else{

        window.location.href = "index.html";

    }

});