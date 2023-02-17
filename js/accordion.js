const accordionButton = document.querySelector(".accordion__button");
const cityList = document.querySelector(".city__list");
const cityItem = document.querySelectorAll(".city__item");
const accordionTitle = document.querySelector(".accordion__title");
const cityCard = document.querySelectorAll(".city__card");
const cityName = document.querySelectorAll(".city__name");
const accordionArrow = document.querySelectorAll(".accordion__arrow");
const selectButton = document.querySelector(".select__button");
const contactsContainer = document.querySelector(".contacts__container");

selectButton.addEventListener("click", () => {
  accordionButton.classList.remove("accordion__button");
  accordionButton.classList.add("click__button");
  cityList.classList.remove("hidden");
  cityList.classList.add("city__list");
  selectButton.classList.add("_active");
  cityCard.forEach((city) => {
    city.classList.add("hidden");
  });
});

cityItem.forEach((item) => {
  item.addEventListener("click", () => {
    accordionTitle.innerText = item.textContent;
    cityList.classList.add("hidden");
    cityList.classList.remove("city__list");
    selectButton.classList.remove("_active");
  });
});

cityItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    nameCity = e.target.textContent;

    cityCard.forEach((item) => {
      if (nameCity == item.id) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
