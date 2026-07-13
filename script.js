let colors = [
  {
    "name": "brick red",
    "value": "#8f1d1d",
    "soft": "rgba(143,29,29,0.50)"
  },
  {
    "name": "deep green",
    "value": "#244d3b",
    "soft": "rgba(36,77,59,0.49)"
  },
  {
    "name": "mineral blue",
    "value": "#315b78",
    "soft": "rgba(49,91,120,0.49)"
  },
  {
    "name": "ochre",
    "value": "#b26a26",
    "soft": "rgba(178,106,38,0.49)"
  },
  {
    "name": "graphite",
    "value": "#282828",
    "soft": "rgba(40,40,40,0.43)"
  },
  {
    "name": "clay rose",
    "value": "#a65f54",
    "soft": "rgba(166,95,84,0.49)"
  },
  {
    "name": "warm gray",
    "value": "#8a8780",
    "soft": "rgba(138,135,128,0.48)"
  },
  {
    "name": "white",
    "value": "#fffefa",
    "soft": "rgba(255,255,255,0.57)"
  },
  {
    "name": "bronze",
    "value": "#8c6239",
    "soft": "rgba(140,98,57,0.50)"
  },
  {
    "name": "black",
    "value": "#050505",
    "soft": "rgba(5,5,5,0.41)"
  }
];

let materials = [
  {
    "name": "brick",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/brick.jpg",
    "texture": "url('assets/materials/brick.jpg')"
  },
  {
    "name": "concrete",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/concrete.jpg",
    "texture": "url('assets/materials/concrete.jpg')"
  },
  {
    "name": "glass",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/glass.jpg",
    "texture": "url('assets/materials/glass.jpg')"
  },
  {
    "name": "metal",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/metal.jpg",
    "texture": "url('assets/materials/metal.jpg')"
  },
  {
    "name": "stone",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/stone.jpg",
    "texture": "url('assets/materials/stone.jpg')"
  },
  {
    "name": "stucco",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/stucco.jpg",
    "texture": "url('assets/materials/stucco.jpg')"
  },
  {
    "name": "terracotta",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/terracotta.jpg",
    "texture": "url('assets/materials/terracotta.jpg')"
  },
  {
    "name": "tile",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/tile.jpg",
    "texture": "url('assets/materials/tile.jpg')"
  },
  {
    "name": "wood",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/wood.jpg",
    "texture": "url('assets/materials/wood.jpg')"
  },
  {
    "name": "plastic",
    "a": "#c8c2b6",
    "b": "#77736a",
    "c": "rgba(255,255,255,0.3)",
    "image": "assets/materials/plastic.jpg",
    "texture": "url('assets/materials/plastic.jpg')"
  }
];

const fallbackContent = {
  "ui": {
    "chooseColor": "choose your color",
    "chooseMaterial": "choose your material",
    "newMaterial": "new material",
    "homeLabel": "home",
    "nav": {
      "about": "about",
      "people": "people",
      "projects": "project",
      "contact": "contact"
    },
    "skip": "skip",
    "backToProjects": "back to projects",
    "previous": "previous",
    "next": "next"
  },
  "about": {
    "title": "about",
    "lead": "tbd",
    "cards": [
      {
        "title": "tbd",
        "text": "tbd"
      }
    ]
  },
  "people": {
    "title": "people",
    "lead": "tbd",
    "people": [
      {
        "position": "tbd",
        "name": "tbd",
        "romanName": "tbd",
        "credentials": "tbd",
        "groups": [
          {
            "title": "tbd",
            "items": [
              "tbd"
            ]
          }
        ]
      }
    ]
  },
  "projects": {
    "title": "project",
    "lead": "Selected works can be replaced here as the studio grows.",
    "projects": [
      {
        "title": "House with a Narrow Garden",
        "year": "2026",
        "location": "Seoul",
        "description": "A compact house organized around a long planted edge.",
        "image": "",
        "id": "project-01",
        "details": "A compact house organized around a long planted edge.\n\nAdd the full project story, site context, design process, materials, and construction notes here.",
        "images": []
      },
      {
        "title": "Material Room",
        "year": "2025",
        "location": "Gyeonggi",
        "description": "Interior renovation focused on texture, storage, and warm light.",
        "image": "",
        "id": "project-02",
        "details": "Interior renovation focused on texture, storage, and warm light.\n\nAdd the full project story, site context, design process, materials, and construction notes here.",
        "images": []
      },
      {
        "title": "Small Corner Building",
        "year": "2024",
        "location": "Incheon",
        "description": "A mixed-use corner volume with a restrained street face.",
        "image": "",
        "id": "project-03",
        "details": "A mixed-use corner volume with a restrained street face.\n\nAdd the full project story, site context, design process, materials, and construction notes here.",
        "images": []
      }
    ]
  },
  "contact": {
    "title": "contact",
    "lead": "For project inquiries, collaborations, or studio visits.",
    "contact": [
      {
        "title": "email",
        "text": "hello@lltb.archi"
      },
      {
        "title": "instagram",
        "text": "@lltb.architects"
      },
      {
        "title": "office",
        "text": "Seoul, Korea"
      }
    ]
  }
};

