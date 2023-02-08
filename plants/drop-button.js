const dropButtons = () => {
  const pricesItemBlock = document.querySelectorAll(".prices__item_block");
  const priceItemHeader = document.querySelectorAll(".price__item_header");
  const dropButton = document.querySelectorAll(".drop__button");
  const pricesItems = document.querySelector(".prices__items");
  const priceItemMain = document.querySelectorAll(".price__item_main");
  let pricesName;

  priceItemHeader.forEach((e) => {
    itemText = e.outerText;
    console.log(itemText);
  });

  function selectPricesItem() {
    priceItemHeader.forEach((item) => {
      item.addEventListener("click", priceItemMainSelect);
    });
  }
  selectPricesItem();

  function priceItemMainSelect() {
    priceItemHeader.forEach((item) => {
      item.classList.remove("_active");
    });
    this.classList.add("_active");
    pricesName = this.getAttribute("data-price-name");
    selectPricesContent(pricesName);
    selectDropButton(pricesName);
  }

  function selectPricesContent(pricesName) {
    pricesItemBlock.forEach((item) => {
      item.classList.contains(pricesName)
        ? item.classList.add("_active")
        : item.classList.remove("_active");
    });
  }
  function selectDropButton() {
    dropButton.forEach((item) => {
      item.classList.contains(pricesName)
        ? item.classList.add("_active")
        : item.classList.remove("_active");
    });
  }
};
dropButtons();
