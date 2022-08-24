const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".menu-mobile");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("opened");
});

window.onscroll = () => {
    if (document.documentElement.scrollTop > 80) {
        header.classList.add("small-header");
    } else {
        header.classList.remove("small-header");
    }
};
