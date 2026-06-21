const destinations = [
  /* BEACH (8) */
  {
    name: "Bali",
    location: "Indonesia",
    rating: "4.9",
    price: "₹45,000",
    category: "beach",
    country: "international",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Maldives",
    location: "Maldives",
    rating: "5.0",
    price: "₹90,000",
    category: "beach",
    country: "international",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Goa",
    location: "India",
    rating: "4.8",
    price: "₹20,000",
    category: "beach",
    country: "india",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Andaman",
    location: "India",
    rating: "4.9",
    price: "₹35,000",
    category: "beach",
    country: "india",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Phuket",
    location: "Thailand",
    rating: "4.8",
    price: "₹55,000",
    category: "beach",
    country: "international",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Santorini",
    location: "Greece",
    rating: "4.9",
    price: "₹95,000",
    category: "beach",
    country: "international",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Boracay",
    location: "Philippines",
    rating: "4.7",
    price: "₹60,000",
    category: "beach",
    country: "international",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Mauritius",
    location: "Mauritius",
    rating: "4.8",
    price: "₹85,000",
    category: "beach",
    country: "international",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75"
  },
  /* MOUNTAIN (8) */
  {
    name: "Kashmir",
    location: "India",
    rating: "4.9",
    price: "₹30,000",
    category: "mountain",
    country: "india",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Manali",
    location: "India",
    rating: "4.8",
    price: "₹25,000",
    category: "mountain",
    country: "india",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Shimla",
    location: "India",
    rating: "4.7",
    price: "₹22,000",
    category: "mountain",
    country: "india",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Munnar",
    location: "India",
    rating: "4.8",
    price: "₹24,000",
    category: "mountain",
    country: "india",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Leh Ladakh",
    location: "India",
    rating: "5.0",
    price: "₹40,000",
    category: "mountain",
    country: "india",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Swiss Alps",
    location: "Switzerland",
    rating: "5.0",
    price: "₹1,20,000",
    category: "mountain",
    country: "international",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Banff",
    location: "Canada",
    rating: "4.9",
    price: "₹1,10,000",
    category: "mountain",
    country: "international",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Interlaken",
    location: "Switzerland",
    rating: "4.9",
    price: "₹1,15,000",
    category: "mountain",
    country: "international",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=75"
  },
  /* CITY (8) */
  {
    name: "Paris",
    location: "France",
    rating: "4.8",
    price: "₹75,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Dubai",
    location: "UAE",
    rating: "4.7",
    price: "₹60,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "London",
    location: "UK",
    rating: "4.8",
    price: "₹80,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Tokyo",
    location: "Japan",
    rating: "4.9",
    price: "₹95,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Singapore",
    location: "Singapore",
    rating: "4.8",
    price: "₹70,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "New York",
    location: "USA",
    rating: "4.8",
    price: "₹1,00,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Sydney",
    location: "Australia",
    rating: "4.8",
    price: "₹1,05,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Barcelona",
    location: "Spain",
    rating: "4.7",
    price: "₹85,000",
    category: "city",
    country: "international",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=600&q=75"
  },
  /* ADVENTURE (8) */
  {
    name: "Rishikesh",
    location: "India",
    rating: "4.7",
    price: "₹18,000",
    category: "adventure",
    country: "india",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Ooty",
    location: "India",
    rating: "4.6",
    price: "₹18,000",
    category: "adventure",
    country: "india",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Ladakh Bike Tour",
    location: "India",
    rating: "5.0",
    price: "₹45,000",
    category: "adventure",
    country: "india",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Queenstown",
    location: "New Zealand",
    rating: "4.9",
    price: "₹1,10,000",
    category: "adventure",
    country: "international",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Cappadocia",
    location: "Turkey",
    rating: "4.8",
    price: "₹95,000",
    category: "adventure",
    country: "international",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Patagonia",
    location: "Argentina",
    rating: "4.9",
    price: "₹1,25,000",
    category: "adventure",
    country: "international",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Banff Hiking",
    location: "Canada",
    rating: "4.8",
    price: "₹1,05,000",
    category: "adventure",
    country: "international",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=75"
  },
  {
    name: "Interlaken Adventure",
    location: "Switzerland",
    rating: "4.9",
    price: "₹1,15,000",
    category: "adventure",
    country: "international",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=75"
  }
];

const destinationGrid = document.getElementById("destinationGrid");
let currentFilter = "all";
let currentSearch = "";

/* DISPLAY CARDS */
function displayDestinations() {
  const filteredDestinations = destinations.filter(destination => {
    const matchesFilter =
      currentFilter === "all"
        ? true
        : currentFilter === "india"
        ? destination.country === "india"
        : destination.category === currentFilter;

    const matchesSearch = destination.name
      .toLowerCase()
      .includes(currentSearch.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (filteredDestinations.length === 0) {
    destinationGrid.innerHTML = `
      <div class="no-results">
        <h2>No destinations found 😔</h2>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  } // Cleaned up the extra curly brace here so the function continues correctly

  // Card formatting mapping inside the correct function block
  const cardsHTML = filteredDestinations
    .map(
      destination => `
      <div class="card">
          <img src="${destination.image}" alt="${destination.name}" loading="lazy">
          <h3>${destination.name}</h3>
          <p class="location">${destination.location}</p>
          <p class="rating">⭐ ${destination.rating}</p>
          <p class="price">${destination.price}</p>
          <button class="view-btn">View Details</button>
      </div>
    `
    )
    .join("");

  destinationGrid.innerHTML = cardsHTML;
} // Ends displayDestinations function properly

/* INITIAL LOAD */
displayDestinations();

/* FILTER BUTTONS */
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    displayDestinations();
  });
});

/* SEARCH WITH DEBOUNCE */
const searchInput = document.getElementById("searchInput");
let searchTimeout;

searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentSearch = searchInput.value;
    displayDestinations();
  }, 150);
});