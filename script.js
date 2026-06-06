const destinations = [
  {
    category: "beach",
    name: "Bora Bora Beach",
    description: "A beautiful tropical beach with clear blue water, soft white sand, and relaxing island views.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "beach",
    name: "Maldives Beach",
    description: "A peaceful beach destination famous for luxury resorts, turquoise water, and amazing sunsets.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "temple",
    name: "Taj Mahal",
    description: "A world-famous historical monument in India known for its beautiful architecture and cultural value.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "temple",
    name: "Japanese Temple",
    description: "A peaceful traditional temple surrounded by nature, gardens, and Japanese cultural beauty.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "country",
    name: "France",
    description: "France is famous for Paris, the Eiffel Tower, art, fashion, food, and romantic travel experiences.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "country",
    name: "Japan",
    description: "Japan offers modern cities, traditional temples, beautiful nature, and a unique cultural experience.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
  }
];

function searchRecommendations() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const container = document.getElementById("recommendations");

  container.innerHTML = "";

  let results = [];

  if (input.includes("beach") || input.includes("beaches")) {
    results = destinations.filter(destination => destination.category === "beach");
  } else if (input.includes("temple") || input.includes("temples")) {
    results = destinations.filter(destination => destination.category === "temple");
  } else if (input.includes("country") || input.includes("countries")) {
    results = destinations.filter(destination => destination.category === "country");
  } else {
    results = destinations.filter(destination =>
      destination.name.toLowerCase().includes(input) ||
      destination.description.toLowerCase().includes(input) ||
      destination.category.toLowerCase().includes(input)
    );
  }

  if (input === "" || results.length === 0) {
    container.innerHTML = `
      <div class="no-result">
        No recommendations found. Please try searching for beach, temple, or country.
      </div>
    `;
    return;
  }

  results.forEach(destination => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}">
      <div class="card-content">
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
      </div>
    `;

    container.appendChild(card);
  });

  document.getElementById("results").scrollIntoView({
    behavior: "smooth"
  });
}

function clearResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("recommendations").innerHTML = "";
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    searchRecommendations();
  }
});
