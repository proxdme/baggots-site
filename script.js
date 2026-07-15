const contacts = {
  vk: "https://vk.com/baggots",
  instagram: "https://www.instagram.com/baggots_shop/",
  max: "#",
  threads: "https://www.threads.com/@baggots_shop"
};

const bags = [
  {
    id: "red-zip", title: "Red Zip",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Чёрная сумка с красными молниями. Строгая, но не скучная.",
      description: "Спокойная чёрная база, яркие красные молнии и немного уличного характера. Подходит для города, прогулок и ситуаций, где карманы уже сдались. Ремень регулируется: можно носить на поясе или как кросс-боди.",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "Black with red zippers. Serious enough, never boring.",
      description: "A calm black base, vivid red zippers and a little street character. Built for city walks and those moments when your pockets officially resign. The adjustable strap works around the waist or crossbody.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/red-zip-1.webp", "images/red-zip-2.svg", "images/red-zip-3.svg", "images/red-zip-4.svg", "images/red-zip-5.svg"]
  },
  {
    id: "kfc-goat", title: "KFC Goat",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Бежевая сумка с красным принтом. Вещь, которая сама начинает разговор.",
      description: "Сумка с заметным красным принтом и мягкой бежевой базой. Немного рекламы, немного иронии, много характера. Основное отделение закрывается на молнию, есть внешний карман для мелочей.",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "Beige with a red print. The kind of bag that starts conversations by itself.",
      description: "A bold red print on a soft beige base: part advertising relic, part joke, all character. The main compartment closes with a zipper, with an outer pocket for smaller essentials.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/kfc-goat-1.webp", "images/kfc-goat-2.svg", "images/kfc-goat-3.svg", "images/kfc-goat-4.svg", "images/kfc-goat-5.svg"]
  },
  {
    id: "mystic-pocket", title: "Mystic Pocket",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Чёрная сумка с символами: немного эзотерики, немного улицы.",
      description: "Принт с символами, чёрная база и спокойная форма. Для тех, кто любит детали, которые можно рассматривать дольше трёх секунд.",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "Black symbols, quiet shape: a little mysticism, a little street.",
      description: "Symbolic print, black base and a clean shape. Made for people who enjoy details worth staring at for more than three seconds.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/mystic-pocket-1.webp", "images/mystic-pocket-2.svg", "images/mystic-pocket-3.svg", "images/mystic-pocket-4.svg", "images/mystic-pocket-5.svg"]
  },
  {
    id: "yellow-line", title: "Yellow Line",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Чёрная сумка с жёлтыми молниями. Простая форма, яркий акцент.",
      description: "Чёрная основа и жёлтые молнии — понятная городская сумка, но с заметным настроением. Без лишнего шума, но не без шалости.",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "Black bag, yellow zippers. Simple shape, loud detail.",
      description: "A black base with yellow zippers: an easy city bag with a visible mood. No unnecessary noise, but definitely not completely innocent.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/yellow-line-1.webp", "images/yellow-line-2.svg", "images/yellow-line-3.svg", "images/yellow-line-4.svg", "images/yellow-line-5.svg"]
  },
  {
    id: "london-mess", title: "London Mess",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Британские флаги, газетный хаос и лёгкое чувство приключения.",
      description: "Сумка с британскими флагами и газетным принтом. Очень в духе «я вышел за хлебом и случайно стал заметным».",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "British flags, newspaper chaos and a mild urge to go somewhere.",
      description: "British flags and newspaper print, with strong “I only went out for bread and somehow became the main character” energy.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/london-mess-1.webp", "images/london-mess-2.svg", "images/london-mess-3.svg", "images/london-mess-4.svg", "images/london-mess-5.svg"]
  },
  {
    id: "craft-one", title: "Craft One",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Крафтовая коричневая фактура. Спокойная, тёплая, немного походная.",
      description: "Коричневая крафтовая фактура, тёплый оттенок и спокойный вид. Сумка будто уже была в маленьком приключении и не против ещё одного.",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "Warm brown craft texture. Calm, cosy and slightly outdoorsy.",
      description: "Brown craft texture, warm tone and a relaxed look. It feels as if this bag has already survived one small adventure and would happily accept another.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/craft-one-1.webp", "images/craft-one-2.svg", "images/craft-one-3.svg", "images/craft-one-4.svg", "images/craft-one-5.svg"]
  },
  {
    id: "coffee-run", title: "Coffee Run",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Сумка из кофейной упаковки. Upcycling без занудства.",
      description: "Глянцевый кофейный принт, красный ремень и история материала, которому дали вторую жизнь. Подойдёт тем, кто любит вещи с прошлым и будущим.",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "A bag made from coffee packaging. Upcycling without the lecture.",
      description: "Glossy coffee print, red strap and a material with both a past and a future. For people who like their objects to arrive with a story.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/coffee-run-1.webp", "images/coffee-run-2.svg", "images/coffee-run-3.svg", "images/coffee-run-4.svg", "images/coffee-run-5.svg"]
  },
  {
    id: "denim-pocket", title: "Denim Pocket",
    ru: {
      status: "в наличии", price: "по запросу",
      short: "Джинсовая сумка с внешним карманом. Дружелюбная, но с характером.",
      description: "Деним, жёлтые молнии и внешний карман. Самая понятная из компании, но козлик всё равно где-то рядом.",
      materials: "экокожа, Oxford 600D, полипропилен, полиэстер / по факту экземпляра",
      size: "примерно 300 × 150 × 70 мм"
    },
    en: {
      status: "available", price: "on request",
      short: "Denim with an outer pocket. Friendly, but not without opinions.",
      description: "Denim, yellow zippers and an outer pocket. Probably the most straightforward member of the group — although the goat is still nearby.",
      materials: "eco-leather, 600D Oxford fabric, polypropylene, polyester / varies by piece",
      size: "approx. 300 × 150 × 70 mm"
    },
    photos: ["images/denim-pocket-1.webp", "images/denim-pocket-2.svg", "images/denim-pocket-3.svg", "images/denim-pocket-4.svg", "images/denim-pocket-5.svg"]
  }
];

