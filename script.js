const contacts = {
  vk: "https://vk.com/baggots",
  instagram: "https://www.instagram.com/baggots_shop/",
  max: "#",
  threads: "#"
};

const bags = [
  {
    id: "red-zip",
    title: "Red Zip",
    status: "в наличии",
    price: "по запросу",
    short: "Чёрная сумка с красными молниями. Строгая, но не скучная.",
    description: "Спокойная чёрная база, яркие красные молнии и немного уличного характера. Подходит для города, прогулок и ситуаций, где карманы уже сдались. Ремень регулируется: можно носить на поясе или как кросс-боди.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/red-zip-1.webp", "images/red-zip-2.svg", "images/red-zip-3.svg", "images/red-zip-4.svg", "images/red-zip-5.svg"]
  },
  {
    id: "kfc-goat",
    title: "KFC Goat",
    status: "в наличии",
    price: "по запросу",
    short: "Бежевая сумка с красным принтом. Вещь, которая сама начинает разговор.",
    description: "Сумка с заметным красным принтом и мягкой бежевой базой. Немного рекламы, немного иронии, много характера. Основное отделение закрывается на молнию, есть внешний карман для мелочей.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/kfc-goat-1.webp", "images/kfc-goat-2.svg", "images/kfc-goat-3.svg", "images/kfc-goat-4.svg", "images/kfc-goat-5.svg"]
  },
  {
    id: "mystic-pocket",
    title: "Mystic Pocket",
    status: "в наличии",
    price: "по запросу",
    short: "Чёрная сумка с символами: немного эзотерики, немного улицы.",
    description: "Принт с символами, чёрная база и спокойная форма. Для тех, кто любит детали, которые можно рассматривать дольше трёх секунд.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/mystic-pocket-1.webp", "images/mystic-pocket-2.svg", "images/mystic-pocket-3.svg", "images/mystic-pocket-4.svg", "images/mystic-pocket-5.svg"]
  },
  {
    id: "yellow-line",
    title: "Yellow Line",
    status: "в наличии",
    price: "по запросу",
    short: "Чёрная сумка с жёлтыми молниями. Простая форма, яркий акцент.",
    description: "Чёрная основа и жёлтые молнии — понятная городская сумка, но с заметным настроением. Без лишнего шума, но не без шалости.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/yellow-line-1.webp", "images/yellow-line-2.svg", "images/yellow-line-3.svg", "images/yellow-line-4.svg", "images/yellow-line-5.svg"]
  },
  {
    id: "london-mess",
    title: "London Mess",
    status: "в наличии",
    price: "по запросу",
    short: "Британские флаги, газетный хаос и лёгкое чувство приключения.",
    description: "Сумка с британскими флагами и газетным принтом. Очень в духе “я вышел за хлебом и случайно стал заметным”.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/london-mess-1.webp", "images/outdoor/british-01.webp", "images/outdoor/british-02.webp", "images/outdoor/british-03.webp", "images/outdoor/british-05.webp"]
  },
  {
    id: "craft-one",
    title: "Craft One",
    status: "в наличии",
    price: "по запросу",
    short: "Крафтовая коричневая фактура. Спокойная, тёплая, немного походная.",
    description: "Коричневая крафтовая фактура, тёплый оттенок и спокойный вид. Сумка будто уже была в маленьком приключении и не против ещё одного.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/craft-one-1.webp", "images/craft-one-2.svg", "images/craft-one-3.svg", "images/craft-one-4.svg", "images/craft-one-5.svg"]
  },
  {
    id: "coffee-run",
    title: "Coffee Run",
    status: "в наличии",
    price: "по запросу",
    short: "Сумка из кофейной упаковки. Upcycling без занудства.",
    description: "Глянцевый кофейный принт, красный ремень и история материала, которому дали вторую жизнь. Подойдёт тем, кто любит вещи с прошлым и будущим.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/coffee-run-1.webp", "images/coffee-run-2.svg", "images/coffee-run-3.svg", "images/coffee-run-4.svg", "images/coffee-run-5.svg"]
  },
  {
    id: "denim-pocket",
    title: "Denim Pocket",
    status: "в наличии",
    price: "по запросу",
    short: "Джинсовая сумка с внешним карманом. Дружелюбная, но с характером.",
    description: "Деним, жёлтые молнии и внешний карман. Самая понятная из компании, но козлик всё равно где-то рядом.",
    materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
    size: "примерно 300 × 150 × 70 мм",
    photos: ["images/denim-pocket-1.webp", "images/outdoor/denim-01.webp", "images/outdoor/denim-02.webp", "images/outdoor/inside-01.webp", "images/denim-pocket-2.svg"]
  }
];

