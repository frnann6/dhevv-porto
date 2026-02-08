const categories = document.querySelectorAll(".portfolio-category");

const perPage = 2;
let currentPage = 1;

function showPage(page) {
  currentPage = page;

  categories.forEach((cat) => (cat.style.display = "none"));

  const start = (page - 1) * perPage;
  const end = start + perPage;

  for (let i = start; i < end && i < categories.length; i++) {
    categories[i].style.display = "block";
  }

  renderPagination();
}

// Button
function renderPagination() {
  const container = document.getElementById("portfolio-pagination");
  container.innerHTML = "";
}
