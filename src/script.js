document.addEventListener("click", (event) => {
  // console.log(event.target)
   if (
    event.target.classList.contains("header__button-headen-menu") &&
    document
      .querySelector(".header__menu")
      .classList.contains("header__menu--disactive")
  ) {
    document
      .querySelector(".header__menu")
      ?.classList.add("header__menu--active");
    document
      .querySelector(".header__menu")
      ?.classList.remove("header__menu--disactive");
    document
      .querySelector(".header__button-headen-menu")
      ?.classList.add("button-headen-menu--cross");
    document
      .querySelector(".header__button-headen-menu")
      ?.classList.remove("button-headen-menu--lines");
  } else if (!event.target.classList.contains("header__menu-marker")) {
    document
      .querySelector(".header__menu")
      ?.classList.add("header__menu--disactive");
    document
      .querySelector(".header__menu")
      ?.classList.remove("header__menu--active");
    document
      .querySelector(".header__button-headen-menu")
      ?.classList.add("button-headen-menu--lines");
    document
      .querySelector(".header__button-headen-menu")
      ?.classList.remove("button-headen-menu--cross");
  }
});
