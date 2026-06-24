const tripType = document.getElementById("tripType");
const tripSelect = document.getElementById("tripSelect");
const tripError = document.getElementById("tripError");

const calculateBtn = document.getElementById("calculateBtn");
const bookBtn = document.getElementById("bookBtn");
const totalCost = document.getElementById("totalCost");

const destinations = [
    {name:"Goa",price:20000},
    {name:"Kashmir",price:35000},
    {name:"Manali",price:25000},
    {name:"Munnar",price:24000},
    {name:"Ooty",price:18000},
    {name:"Rishikesh",price:18000},
    {name:"Leh Ladakh",price:40000},
    {name:"Andaman",price:30000}
];

const packages = [
    {name:"North India Explorer",price:48999},
    {name:"South India Paradise",price:42999},
    {name:"East India Heritage Tour",price:44999},
    {name:"West India Discovery",price:46999},
    {name:"Bali Explorer",price:65999},
    {name:"Dubai Luxury Tour",price:72999},
    {name:"Paris & France Escape",price:95999},
    {name:"Japan Highlights",price:115999},
    {name:"Switzerland Dream Tour",price:135999},
    {name:"Thailand Adventure",price:69999}
];

/* LOAD DESTINATIONS OR PACKAGES */

tripType.addEventListener("change", () => {

    tripSelect.innerHTML =
    `<option value="">Select Destination / Package</option>`;

    tripError.innerText = "";
    tripSelect.classList.remove("error-border");

    if(tripType.value === "destination"){

        destinations.forEach(item => {

            tripSelect.innerHTML += `
                <option value="${item.price}">
                    ${item.name}
                </option>
            `;

        });

    }

    else if(tripType.value === "package"){

        packages.forEach(item => {

            tripSelect.innerHTML += `
                <option value="${item.price}">
                    ${item.name}
                </option>
            `;

        });

    }

});

/* VALIDATION */

function validateSelection(){

    tripError.innerText = "";
    tripSelect.classList.remove("error-border");

    if(tripType.value === ""){

        tripError.innerText =
        "Please choose Destination or Package";

        return false;

    }

    if(tripSelect.value === ""){

        if(tripType.value === "destination"){

            tripError.innerText =
            "Please choose a destination";

        }

        else{

            tripError.innerText =
            "Please choose a package";

        }

        tripSelect.classList.add("error-border");

        return false;

    }

    return true;

}

/* CALCULATE COST */

function calculateTripCost(){

    if(!validateSelection()){

        totalCost.innerText = "₹0";
        return null;

    }

    const destination =
    Number(tripSelect.value);

    const travelers =
    Number(document.getElementById("travelers").value);

    const days =
    Number(document.getElementById("days").value);

    const hotel =
    Number(document.getElementById("hotel").value);

    const food =
    Number(document.getElementById("food").value);

    const transport =
    Number(document.getElementById("transport").value);

    const activity =
    Number(document.getElementById("activity").value);

    const destinationCost =
    destination * travelers;

    const hotelCost =
    hotel * days;

    const foodCost =
    food * days * travelers;

    const transportCost =
    transport * travelers;

    const activityCost =
    activity * travelers;

    const total =
    destinationCost +
    hotelCost +
    foodCost +
    transportCost +
    activityCost;

    totalCost.innerText =
    "₹" + total.toLocaleString("en-IN");

    return total;

}

/* CALCULATE BUTTON */

calculateBtn.addEventListener("click", () => {

    calculateTripCost();

});

/* BOOK TRIP */

bookBtn.addEventListener("click", () => {

    const total = calculateTripCost();

    if(total === null) return;

    const selectedName =
    tripSelect.options[
        tripSelect.selectedIndex
    ].text;

    const travelers =
    document.getElementById("travelers").value;

    const days =
    document.getElementById("days").value;

    const bookingMessage =
    document.getElementById("bookingMessage");

    bookingMessage.classList.add("success-show");

    bookingMessage.innerHTML = `

        <h4>🎉 Trip Booked Successfully!</h4>

        <p>
            <strong>Destination/Package:</strong>
            ${selectedName}
        </p>

        <p>
            <strong>Travelers:</strong>
            ${travelers}
        </p>

        <p>
            <strong>Days:</strong>
            ${days}
        </p>

        <p>
            <strong>Total Cost:</strong>
            ₹${total.toLocaleString("en-IN")}
        </p>

    `;

});

/* REMOVE ERROR WHEN USER SELECTS */

tripSelect.addEventListener("change", () => {

    tripError.innerText = "";
    tripSelect.classList.remove("error-border");

});

/* INITIAL VALUE */

totalCost.innerText = "₹0";