const neutralColor = { name: "white", value: "#fffefa", soft: "rgba(255,255,255,0)" };

let selectedColor = colors[0];
let selectedMaterial = materials[0];
let content = fallbackContent;
let currentProjectIndex = 0;
let currentGalleryIndex = 0;

const site = document.querySelector(".site");
const colorGrid = document.querySelector("#colorGrid");
const materialGrid = document.querySelector("#materialGrid");
const builder = document.querySelector(".builder");
const colorPanel = document.querySelector('[data-step="color"]');
const materialPanel = document.querySelector('[data-step="material"]');
const logoStage = document.querySelector(".logo-stage");
const portal = document.querySelector(".portal");
const contentView = document.querySelector(".content-view");
const contentTitle = document.querySelector("#contentTitle");
const contentBody = document.querySelector("#contentBody");
const railButtons = [...document.querySelectorAll(".section-rail button[data-section]")];
const remixButton = document.querySelector("#remixButton");
const homeRemixButton = document.querySelector("#homeRemixButton");
const homeButton = document.querySelector("#homeButton");
const skipButton = document.querySelector("#skipButton");
const lltbLogo = document.querySelector("#lltbLogo");
const logoFallbackCanvas = document.querySelector("#logoFallbackCanvas");
let logoFallbackDrawId = 0;

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cssUrl(value = "") {
  return String(value).replace(/\\/g, "/").replace(/'/g, "\\'").replace(/\"/g, "\\\"");
}

function normalizeColor(color) {
  return {
    name: color.name,
    value: color.value,
    soft: color.soft || `${color.value}55`
  };
}

function normalizeMaterial(material) {
  const image = material.image || "";
  return {
    name: material.name,
    image,
    a: material.a || "#c8c2b6",
    b: material.b || "#77736a",
    c: material.c || "rgba(255,255,255,0.3)",
    texture: material.texture || (image ? `url("${image}")` : "linear-gradient(135deg, #c8c2b6, #77736a)")
  };
}


function loadImageForCanvas(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawCover(ctx, image, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;
  ctx.drawImage(image, x, y, drawWidth, drawHeight);
}

function logoOverlayColor(color) {
  const soft = color.soft || "rgba(255,255,255,0)";
  const match = soft.match(/rgba?\(([^)]+)\)/i);
  if (match) return soft;
  return color.value || "rgba(255,255,255,0)";
}

async function renderLogoFallback() {
  if (!logoFallbackCanvas) return;
  const drawId = ++logoFallbackDrawId;
  const width = logoFallbackCanvas.width || 230;
  const height = logoFallbackCanvas.height || 132;
  const work = document.createElement("canvas");
  work.width = width;
  work.height = height;
  const ctx = work.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, selectedMaterial.a || "#c8c2b6");
  gradient.addColorStop(1, selectedMaterial.b || "#77736a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  try {
    if (selectedMaterial.image) {
      const texture = await loadImageForCanvas(selectedMaterial.image);
      if (drawId !== logoFallbackDrawId) return;
      drawCover(ctx, texture, width, height);
    }
  } catch {}

  ctx.fillStyle = logoOverlayColor(selectedColor);
  ctx.fillRect(0, 0, width, height);

  try {
    const mask = await loadImageForCanvas("assets/logo-homepage-02-fill-mask.png");
    if (drawId !== logoFallbackDrawId) return;
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(mask, 0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";
  } catch {}

  if (drawId !== logoFallbackDrawId) return;
  const finalCtx = logoFallbackCanvas.getContext("2d");
  finalCtx.clearRect(0, 0, width, height);
  finalCtx.drawImage(work, 0, 0);
}

function textureValue(material) {
  return `${material.texture}, linear-gradient(135deg, ${material.a}, ${material.b})`;
}

