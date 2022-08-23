const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".menu-mobile");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("opened");
});
