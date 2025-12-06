const API_ENDPOINT =
  "https://s41cuulhof.execute-api.us-east-1.amazonaws.com/items";

async function fetchDonuts() {
  try {
    const res = await fetch(API_ENDPOINT);
    const donuts = await res.json();

    const container = document.getElementById("donut-list");
    container.innerHTML = "";

    donuts.forEach((d) => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3";

      col.innerHTML = `
        <div class="donut-card">
            <img src="images/${d.name}.jpg" alt="${d.name}">
            <div class="donut-name">${d.name}</div>
            <div class="donut-price">$${d.price}</div>
        </div>
      `;

      container.appendChild(col);
    });
  } catch (err) {
    console.error("Error fetching donuts:", err);
  }
}

fetchDonuts();
