const nav = document.querySelector(".main-nav");
const toggle = document.querySelector(".menu-toggle");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function createCard(item, type = "product") {
  const card = document.createElement("article");
  card.className = type === "use" ? "use-card" : "product-card";

  const media = document.createElement("div");
  media.className = type === "use" ? "use-media" : "product-media";
  media.style.setProperty("--media-bg", item.color || "#7b6a55");
  media.textContent = item.mark || "";

  const body = document.createElement("div");
  body.className = type === "use" ? "use-body" : "product-body";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  body.append(title, description);

  if (type !== "use") {
    const meta = document.createElement("span");
    meta.className = "product-meta";
    meta.textContent = item.status || "BAGGOTTS";
    body.appendChild(meta);
  }

  card.append(media, body);
  return card;
}

const catalogGrid = document.getElementById("catalogGrid");
const useGrid = document.getElementById("useGrid");

if (catalogGrid && window.BAGGOTTS_CONTENT?.products) {
  window.BAGGOTTS_CONTENT.products.forEach((item) => catalogGrid.appendChild(createCard(item)));
}

if (useGrid && window.BAGGOTTS_CONTENT?.outdoorExamples) {
  window.BAGGOTTS_CONTENT.outdoorExamples.forEach((item, index) => {
    useGrid.appendChild(createCard({ ...item, mark: String(index + 1).padStart(2, "0") }, "use"));
  });
}
