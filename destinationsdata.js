const destinations = [

/* ==========================
   BEACH (8)
========================== */

{
    name:"Bali",
    location:"Indonesia",
    rating:"4.9",
    price:"₹45,000",
    category:"beach",
    country:"international",
    image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",

    overview:"Relax on Bali's beautiful beaches, explore ancient temples, lush rice terraces, waterfalls, and experience its vibrant island culture.",

    activities:[
        "Surfing",
        "Temple Tour",
        "Snorkeling",
        "Sunset Photography"
    ],

    weather:{
        bestSeason:"April - October",
        temperature:"24°C - 31°C"
    },

    travelTips:[
        "Carry light cotton clothes.",
        "Respect temple dress codes.",
        "Use sunscreen.",
        "Carry Indonesian Rupiah."
    ]
},

{
    name:"Maldives",
    location:"Maldives",
    rating:"5.0",
    price:"₹90,000",
    category:"beach",
    country:"international",
    image:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",

    overview:"Enjoy crystal-clear lagoons, luxury water villas, coral reefs, and peaceful island life in one of the world's top beach destinations.",

    activities:[
        "Scuba Diving",
        "Snorkeling",
        "Island Hopping",
        "Sunset Cruise"
    ],

    weather:{
        bestSeason:"November - April",
        temperature:"26°C - 31°C"
    },

    travelTips:[
        "Book resorts early.",
        "Carry sunglasses.",
        "Protect electronics from water.",
        "Carry US Dollars."
    ]
},

{
    name:"Goa",
    location:"India",
    rating:"4.8",
    price:"₹20,000",
    category:"beach",
    country:"india",
    image:"https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",

    overview:"Discover Goa's lively beaches, Portuguese heritage, seafood, nightlife, churches, and water sports.",

    activities:[
        "Parasailing",
        "Beach Party",
        "Boat Cruise",
        "Shopping"
    ],

    weather:{
        bestSeason:"November - February",
        temperature:"22°C - 31°C"
    },

    travelTips:[
        "Carry beachwear.",
        "Try local seafood.",
        "Rent a scooter.",
        "Avoid swimming during rough seas."
    ]
},

{
    name:"Andaman",
    location:"India",
    rating:"4.9",
    price:"₹35,000",
    category:"beach",
    country:"india",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

    overview:"Explore pristine islands, turquoise waters, coral reefs, and white sandy beaches in the Andaman Islands.",

    activities:[
        "Scuba Diving",
        "Glass Boat Ride",
        "Snorkeling",
        "Beach Walk"
    ],

    weather:{
        bestSeason:"October - May",
        temperature:"24°C - 30°C"
    },

    travelTips:[
        "Carry sunscreen.",
        "Book ferry tickets early.",
        "Keep identity proof.",
        "Respect marine life."
    ]
},

{
    name:"Phuket",
    location:"Thailand",
    rating:"4.8",
    price:"₹55,000",
    category:"beach",
    country:"international",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

    overview:"Experience Phuket's tropical beaches, island tours, delicious Thai food, exciting nightlife, and crystal-clear waters.",

    activities:[
        "Island Hopping",
        "Jet Ski",
        "Thai Massage",
        "Night Market"
    ],

    weather:{
        bestSeason:"November - April",
        temperature:"25°C - 32°C"
    },

    travelTips:[
        "Carry Thai Baht.",
        "Stay hydrated.",
        "Use sunscreen.",
        "Respect local customs."
    ]
},

{
    name:"Santorini",
    location:"Greece",
    rating:"4.9",
    price:"₹95,000",
    category:"beach",
    country:"international",
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",

    overview:"Witness breathtaking sunsets, whitewashed buildings, blue-domed churches, and stunning views of the Aegean Sea.",

    activities:[
        "Sunset Cruise",
        "Wine Tasting",
        "Beach Walk",
        "Photography"
    ],

    weather:{
        bestSeason:"April - October",
        temperature:"20°C - 30°C"
    },

    travelTips:[
        "Wear comfortable footwear.",
        "Book hotels in advance.",
        "Carry sunscreen.",
        "Explore local cafés."
    ]
},

{
    name:"Boracay",
    location:"Philippines",
    rating:"4.7",
    price:"₹60,000",
    category:"beach",
    country:"international",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

    overview:"Boracay is famous for powdery white sand beaches, vibrant nightlife, crystal-clear waters, and exciting water sports.",

    activities:[
        "Parasailing",
        "Beach Volleyball",
        "Banana Boat Ride",
        "Sunset Sailing"
    ],

    weather:{
        bestSeason:"November - May",
        temperature:"25°C - 31°C"
    },

    travelTips:[
        "Carry beach essentials.",
        "Stay hydrated.",
        "Book island tours early.",
        "Carry local currency."
    ]
},

{
    name:"Mauritius",
    location:"Mauritius",
    rating:"4.8",
    price:"₹85,000",
    category:"beach",
    country:"international",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

    overview:"Enjoy luxury resorts, turquoise lagoons, volcanic landscapes, tropical forests, and beautiful coral reefs in Mauritius.",

    activities:[
        "Snorkeling",
        "Catamaran Cruise",
        "Beach Relaxation",
        "Scuba Diving"
    ],

    weather:{
        bestSeason:"May - December",
        temperature:"20°C - 29°C"
    },

    travelTips:[
        "Carry light clothing.",
        "Book cruises early.",
        "Use sunscreen.",
        "Carry waterproof bags."
    ]
},

/* ==========================
   MOUNTAIN (4)
========================== */
{
    name:"Kashmir",
    location:"India",
    rating:"4.9",
    price:"₹30,000",
    category:"mountain",
    country:"india",
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",

    overview:"Experience the breathtaking valleys of Kashmir, peaceful lakes, snow-covered mountains, colorful gardens, and unforgettable Himalayan landscapes.",

    activities:[
        "Shikara Ride",
        "Gondola Ride",
        "Snow Adventure",
        "Photography"
    ],

    weather:{
        bestSeason:"March - June & December - February",
        temperature:"-2°C - 24°C"
    },

    travelTips:[
        "Carry warm clothes.",
        "Keep your ID proof.",
        "Wear comfortable shoes.",
        "Book hotels in advance."
    ]
},

{
    name:"Shimla",
    location:"India",
    rating:"4.7",
    price:"₹22,000",
    category:"mountain",
    country:"india",
    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",

    overview:"Enjoy Shimla's cool climate, colonial architecture, pine forests, scenic viewpoints, and famous Mall Road.",

    activities:[
        "Mall Road Walk",
        "Toy Train Ride",
        "Photography",
        "Shopping"
    ],

    weather:{
        bestSeason:"March - June & October - December",
        temperature:"5°C - 25°C"
    },

    travelTips:[
        "Carry a light jacket.",
        "Wear comfortable shoes.",
        "Visit early to avoid crowds.",
        "Try local Himachali food."
    ]
},

{
    name:"Leh Ladakh",
    location:"India",
    rating:"5.0",
    price:"₹40,000",
    category:"mountain",
    country:"india",
    image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",

    overview:"Discover the majestic landscapes of Leh Ladakh with high mountain passes, crystal-clear lakes, monasteries, and thrilling road trips.",

    activities:[
        "Bike Ride",
        "Camping",
        "River Rafting",
        "Photography"
    ],

    weather:{
        bestSeason:"May - September",
        temperature:"2°C - 20°C"
    },

    travelTips:[
        "Acclimatize before sightseeing.",
        "Carry warm clothing.",
        "Stay hydrated.",
        "Keep medicines for high altitude."
    ]
},

{
    name:"Interlaken",
    location:"Switzerland",
    rating:"4.9",
    price:"₹1,15,000",
    category:"mountain",
    country:"international",
    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",

    overview:"Surrounded by the Swiss Alps, Interlaken offers stunning lakes, adventure sports, scenic train rides, and breathtaking mountain views.",

    activities:[
        "Paragliding",
        "Cable Car Ride",
        "Boat Cruise",
        "Scenic Train Journey"
    ],

    weather:{
        bestSeason:"May - September",
        temperature:"8°C - 23°C"
    },

    travelTips:[
        "Carry warm jackets.",
        "Book train passes early.",
        "Wear trekking shoes.",
        "Carry travel insurance."
    ]
},

/* ==========================
   CITY (8)
========================== */
{
    name:"Paris",
    location:"France",
    rating:"4.8",
    price:"₹75,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",

    overview:"Discover the romance of Paris with iconic landmarks, charming cafés, world-famous museums, beautiful architecture, and unforgettable experiences.",

    activities:[
        "Eiffel Tower Visit",
        "Seine River Cruise",
        "Museum Tour",
        "Shopping"
    ],

    weather:{
        bestSeason:"April - June & September - October",
        temperature:"12°C - 25°C"
    },

    travelTips:[
        "Wear comfortable walking shoes.",
        "Book museum tickets online.",
        "Carry your passport safely.",
        "Learn basic French greetings."
    ]
},

{
    name:"Dubai",
    location:"UAE",
    rating:"4.7",
    price:"₹60,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",

    overview:"Experience Dubai's luxury lifestyle, futuristic skyline, shopping malls, desert adventures, and iconic skyscrapers.",

    activities:[
        "Desert Safari",
        "Burj Khalifa Visit",
        "Dhow Cruise",
        "Shopping"
    ],

    weather:{
        bestSeason:"November - March",
        temperature:"20°C - 30°C"
    },

    travelTips:[
        "Carry sunscreen.",
        "Dress modestly at public places.",
        "Use Metro for travel.",
        "Stay hydrated."
    ]
},

{
    name:"London",
    location:"United Kingdom",
    rating:"4.8",
    price:"₹80,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",

    overview:"Explore London's rich history, royal palaces, museums, iconic bridges, shopping streets, and vibrant culture.",

    activities:[
        "London Eye Ride",
        "Museum Visit",
        "River Thames Cruise",
        "Shopping"
    ],

    weather:{
        bestSeason:"May - September",
        temperature:"10°C - 24°C"
    },

    travelTips:[
        "Carry an umbrella.",
        "Use Oyster Card.",
        "Book attractions online.",
        "Wear comfortable shoes."
    ]
},

{
    name:"Tokyo",
    location:"Japan",
    rating:"4.9",
    price:"₹95,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",

    overview:"Experience Tokyo's modern skyline, ancient temples, delicious cuisine, anime culture, and world-class shopping.",

    activities:[
        "Temple Visit",
        "Bullet Train Ride",
        "Shopping",
        "Street Food Tour"
    ],

    weather:{
        bestSeason:"March - May & October - November",
        temperature:"8°C - 27°C"
    },

    travelTips:[
        "Carry cash.",
        "Respect local customs.",
        "Use public transport.",
        "Learn basic Japanese phrases."
    ]
},

{
    name:"Singapore",
    location:"Singapore",
    rating:"4.8",
    price:"₹70,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",

    overview:"Enjoy Singapore's futuristic skyline, Gardens by the Bay, Sentosa Island, shopping streets, and multicultural cuisine.",

    activities:[
        "Night Safari",
        "Gardens Visit",
        "Shopping",
        "Sentosa Tour"
    ],

    weather:{
        bestSeason:"February - April",
        temperature:"25°C - 32°C"
    },

    travelTips:[
        "Carry light clothing.",
        "Follow public rules.",
        "Carry water bottle.",
        "Use MRT."
    ]
},

{
    name:"New York",
    location:"USA",
    rating:"4.8",
    price:"₹1,00,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=900&q=80",

    overview:"Explore the city that never sleeps with Times Square, Central Park, Broadway, museums, and world-famous landmarks.",

    activities:[
        "Statue of Liberty Tour",
        "Broadway Show",
        "Shopping",
        "City Sightseeing"
    ],

    weather:{
        bestSeason:"April - June & September - November",
        temperature:"8°C - 28°C"
    },

    travelTips:[
        "Use MetroCard.",
        "Wear comfortable shoes.",
        "Book attractions online.",
        "Keep emergency contacts."
    ]
},

{
    name:"Sydney",
    location:"Australia",
    rating:"4.8",
    price:"₹1,05,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",

    overview:"Visit Sydney's famous Opera House, Harbour Bridge, beaches, wildlife parks, and vibrant waterfront attractions.",

    activities:[
        "Harbour Cruise",
        "Opera House Tour",
        "Beach Visit",
        "Wildlife Park"
    ],

    weather:{
        bestSeason:"September - November & March - May",
        temperature:"15°C - 28°C"
    },

    travelTips:[
        "Carry sunscreen.",
        "Book harbour cruises early.",
        "Use public transport.",
        "Stay hydrated."
    ]
},

{
    name:"Barcelona",
    location:"Spain",
    rating:"4.7",
    price:"₹85,000",
    category:"city",
    country:"international",
    image:"https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=900&q=80",

    overview:"Explore Barcelona's stunning architecture, Mediterranean beaches, lively markets, football culture, and delicious Spanish cuisine.",

    activities:[
        "Sagrada Familia Tour",
        "Beach Walk",
        "Shopping",
        "Food Tour"
    ],

    weather:{
        bestSeason:"May - June & September",
        temperature:"16°C - 29°C"
    },

    travelTips:[
        "Beware of pickpockets.",
        "Carry Euros.",
        "Wear walking shoes.",
        "Book attraction tickets online."
    ]
},

/* ==========================
   ADVENTURE (6)
========================== */
{
    name:"Rishikesh",
    location:"India",
    rating:"4.7",
    price:"₹18,000",
    category:"adventure",
    country:"india",
    image:"https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",

    overview:"Experience the adventure capital of India with river rafting, camping, yoga retreats, and breathtaking Himalayan views.",

    activities:[
        "River Rafting",
        "Bungee Jumping",
        "Camping",
        "Yoga Session"
    ],

    weather:{
        bestSeason:"September - April",
        temperature:"12°C - 28°C"
    },

    travelTips:[
        "Carry sports shoes.",
        "Book adventure activities early.",
        "Carry light jackets.",
        "Follow safety instructions."
    ]
},

{
    name:"Ooty",
    location:"India",
    rating:"4.6",
    price:"₹18,000",
    category:"adventure",
    country:"india",
    image:"https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",

    overview:"Enjoy scenic hills, tea plantations, waterfalls, toy train rides, and pleasant weather in the Queen of Hill Stations.",

    activities:[
        "Toy Train Ride",
        "Boating",
        "Tea Garden Visit",
        "Photography"
    ],

    weather:{
        bestSeason:"October - June",
        temperature:"10°C - 23°C"
    },

    travelTips:[
        "Carry warm clothes.",
        "Visit Botanical Garden.",
        "Book hotels in advance.",
        "Carry comfortable shoes."
    ]
},

{
    name:"Ladakh Bike Tour",
    location:"India",
    rating:"5.0",
    price:"₹45,000",
    category:"adventure",
    country:"india",
    image:"https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80",

    overview:"Ride through the world's highest motorable roads while exploring monasteries, valleys, and crystal-clear lakes.",

    activities:[
        "Bike Expedition",
        "Camping",
        "Photography",
        "Monastery Visit"
    ],

    weather:{
        bestSeason:"May - September",
        temperature:"2°C - 20°C"
    },

    travelTips:[
        "Acclimatize properly.",
        "Carry riding gear.",
        "Stay hydrated.",
        "Keep emergency medicines."
    ]
},

{
    name:"Queenstown",
    location:"New Zealand",
    rating:"4.9",
    price:"₹1,10,000",
    category:"adventure",
    country:"international",
    image:"https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=80",

    overview:"Queenstown is famous for thrilling adventure sports, beautiful lakes, mountain scenery, and exciting outdoor experiences.",

    activities:[
        "Skydiving",
        "Bungee Jumping",
        "Jet Boat Ride",
        "Mountain Hiking"
    ],

    weather:{
        bestSeason:"December - February",
        temperature:"10°C - 25°C"
    },

    travelTips:[
        "Book adventure sports early.",
        "Carry warm clothes.",
        "Wear trekking shoes.",
        "Carry travel insurance."
    ]
},

{
    name:"Cappadocia",
    location:"Turkey",
    rating:"4.8",
    price:"₹95,000",
    category:"adventure",
    country:"international",
    image:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",

    overview:"Discover Cappadocia's fairy chimneys, cave hotels, hot air balloons, and breathtaking sunrise landscapes.",

    activities:[
        "Hot Air Balloon Ride",
        "ATV Safari",
        "Cave Exploration",
        "Photography"
    ],

    weather:{
        bestSeason:"April - June & September - October",
        temperature:"10°C - 28°C"
    },

    travelTips:[
        "Book balloon rides in advance.",
        "Wake up early for sunrise.",
        "Carry a light jacket.",
        "Wear comfortable footwear."
    ]
},

{
    name:"Patagonia",
    location:"Argentina",
    rating:"4.9",
    price:"₹1,25,000",
    category:"adventure",
    country:"international",
    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",

    overview:"Explore glaciers, rugged mountains, national parks, and some of the world's most spectacular hiking trails.",

    activities:[
        "Glacier Trekking",
        "Mountain Hiking",
        "Wildlife Watching",
        "Camping"
    ],

    weather:{
        bestSeason:"October - March",
        temperature:"5°C - 22°C"
    },

    travelTips:[
        "Carry waterproof clothing.",
        "Wear trekking boots.",
        "Pack warm jackets.",
        "Carry energy snacks."
    ]
}

];