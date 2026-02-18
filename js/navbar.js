// Submenu
const collapsePorto = document.getElementById("portfolioMobile");
const collapsePhoto = document.getElementById("photoMobile");
const collapseDesign = document.getElementById("designMobile");

const portoIcon = document.querySelector(".porto-icon");
const photoIcon = document.querySelector(".photo-icon");
const designIcon = document.querySelector(".design-icon");

// PORTFOLIO
collapsePorto.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapsePorto) return;
  portoIcon.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
});

collapsePorto.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapsePorto) return;
  portoIcon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
});

// PHOTOGRAPHY
collapsePhoto.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapsePhoto) return;
  photoIcon.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
});

collapsePhoto.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapsePhoto) return;
  photoIcon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
});

// DESIGN
collapseDesign.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapseDesign) return;
  designIcon.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
});

collapseDesign.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapseDesign) return;
  designIcon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
});

//
const navCollapse = document.getElementById("navbarNav");
const submenuLinks = document.querySelectorAll("#photoMobile a");
const designLinks = document.querySelectorAll("#designMobile a");

submenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});

designLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});
