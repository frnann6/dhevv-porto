// portfolio images
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("portfolio-img")) {
    document.getElementById("portfolioModalImg").src = e.target.src;

    new bootstrap.Modal(document.getElementById("portfolioModal")).show();
  }
});

// Gambar profile navbar
const profileImg = document.getElementById("profileImg");

profileImg.addEventListener("click", function () {
  document.getElementById("profileModalImg").src = this.src;

  const modal = new bootstrap.Modal(document.getElementById("profileModal"));
  modal.show();
});
