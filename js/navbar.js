// Submenu
const collapsePorto = document.getElementById("portfolioMobile");
const collapsePhoto = document.getElementById("photoMobile");
const collapseDesign = document.getElementById("designMobile");

const portoIcon = document.querySelector(".porto-icon");
const photoIcon = document.querySelector(".photo-icon");
const designIcon = document.querySelector(
  "a[href='#designMobile'] .design-icon",
);

// PORTFOLIO
collapsePorto.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapsePorto) return;
  portoIcon.classList.add("rotate-100");
});

collapsePorto.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapsePorto) return;
  portoIcon.classList.remove("rotate-100");
});

// PHOTOGRAPHY
collapsePhoto.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapsePhoto) return;
  photoIcon.classList.add("rotate-100");
});

collapsePhoto.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapsePhoto) return;
  photoIcon.classList.remove("rotate-100");
});

// DESIGN
collapseDesign.addEventListener("show.bs.collapse", (e) => {
  if (e.target !== collapseDesign) return;
  designIcon.classList.add("rotate-100");
});

collapseDesign.addEventListener("hide.bs.collapse", (e) => {
  if (e.target !== collapseDesign) return;
  designIcon.classList.remove("rotate-100");
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
