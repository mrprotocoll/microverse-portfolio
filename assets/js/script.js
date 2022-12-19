const toggleNavbar = () => {
  document.querySelector(".navbar").classList.toggle("show");
};
document.querySelector(".bars").addEventListener("click", function () {
  toggleNavbar();
});

const menuBtn = document.querySelectorAll(".nav-link a");
const menuArr = Array.from(menuBtn);
menuArr.forEach((element) => {
  element.addEventListener("click", function () {
    toggleNavbar();
  });
});
