const regions = [
  {
    region: "Banaadir",
    capital: "Muqdisho",
  },
  {
    region: "Hiiraan",
    capital: "Beledweyne",
  },
  {
    region: "Galguduud",
    capital: "Dhuusamareeb",
  },
  {
    region: "Mudug",
    capital: "Gaalkacyo",
  },
  {
    region: "Nugaal",
    capital: "Garoowe",
  },
  {
    region: "Bari",
    capital: "Boosaaso",
  },
];

const regionsContainer = document.querySelector("#regionsContainer");
const searchInput = document.querySelector("#searchInput");
const noResults = document.querySelector("#noResults");

function displayRegions(regionList) {
  regionsContainer.innerHTML = "";

  regionList.forEach((item) => {
    const card = document.createElement("article");

    card.className = "region-card";

    card.innerHTML = `
      <h3>${item.region}</h3>
      <p><strong>Capital:</strong> ${item.capital}</p>
    `;

    regionsContainer.appendChild(card);
  });

  noResults.classList.toggle("hidden", regionList.length > 0);
}

function searchRegions() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredRegions = regions.filter((item) => {
    return (
      item.region.toLowerCase().includes(searchTerm) ||
      item.capital.toLowerCase().includes(searchTerm)
    );
  });

  displayRegions(filteredRegions);
}

searchInput.addEventListener("input", searchRegions);

displayRegions(regions);