const lab = {
  id: "goat-lab",
  title: "Goat Lab",
  status: "эксперимент",
  price: "не продаётся напрямую",
  short: "Козлиная лаборатория для прототипов и странных сочетаний.",
  description: "Здесь будут появляться экспериментальные сумки: странные сочетания тканей, неожиданные молнии, переработанные материалы, заготовки, прототипы и идеи, которые сначала казались сомнительными.",
  materials: "всё, что просится стать сумкой",
  size: "зависит от эксперимента",
  photos: ["images/goat-lab-1.svg", "images/goat-lab-2.svg", "images/goat-lab-3.svg", "images/goat-lab-4.svg", "images/goat-lab-5.svg"]
};

const bagsGrid = document.querySelector("#bagsGrid");
const modal = document.querySelector("#bagModal");
const closeModal = document.querySelector("#closeModal");
const modalTitle = document.querySelector("#modalTitle");
const modalStatus = document.querySelector("#modalStatus");
const modalDescription = document.querySelector("#modalDescription");
const modalPrice = document.querySelector("#modalPrice");
const modalMaterials = document.querySelector("#modalMaterials");
const modalSize = document.querySelector("#modalSize");
const modalMainPhoto = document.querySelector("#modalMainPhoto");
const modalThumbs = document.querySelector("#modalThumbs");
const heroCarouselImage = document.querySelector("#heroCarouselImage");

function renderCards() {
  if (!bagsGrid) return;

  const bagCards = bags.map((bag) => `
    <article class="bag-card" data-bag-id="${bag.id}" tabindex="0" aria-label="Открыть карточку ${bag.title}">
      <div class="bag-photo"><img src="${bag.photos[0]}" alt="${bag.title}" loading="lazy" decoding="async" /></div>
      <div class="bag-info">
        <div class="bag-row">
          <h3>${bag.title}</h3>
          <span class="status">${bag.status}</span>
        </div>
        <p>${bag.short}</p>
      </div>
    </article>
  `).join("");

  const repairCard = `
    <article class="bag-card bag-card--repair" aria-label="Место под будущую сумку">
      <div class="repair-banner">
        <span>coming soon</span>
        <h3>TEMPORARILY<br>UNDER RENOVATION</h3>
        <p>Another bag is getting ready to steal the spotlight.</p>
      </div>
    </article>
  `;

  bagsGrid.innerHTML = bagCards + repairCard;
}

function openBag(bag) {
  if (!modal) return;
  modalTitle.textContent = bag.title;
  modalStatus.textContent = bag.status;
  modalDescription.textContent = bag.description;
  modalPrice.textContent = bag.price;
  modalMaterials.textContent = bag.materials;
  modalSize.textContent = bag.size;
  modalMainPhoto.src = bag.photos[0];
  modalMainPhoto.alt = bag.title;

  modalThumbs.innerHTML = bag.photos.map((photo, index) => `
    <button class="thumb ${index === 0 ? "active" : ""}" type="button" data-photo="${photo}" aria-label="Фото ${index + 1}">
      <img src="${photo}" alt="${bag.title}, фото ${index + 1}" loading="lazy" decoding="async" />
    </button>
  `).join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function startHeroCarousel() {
  if (!heroCarouselImage) return;

  const gallery = bags.map((bag) => ({
    src: bag.photos[0],
    alt: `Поясная сумка baggots ${bag.title}`
  }));

  let current = 0;
  const switchImage = () => {
    current = (current + 1) % gallery.length;
    heroCarouselImage.classList.add("is-fading");

    setTimeout(() => {
      heroCarouselImage.src = gallery[current].src;
      heroCarouselImage.alt = gallery[current].alt;
      heroCarouselImage.classList.remove("is-fading");
    }, 220);
  };

  setInterval(switchImage, 3200);
}

renderCards();
startHeroCarousel();

if (bagsGrid) {
  bagsGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-bag-id]");
    if (!card) return;
    const bag = bags.find((item) => item.id === card.dataset.bagId);
    if (bag) openBag(bag);
  });

  bagsGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const card = event.target.closest("[data-bag-id]");
    if (!card) return;
    const bag = bags.find((item) => item.id === card.dataset.bagId);
    if (bag) openBag(bag);
  });
}

const labCard = document.querySelector("[data-open-lab]");
if (labCard) {
  labCard.addEventListener("click", () => openBag(lab));
  labCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openBag(lab);
  });
}

if (closeModal) closeModal.addEventListener("click", hideModal);
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideModal();
  });
}
if (modalThumbs) {
  modalThumbs.addEventListener("click", (event) => {
    const thumb = event.target.closest(".thumb");
    if (!thumb) return;
    modalMainPhoto.src = thumb.dataset.photo;
    modalThumbs.querySelectorAll(".thumb").forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