function applyMaterial() {
  site.style.setProperty("--chosen-color", selectedColor.value);
  site.style.setProperty("--chosen-color-soft", selectedColor.soft);
  site.style.setProperty("--texture-a", selectedMaterial.a);
  site.style.setProperty("--texture-b", selectedMaterial.b);
  site.style.setProperty("--texture-c", selectedMaterial.c);
  site.style.setProperty("--active-texture", textureValue(selectedMaterial));
  renderLogoFallback();
}

function routeNameForSection(section) {
  return section === "projects" ? "project" : section;
}

function sectionForRouteName(page) {
  if (page === "project") return "projects";
  if (["about", "people", "projects", "contact"].includes(page)) return page;
  return null;
}

function slugify(value = "") {
  return String(value).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "project";
}

function projectSlug(project, index) {
  return project.id || slugify(project.title) || "project-" + (index + 1);
}

function findProjectIndex(slug) {
  const projects = (content.projects || fallbackContent.projects).projects || [];
  const found = projects.findIndex((project, index) => projectSlug(project, index) === slug);
  return found >= 0 ? found : 0;
}

function setRoute(params, replace = false) {
  const url = new URL(window.location.href);
  url.search = "";
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
  });
  history[replace ? "replaceState" : "pushState"](params, "", url);
}

function currentRoute() {
  const params = new URLSearchParams(window.location.search);
  return {
    page: params.get("page"),
    project: params.get("project"),
    image: Number(params.get("image") || 0)
  };
}

function showLogoStage(options = {}) {
  applyMaterial();
  builder.classList.add("is-hidden");
  contentView.classList.add("is-hidden");
  logoStage.classList.remove("is-hidden", "is-entering", "is-slide-up");
  portal.classList.remove("is-active", "is-diving");
  portal.setAttribute("aria-hidden", "true");
  if (options.record !== false) setRoute({ page: "home" }, options.replace);
  window.scrollTo(0, 0);
}

function showMaterialBuilder(options = {}) {
  contentView.classList.add("is-hidden");
  logoStage.classList.add("is-hidden");
  builder.classList.remove("is-hidden", "is-material-step", "is-slide-up");
  colorPanel.classList.remove("is-hidden");
  materialPanel.classList.remove("is-hidden");
  if (options.record !== false) setRoute({ page: "builder" }, options.replace);
  window.scrollTo(0, 0);
}

function makeButton(item, type) {
  const button = document.createElement("button");
  button.className = `swatch ${type === "material" ? "material-card" : ""}`;
  button.type = "button";
  button.style.setProperty("--swatch", item.value || textureValue(item));
  if (item.image) button.style.setProperty("--image", `url("${item.image}")`);
  if (type === "material") {
    button.style.setProperty("--texture", item.texture);
    button.style.setProperty("--texture-a", item.a);
    button.style.setProperty("--texture-b", item.b);
  }
  button.innerHTML = `<span>${escapeHtml(item.name)}</span>`;
  button.addEventListener("click", () => {
    if (type === "color") {
      selectedColor = item;
      builder.classList.add("is-material-step");
      return;
    }

    selectedMaterial = item;
    showLogoStage();
  });
  return button;
}

function renderChoices() {
  colorGrid.innerHTML = "";
  materialGrid.innerHTML = "";
  colors.forEach((color) => colorGrid.appendChild(makeButton(color, "color")));
  materials.forEach((material) => materialGrid.appendChild(makeButton(material, "material")));
}

function applyEditableText() {
  const ui = content.ui || fallbackContent.ui || {};
  const nav = ui.nav || {};
  const colorTitle = document.querySelector('[data-step="color"] h1');
  const materialTitle = document.querySelector('[data-step="material"] h1');

  if (colorTitle) colorTitle.textContent = ui.chooseColor || "choose your color";
  if (materialTitle) materialTitle.textContent = ui.chooseMaterial || "choose your material";
  if (skipButton) skipButton.textContent = ui.skip || "skip";
  if (homeButton) homeButton.setAttribute("aria-label", ui.homeLabel || "home");

  document.querySelectorAll("#remixButton, #homeRemixButton").forEach((button) => {
    const label = ui.newMaterial || "new material";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    if (!button.querySelector(".new-diagram")) {
      button.innerHTML = '<span class="diagram-icon new-diagram" aria-hidden="true"></span><span class="sr-only"></span>';
    }
    const hiddenLabel = button.querySelector(".sr-only");
    if (hiddenLabel) hiddenLabel.textContent = label;
  });

  document.querySelectorAll(".logo-hit[data-section]").forEach((button) => {
    const label = nav[button.dataset.section] || button.dataset.section;
    const span = button.querySelector("span");
    if (span) span.textContent = label;
    button.setAttribute("aria-label", label);
  });

  document.querySelectorAll(".section-rail button[data-section]").forEach((button) => {
    button.setAttribute("aria-label", nav[button.dataset.section] || button.dataset.section);
  });
}

