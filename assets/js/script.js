const toggleNavbar = () => {
  document.querySelector('.navbar').classList.toggle('show');
};

window.addEventListener('load', () => {
  document.querySelector('.bars').addEventListener('click', () => {
    toggleNavbar();
  });

  const menuBtn = document.querySelectorAll('.nav-link a');
  Array.from(menuBtn).forEach((element) => {
    element.addEventListener('click', () => {
      toggleNavbar();
    });
  });
})