const useCases = [
  {
    id: "london-mess-outdoor", title: "London Mess",
    ru: {
      status: "пример использования", price: "не товарная карточка",
      description: "London Mess в реальной носке: в руках, кросс-боди, со спины и внутри. Здесь видно масштаб, посадку и то, как сумка ведёт себя не на белом фоне, а в жизни.",
      materials: "живые фото London Mess", size: "ракурсы, носка, детали"
    },
    en: {
      status: "in action", price: "not a product listing",
      description: "London Mess in real use: carried by hand, crossbody, from the back and inside. A proper look at scale, fit and how the bag behaves away from the white studio background.",
      materials: "real-life London Mess photos", size: "fit, angles and details"
    },
    photos: ["images/outdoor/british-01.webp", "images/outdoor/british-02.webp", "images/outdoor/british-03.webp", "images/outdoor/british-04.webp", "images/outdoor/british-05.webp"]
  },
  {
    id: "denim-pocket-outdoor", title: "Denim Pocket",
    ru: {
      status: "пример использования", price: "не товарная карточка",
      description: "Denim Pocket в живой носке: крупный план, посадка на корпусе, детали и полезный объём. Спокойная джинсовая версия без лишнего шума, но со своим характером.",
      materials: "живые фото Denim Pocket", size: "ракурсы, носка, детали"
    },
    en: {
      status: "in action", price: "not a product listing",
      description: "Denim Pocket in real life: close-ups, on-body fit, details and useful capacity. A quiet denim version with no unnecessary noise and plenty of personality.",
      materials: "real-life Denim Pocket photos", size: "fit, angles and details"
    },
    photos: ["images/outdoor/denim-01.webp", "images/outdoor/denim-02.webp", "images/outdoor/inside-01.webp"]
  }
];