function enterSection(section, options = {}) {
  renderContent(section);
  builder.classList.add("is-hidden");
  logoStage.classList.add("is-hidden");
  contentView.classList.remove("is-hidden", "is-entering", "is-slide-up");
  portal.classList.remove("is-active", "is-diving");
  portal.setAttribute("aria-hidden", "true");
  if (options.record !== false) setRoute({ page: routeNameForSection(section) }, options.replace);
  window.scrollTo(0, 0);
}

function setActiveRail(section) {
  railButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === section);
  });
}

function renderContent(section) {
  const data = content[section] || fallbackContent[section];
  contentTitle.textContent = data.title;
  setActiveRail(section);

  if (section === "about") {
    contentBody.innerHTML = `
      <p class="lead about-lead">${escapeHtml(data.lead)}</p>
      <div class="about-flow">
        ${data.cards.map((card) => `
          <section class="about-section">
            <h3>${escapeHtml(card.title.replace(/^\d+\.\s*/, ""))}</h3>
            <p>${escapeHtml(card.text)}</p>
          </section>
        `).join("")}
      </div>
    `;
  }

  if (section === "people") {
    const people = Array.isArray(data.people) ? data.people : [];
    contentBody.innerHTML = `
      ${data.lead ? `<p class="lead">${escapeHtml(data.lead)}</p>` : ""}
      <div class="people-flow">
        ${people.map((person) => `
          <section class="person-profile">
            <header class="person-profile-head">
              <p>${escapeHtml(person.position || person.role || "")}</p>
              <h3>${escapeHtml(person.name || "")}</h3>
              ${person.romanName ? `<p class="person-roman">${escapeHtml(person.romanName)}</p>` : ""}
              ${person.credentials ? `<p class="person-credentials">${escapeHtml(person.credentials)}</p>` : ""}
            </header>
            ${Array.isArray(person.groups) && person.groups.length ? `
              <div class="person-history">
                ${person.groups.map((group) => `
                  <section class="person-history-group">
                    <h4>${escapeHtml(group.title)}</h4>
                    <ul>
                      ${(group.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                    </ul>
                  </section>
                `).join("")}
              </div>
            ` : ""}
          </section>
        `).join("")}
      </div>
    `;
  }

  if (section === "projects") {
    contentBody.innerHTML = `
      <p class="lead">${escapeHtml(data.lead)}</p>
      <div class="project-grid">
        ${data.projects.map((project, index) => `
          <button class="project-card project-open" type="button" data-project-index="${index}">
            <div class="project-thumb" ${project.image ? `style="--image: url('${cssUrl(project.image)}')"` : ""}></div>
            <p class="project-meta">${escapeHtml(project.year)} / ${escapeHtml(project.location)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <span class="project-link">view project</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  if (section === "contact") {
    contentBody.innerHTML = `
      <p class="lead">${escapeHtml(data.lead)}</p>
      <div class="contact-grid">
        ${data.contact.map((item) => `
          <section class="contact-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </section>
        `).join("")}
      </div>
    `;
  }
}

function projectImages(project) {
  if (Array.isArray(project.images) && project.images.length) return project.images;
  if (project.image) return [project.image];
  return [];
}

function renderProjectDetail(index, imageIndex = 0, options = {}) {
  const data = content.projects || fallbackContent.projects;
  const project = data.projects[index];
  if (!project) return;

  const images = projectImages(project);
  const safeIndex = images.length ? (imageIndex + images.length) % images.length : 0;
  currentProjectIndex = index;
  currentGalleryIndex = safeIndex;
  contentTitle.textContent = project.title;
  setActiveRail("projects");

  const imageStyle = images.length ? `style="--image: url('${cssUrl(images[safeIndex])}')"` : "";
  const counter = images.length ? `${safeIndex + 1} / ${images.length}` : "0 / 0";
  const ui = content.ui || fallbackContent.ui || {};

  contentBody.innerHTML = `
    <section class="project-detail">
      <button class="back-button arrow-button" type="button" data-project-back aria-label="${escapeHtml(ui.backToProjects || "back to projects")}" title="${escapeHtml(ui.backToProjects || "back to projects")}"><span class="arrow-icon arrow-up" aria-hidden="true"></span></button>
      <div class="project-gallery">
        <div class="project-gallery-image" ${imageStyle}></div>
        <div class="gallery-controls">
          <button class="gallery-arrow arrow-button" type="button" data-gallery-prev aria-label="${escapeHtml(ui.previous || "previous")}" title="${escapeHtml(ui.previous || "previous")}"><span class="arrow-icon arrow-left" aria-hidden="true"></span></button>
          <span>${escapeHtml(counter)}</span>
          <button class="gallery-arrow arrow-button" type="button" data-gallery-next aria-label="${escapeHtml(ui.next || "next")}" title="${escapeHtml(ui.next || "next")}"><span class="arrow-icon arrow-right" aria-hidden="true"></span></button>
        </div>
      </div>
      <div class="project-detail-copy">
        <p class="project-meta">${escapeHtml(project.year)} / ${escapeHtml(project.location)}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.details || project.description)}</p>
      </div>
    </section>
  `;
  if (options.record !== false) setRoute({ page: "project-detail", project: projectSlug(project, index), image: safeIndex }, options.replace);
  window.scrollTo(0, 0);
}

function applyRouteFromUrl() {
  const route = currentRoute();
  if (!route.page) {
    showLogoStage({ record: false });
    return;
  }

  if (route.page === "home") {
    showLogoStage({ record: false });
    return;
  }

  if (route.page === "builder") {
    showMaterialBuilder({ record: false });
    return;
  }

  if (route.page === "project-detail") {
    enterSection("projects", { record: false });
    renderProjectDetail(findProjectIndex(route.project), route.image || 0, { record: false });
    return;
  }

  const section = sectionForRouteName(route.page);
  if (section) enterSection(section, { record: false });
}

async function loadContent() {
  try {
    const response = await fetch("content.json", { cache: "no-store" });
    if (response.ok) {
      content = await response.json();
    }
  } catch {
    content = fallbackContent;
  }
}

async function loadOptions() {
  try {
    const colorResponse = await fetch("assets/colors/colors.json", { cache: "no-store" });
    if (colorResponse.ok) {
      const loadedColors = await colorResponse.json();
      colors = loadedColors.map(normalizeColor);
    }
  } catch {}

  try {
    const materialResponse = await fetch("assets/materials/materials.json", { cache: "no-store" });
    if (materialResponse.ok) {
      const loadedMaterials = await materialResponse.json();
      materials = loadedMaterials.map(normalizeMaterial);
    }
  } catch {}

  selectedColor = colors[0];
  selectedMaterial = materials[0];
}

function setLogoHover(section) {
  lltbLogo.classList.remove("is-hovering-about", "is-hovering-people", "is-hovering-projects", "is-hovering-contact");
  if (section) {
    lltbLogo.classList.add(`is-hovering-${section}`);
  }
}

document.querySelectorAll(".logo-hit").forEach((button) => {
  button.addEventListener("click", () => enterSection(button.dataset.section));
  button.addEventListener("mouseenter", () => setLogoHover(button.dataset.section));
  button.addEventListener("mouseleave", () => setLogoHover(null));
  button.addEventListener("focus", () => setLogoHover(button.dataset.section));
  button.addEventListener("blur", () => setLogoHover(null));
});

railButtons.forEach((button) => {
  button.addEventListener("click", () => enterSection(button.dataset.section));
});

contentBody.addEventListener("click", (event) => {
  const projectOpen = event.target.closest("[data-project-index]");
  if (projectOpen) {
    renderProjectDetail(Number(projectOpen.dataset.projectIndex), 0);
    return;
  }

  if (event.target.closest("[data-project-back]")) {
    enterSection("projects", { replace: true });
    return;
  }

  if (event.target.closest("[data-gallery-prev]")) {
    renderProjectDetail(currentProjectIndex, currentGalleryIndex - 1, { replace: true });
    return;
  }

  if (event.target.closest("[data-gallery-next]")) {
    renderProjectDetail(currentProjectIndex, currentGalleryIndex + 1, { replace: true });
  }
});

remixButton.addEventListener("click", showMaterialBuilder);
homeRemixButton.addEventListener("click", showMaterialBuilder);
skipButton.addEventListener("click", () => {
  selectedColor = neutralColor;
  selectedMaterial = materials[0];
  showLogoStage();
});

homeButton.addEventListener("click", () => showLogoStage());
window.addEventListener("popstate", applyRouteFromUrl);

async function init() {
  await Promise.all([loadOptions(), loadContent()]);
  applyEditableText();
  renderChoices();
  applyMaterial();
  applyRouteFromUrl();
}

init();