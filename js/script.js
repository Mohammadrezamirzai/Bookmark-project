const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panels");
const panel1 = document.getElementById("panel-1");
const panel2 = document.getElementById("panel-2");
const panel3 = document.getElementById("panel-3");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

//Mobile menu
function showMobileMenu() {
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");
}
menuBtn.addEventListener("click", showMobileMenu);

tabs.forEach((tab) => tab.addEventListener("click", ontabclick));

function ontabclick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });
  panels.forEach((panel) => panel.classList.add("hidden"));

  e.target.classList.add("border-softRed", "border-b-4");

  const classTarget = e.target.getAttribute("data-target");

  if (classTarget === `panel-1`) {
    panel1.classList.remove("hidden");
  } else if (classTarget === `panel-2`) {
    panel2.classList.remove("hidden");
  } else if (classTarget === `panel-3`) {
    panel3.classList.remove("hidden");
  }
}