const labItems = [
  {
    id: "snake-bite", title: "Snake Bite",
    ru: {
      status: "prototype",
      price: "прототип Goat Lab",
      description: "Экспериментальная поясная сумка с фактурой под змеиную кожу, яркими жёлтыми молниями и контрастным ремнём. Заметная, цепкая и совсем не из тех вещей, которые тихо лежат в углу. Подходит для города, прогулок и случаев, когда хочется взять с собой только нужное — но сделать это с характером.",
      materials: "текстиль с принтом под змеиную кожу, молнии, стропа и фурнитура",
      size: "размер прототипа уточняется"
    },
    en: {
      status: "prototype",
      price: "Goat Lab prototype",
      description: "An experimental belt bag with a faux snake-skin texture, bright yellow zippers and a bold contrast strap. Sharp, eye-catching and absolutely not the kind of piece that quietly blends into the background. Made for city walks, everyday carry and moments when you want the essentials close — with a little attitude.",
      materials: "snake-effect printed textile, zippers, webbing and hardware",
      size: "prototype dimensions to be confirmed"
    },
    photos: ["images/snake-bite-1.png", "images/snake-bite-2.png"]
  },
  {
    id: "blue-canarinho", title: "Blue Canarinho",
    ru: {
      status: "prototype",
      price: "прототип Goat Lab",
      description: "Экспериментальная поясная сумка, посвящённая сборной Бразилии: синий корпус, яркий футбольный принт, чёрные молнии и настроение большого матча. Не сувенир с полки, а вещь, которая будто уже ждёт свистка и готова выйти на прогулку в стартовом составе.",
      materials: "текстиль с футбольным принтом, стропа, молнии и фурнитура",
      size: "размер прототипа уточняется"
    },
    en: {
      status: "prototype",
      price: "Goat Lab prototype",
      description: "An experimental belt bag dedicated to Brazil’s national team: blue body, loud football print, black zippers and proper match-day energy. Not a shelf souvenir — more like a small starting-lineup member ready for a walk.",
      materials: "football-print textile, webbing, zippers and hardware",
      size: "prototype dimensions to be confirmed"
    },
    photos: ["images/blue-canarinho-1.jpg"]
  },
  {
    id: "swiss-shadow", title: "Swiss Shadow",
    ru: {
      status: "prototype",
      price: "прототип Goat Lab",
      description: "Экспериментальная поясная сумка, посвящённая сборной Швейцарии: чёрная, сдержанная, практичная и почти подозрительно собранная. Без лишнего шума, но с тем самым характером baggots, который появляется, когда нейтральность решает выйти на поле.",
      materials: "чёрный текстиль, стропа, молнии и фурнитура",
      size: "размер прототипа уточняется"
    },
    en: {
      status: "prototype",
      price: "Goat Lab prototype",
      description: "An experimental belt bag dedicated to Switzerland’s national team: black, restrained, practical and almost suspiciously composed. Quiet on the surface, but with the baggots character that appears when neutrality decides to step onto the pitch.",
      materials: "black textile, webbing, zippers and hardware",
      size: "prototype dimensions to be confirmed"
    },
    photos: ["images/swiss-shadow-1.jpg"]
  }
];

const lab = labItems[0];

let currentLanguage = "ru";
let currentOpenItem = null;

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
const metaDescription = document.querySelector("#metaDescription");

