document.querySelectorAll(".portfolio-img").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById("modalImage").src = this.dataset.img;
  });
});
