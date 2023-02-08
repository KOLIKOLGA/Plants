const spanBurger = () => {
  const body = document.querySelector("body");
  const burger = document.querySelector(".header__menu .menu__icon");
  const menuMobile = document.querySelector(".menu__body");
  const menuList = document.querySelector(".menu__list");
  const navBar = document.querySelector(".header__menu");
  const links = navBar.querySelectorAll(".menu__link");
  const overlay = document.querySelector(".overlay");
  const headerWrapper = document.querySelector(".header__wrapper");

  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menuMobile.classList.toggle("_active");
    menuList.classList.toggle("_active");
    overlay.classList.toggle("_active");
    body.classList.toggle("_lock");
    headerWrapper.classList.toggle("_active");
    //headerWrapper.classList.remove("header__wrapper");
  });
  links.forEach((e) => {
    e.addEventListener("click", () => {
      burger.classList.toggle("_active");
      menuMobile.classList.toggle("_active");
      menuList.classList.toggle("_active");
      body.classList.remove("_lock");
      overlay.classList.remove("_active");
    });
  });
  overlay.addEventListener("click", (e) => {
    burger.classList.toggle("_active");
    menuMobile.classList.toggle("_active");
    menuList.classList.toggle("_active");
    body.classList.remove("_lock");
    overlay.classList.remove("_active");
    //headerWrapper.classList.remove("_active");
    //headerWrapper.classList.add("header__wrapper");
  });
};
spanBurger();
