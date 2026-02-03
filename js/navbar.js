// Submenu
const collapsePorto = document.getElementById("portfolioMobile");
const collapsePhoto = document.getElementById("photoMobile");

const portoIcon = document.querySelector(".porto-icon");
const photoIcon = document.querySelector(".photo-icon");

collapsePorto.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapsePorto) return;
  portoIcon.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
});

collapsePorto.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapsePorto) return;
  portoIcon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
});

collapsePhoto.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapsePhoto) return;
  photoIcon.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
});

collapsePhoto.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapsePhoto) return;
  photoIcon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
});

//
const navCollapse = document.getElementById("navbarNav");
const submenuLinks = document.querySelectorAll("#photoMobile a");

submenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});
