const smoothScroll = () => {
  const navBar = document.querySelector(".header__menu");
  const links = navBar.querySelectorAll(".menu__link");

  const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;

      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector("header").offsetHeight;

        if (iconMenu.classList.contains("_active")) {
          document.body.classList.remove("_lock");
          iconMenu.classList.remove("_active");
          menuBody.classList.remove("_active");
        } //удаляет класс при клике на одну из ссылок меню

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.defaultPrevented();
      }
    }
  }
};
smoothScroll();
