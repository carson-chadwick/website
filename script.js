// Replace with your API Gateway endpoint
const API_ENDPOINT =
  "https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com/donuts";

async function fetchDonuts() {
  try {
    const res = await fetch(API_ENDPOINT);
    const donuts = await res.json();

    const container = document.getElementById("donut-list");
    container.innerHTML = "";

    donuts.forEach((d) => {
      const card = document.createElement("div");
      card.className = "donut-card";

      const img = document.createElement("img");
      img.src = `images/${d.name}.jpg`;
      img.alt = d.name;

      const name = document.createElement("div");
      name.className = "donut-name";
      name.textContent = d.name;

      const price = document.createElement("div");
      price.className = "donut-price";
      price.textContent = `$${d.price}`;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(price);

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching donuts:", err);
  }
}

// Fetch donuts on page load
fetchDonuts();
