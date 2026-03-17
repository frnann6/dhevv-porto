document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".portfolio-category");
  const paginationContainer = document.getElementById("portfolio-pagination");

  const designContainer = document.getElementById("design_graphics");
  const designDesc = `
   <h6 class="fw-semibold playfair text-start mb-4">| Design Graphics</h6>
    <h3 class="playfair">Designed with Purpose</h3>
    <p class="text-muted text-start mt-4 w-50 desc-photo">
        A selection of design works focused on clarity, balance, and visual impact. Each piece is created with intention, aligning ideas with strong visual execution.
    </p>
  `;

  const itemsPerPage = 2;
  let currentPage = 1;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  function showPage(page) {
    categories.forEach((cat, index) => {
      cat.style.display = "none";
      if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
        cat.style.display = "block";
      }
    });
  }

  function renderPagination() {
    paginationContainer.innerHTML = "";

    const maxVisible = 3;

    // hitung range angka
    let start = Math.max(1, currentPage - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    // tombol back
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "&laquo;";
    backBtn.className = "btn btn-outline-secondary mx-1";
    backBtn.disabled = currentPage === 1;
    backBtn.onclick = () => {
      currentPage--;
      updatePagination();
    };
    paginationContainer.appendChild(backBtn);

    // angka halaman
    for (let i = start; i <= end; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className =
        "btn mx-1 " +
        (i === currentPage ? "btn-dark" : "btn-outline-secondary");

      btn.onclick = () => {
        currentPage = i;
        updatePagination();
      };

      paginationContainer.appendChild(btn);
    }

    // tombol next
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "&raquo;";
    nextBtn.className = "btn btn-outline-secondary mx-1";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
      currentPage++;
      updatePagination();
    };
    paginationContainer.appendChild(nextBtn);
  }

  const port_header = document.getElementById("portfolio_header");

    // Tampilkan deskripsi hanya di halaman 3
    if (currentPage === 3) {
      designContainer.innerHTML = designDesc;
    } else {
      designContainer.innerHTML = "";
    }

    function updatePagination(scrollTop = true) {
      showPage(currentPage);
      renderPagination();

      if (port_header) {
        port_header.style.display = currentPage === 1 ? "block" : "none";
      }

      if (designContainer) {
        designContainer.innerHTML = currentPage === 3 ? designDesc : "";
      }

      if (scrollTop) {
        window.scrollTo({ top: 0 });
      }
    }
    updatePagination();
  

  // Mapping kategori ke halaman
  const sectionPageMap = {
    portfolio_header: 1,
    photography: 1,
    humanity_page: 1,
    sports_page: 1,
    architectural_page: 2,
    food_page: 2,
    design_graphics: 3,
    menu_page: 3,
  };

  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);

      if (sectionPageMap[targetId]) {
        e.preventDefault();

        currentPage = sectionPageMap[targetId];
        updatePagination();

        setTimeout(() => {
          document
            .getElementById(targetId)
            .scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
  });

  // cek hash saat halaman dibuka
  const hash = window.location.hash.replace("#", "");

  if (sectionPageMap[hash]) {
    currentPage = sectionPageMap[hash];
  }

  updatePagination();

  // scroll setelah pagination selesai
  if (hash) {
    setTimeout(() => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
});