function getNested(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

function detectInitialLanguage() {
  const saved = localStorage.getItem("baggots-language");
  if (saved === "ru" || saved === "en") return saved;
  const browserLanguage = (navigator.language || "en").toLowerCase();
  return browserLanguage.startsWith("ru") ? "ru" : "en";
}

function translatedItem(item) {
  return { ...item, ...(item[currentLanguage] || item.ru || {}) };
}

function applyStaticTranslations() {
  const dictionary = window.BAGGOTS_I18N[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.body.dataset.lang = currentLanguage;
  document.title = dictionary.meta.title;
  if (metaDescription) metaDescription.setAttribute("content", dictionary.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNested(dictionary, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getNested(dictionary, element.dataset.i18nHtml);
    if (typeof value === "string") element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = getNested(dictionary, element.dataset.i18nAria);
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-lang-card]").forEach((card) => {
    card.hidden = card.dataset.langCard !== currentLanguage;
  });
}

function renderCards() {
  if (!bagsGrid) return;
  const dictionary = window.BAGGOTS_I18N[currentLanguage];

  const bagCards = bags.map((bag) => {
    const item = translatedItem(bag);
    return `
      <article class="bag-card" data-bag-id="${bag.id}" tabindex="0" aria-label="${dictionary.modal.openCard} ${bag.title}">
        <div class="bag-photo"><img src="${bag.photos[0]}" alt="${bag.title}" loading="lazy" decoding="async" /></div>
        <div class="bag-info">
          <div class="bag-row">
            <h3>${bag.title}</h3>
            <span class="status">${item.status}</span>
          </div>
          <p>${item.short}</p>
        </div>
      </article>
    `;
  }).join("");

  const repairCard = `
    <article class="bag-card bag-card--repair" aria-label="${dictionary.repair.label}">
      <div class="repair-banner">
        <span>${dictionary.repair.badge}</span>
        <h3>${dictionary.repair.title}</h3>
        <p>${dictionary.repair.text}</p>
      </div>
    </article>
  `;

  bagsGrid.innerHTML = bagCards + repairCard;
}

function populateModal(itemSource) {
  const item = translatedItem(itemSource);
  const dictionary = window.BAGGOTS_I18N[currentLanguage];

  modalTitle.textContent = itemSource.title;
  modalStatus.textContent = item.status;
  modalDescription.textContent = item.description;
  modalPrice.textContent = item.price;
  modalMaterials.textContent = item.materials;
  modalSize.textContent = item.size;
  modalMainPhoto.src = itemSource.photos[0];
  modalMainPhoto.alt = itemSource.title;

  modalThumbs.innerHTML = itemSource.photos.map((photo, index) => `
    <button class="thumb ${index === 0 ? "active" : ""}" type="button" data-photo="${photo}" aria-label="${dictionary.modal.photo} ${index + 1}">
      <img src="${photo}" alt="${itemSource.title}, ${dictionary.modal.photo.toLowerCase()} ${index + 1}" loading="lazy" decoding="async" />
    </button>
  `).join("");
}

function openBag(itemSource) {
  if (!modal) return;
  currentOpenItem = itemSource;
  populateModal(itemSource);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentOpenItem = null;
}

function setLanguage(language, save = true) {
  currentLanguage = language === "ru" ? "ru" : "en";
  if (save) localStorage.setItem("baggots-language", currentLanguage);

  applyStaticTranslations();
  renderCards();

  if (currentOpenItem && modal?.classList.contains("open")) {
    populateModal(currentOpenItem);
  }

  if (heroCarouselImage) {
    heroCarouselImage.alt = currentLanguage === "ru"
      ? "Поясная сумка baggots"
      : "baggots belt bag";
  }
}

function startHeroCarousel() {
  if (!heroCarouselImage) return;
  const gallery = [
    ...bags.map((bag) => ({ src: bag.photos[0], title: bag.title })),
    ...labItems.flatMap((item) => item.photos.map((photo, index) => ({ src: photo, title: index === 0 ? item.title : `${item.title} ${index + 1}` })))
  ];
  let current = 0;

  setInterval(() => {
    current = (current + 1) % gallery.length;
    heroCarouselImage.classList.add("is-fading");
    setTimeout(() => {
      heroCarouselImage.src = gallery[current].src;
      heroCarouselImage.alt = currentLanguage === "ru"
        ? `Поясная сумка baggots ${gallery[current].title}`
        : `baggots belt bag ${gallery[current].title}`;
      heroCarouselImage.classList.remove("is-fading");
    }, 220);
  }, 3200);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

if (bagsGrid) {
  bagsGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-bag-id]");
    if (!card) return;
    const bag = bags.find((item) => item.id === card.dataset.bagId);
    if (bag) openBag(bag);
  });

  bagsGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-bag-id]");
    if (!card) return;
    event.preventDefault();
    const bag = bags.find((item) => item.id === card.dataset.bagId);
    if (bag) openBag(bag);
  });
}

document.querySelectorAll("[data-use-case-id]").forEach((card) => {
  card.addEventListener("click", () => {
    const item = useCases.find((useCase) => useCase.id === card.dataset.useCaseId);
    if (item) openBag(item);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    const item = useCases.find((useCase) => useCase.id === card.dataset.useCaseId);
    if (item) openBag(item);
  });
});

document.querySelectorAll("[data-lab-id]").forEach((card) => {
  const openLabItem = () => {
    const item = labItems.find((labItem) => labItem.id === card.dataset.labId);
    if (item) openBag(item);
  };

  card.addEventListener("click", openLabItem);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLabItem();
    }
  });
});

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

setLanguage(detectInitialLanguage(), false);
startHeroCarousel();
