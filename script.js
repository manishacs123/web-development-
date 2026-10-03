// Small interactions for the Eco Eye static frontend recreation.
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}

const reportForm = document.querySelector("#reportForm");
const successMessage = document.querySelector("#successMessage");
if (reportForm && successMessage) {
  reportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!reportForm.reportValidity()) return;
    successMessage.hidden = false;
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  const closeButton = document.querySelector("#successClose");
  if (closeButton) closeButton.addEventListener("click", () => {
    successMessage.hidden = true;
    reportForm.reset();
  });
}

const locateButton = document.querySelector("#locateButton");
if (locateButton) {
  locateButton.addEventListener("click", () => {
    const message = document.querySelector("#locationMessage");
    if (!navigator.geolocation) {
      message.textContent = "Location is not supported by this browser. You can enter coordinates manually.";
      return;
    }
    message.textContent = "Requesting location permission…";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        document.querySelector("#latitude").value = position.coords.latitude.toFixed(6);
        document.querySelector("#longitude").value = position.coords.longitude.toFixed(6);
        message.textContent = "Location added. Please verify it before submitting.";
      },
      () => {
        message.textContent = "Location could not be accessed. Allow location permission or enter coordinates manually.";
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}

const articleContent = {
  plastic: { emoji:"♻️", kicker:"01 / LESS PLASTIC", title:"One world, one mission — end plastic pollution.", summary:"Simple lifestyle changes to cut down on plastic use.", tips:["Carry a reusable bag and water bottle.","Choose products with less packaging when possible.","Reuse and recycle materials according to local guidelines."] },
  trees: { emoji:"🌳", kicker:"02 / PLANT & GROW", title:"Plant Trees, Breathe Easy", summary:"Each sapling is a promise to tomorrow. Discover community tree-planting ideas.", tips:["Choose native plants suited to your area.","Join a local tree-planting or garden group.","Care for young trees as they grow."] },
  solar: { emoji:"☀️", kicker:"03 / CLEAN ENERGY", title:"Power the Future with Solar", summary:"Switch to renewable energy and reduce your carbon footprint.", tips:["Turn off lights and devices when not in use.","Explore renewable electricity options where available.","Choose energy-efficient bulbs and appliances."] },
  water: { emoji:"💧", kicker:"04 / SAVE WATER", title:"Every Drop Counts", summary:"Conserve water and protect our planet's most valuable resource.", tips:["Fix dripping taps when possible.","Turn off the tap while brushing your teeth.","Water plants in cooler parts of the day."] },
  wildlife: { emoji:"🦋", kicker:"05 / BIODIVERSITY", title:"Protect Our Wildlife", summary:"Preserve biodiversity and make space for every species.", tips:["Keep litter out of parks, rivers, and natural areas.","Plant native flowers to support pollinators.","Observe wild animals from a respectful distance."] },
  recycle: { emoji:"🪴", kicker:"06 / REIMAGINE", title:"Reuse, Recycle, Reinvent", summary:"Turn waste into opportunities — think creatively and live sustainably.", tips:["Repair or donate items before throwing them away.","Separate recyclable materials according to local rules.","Reuse containers and bags where practical."] }
};
const articleTitle = document.querySelector("#articleTitle");
if (articleTitle) {
  const topic = new URLSearchParams(window.location.search).get("topic") || "plastic";
  const article = articleContent[topic] || articleContent.plastic;
  document.title = `Eco Eye | ${article.title}`;
  document.querySelector("#articleEmoji").textContent = article.emoji;
  document.querySelector("#articleKicker").textContent = article.kicker;
  articleTitle.textContent = article.title;
  document.querySelector("#articleSummary").textContent = article.summary;
  const tips = document.querySelector("#articleTips");
  tips.replaceChildren(...article.tips.map((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    return li;
  }));
}
