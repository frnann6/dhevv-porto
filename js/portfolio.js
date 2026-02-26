const portfolioData = {
  humanity: {
    folder: "humanity_photography",
    images: [
      "human1.6.webp",
      "human1.0.webp",
      "human1.1.webp",
      "human1.2.webp",
      "human1.3.webp",
      "human1.4.webp",
      "human1.5.webp",
    ],
  },

  sports: {
    folder: "sports_photography",
    images: [
      "human1.7.webp",
      "human2.0.webp",
      "human1.8.webp",
      "human1.9.webp",
    ],
  },

  architectural: {
    folder: "architectural_photography",
    images: [
      "architectural1.0.webp",
      "architectural1.1.webp",
      "architectural1.2.webp",
      "architectural1.3.webp",
      "architectural1.4.webp",
      "architectural1.5.webp",
    ],
  },

  food: {
    folder: "food_photography",
    images: ["food1.0.webp", "food1.1.webp"],
  },

  // Design Graphics
  menu: {
    folder: "design_graphics",
    images: ["menu_cafe_1.webp", "menu_cafe_2.webp"],
  },

  pricelist: {
    folder: "design_graphics",
    images: [
      "tegu_pricelist.webp",
      "camping_pricelist.webp",
      "gallery_camp_tegu.webp",
      "venue.webp",
      "wedding_1.webp",
      "wedding_2.webp",
    ],
  },

  menu2: {
    folder: "design_graphics",
    images: [
      "design1.0.webp",
      "design1.1.webp",
      "design1.4.webp",
      "design1.5.webp",
      "design1.3.webp",
    ],
  },
};

function renderAllGalleries() {
  Object.keys(portfolioData).forEach((category) => {
    const container = document.getElementById(`gallery-${category}`);
    if (!container) return;

    const data = portfolioData[category];

    data.images.forEach((image) => {
      const img = document.createElement("img");

      img.src = `assets/${data.folder}/${image}`;
      img.classList.add("portfolio-img");

      img.setAttribute("data-bs-toggle", "modal");
      img.setAttribute("data-bs-target", "#imageModal");
      img.setAttribute("data-img", `assets/${data.folder}/${image}`);

      container.appendChild(img);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderAllGalleries();
});
