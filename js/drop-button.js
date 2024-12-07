const dropButtons = () => {
  const pricesItemBlock = document.querySelectorAll(".prices__item_block"); //
  const priceItemHeader = document.querySelectorAll(".price__item_header"); //
  const dropButton = document.querySelectorAll(".drop__button"); //
  const pricesItems = document.querySelector(".prices__items");
  // const priceItemMain = document.querySelectorAll(".price__item_main");
  // let pricesName;

  // priceItemHeader.forEach((e) => {
  //   itemText = e.outerText;
  //   console.log(itemText);
  // });

  // function selectPricesItem() {
  //   priceItemHeader.forEach((item) => {
  //     item.addEventListener("click", priceItemMainSelect);
  //   });
  // }
  // selectPricesItem();

  // function priceItemMainSelect() {
  //   priceItemHeader.forEach((item) => {
  //     item.classList.remove("_active");
  //   });
  //   this.classList.add("_active");
  //   pricesName = this.getAttribute("data-price-name");
  //   selectPricesContent(pricesName);
  //   selectDropButton(pricesName);
  // }

  // function selectPricesContent(pricesName) {
  //   pricesItemBlock.forEach((item) => {
  //     item.classList.contains(pricesName)
  //       ? item.classList.add("_active")
  //       : item.classList.remove("_active");
  //   });
  //   console.log(pricesName);
  //   // if (pricesName === pricesName) {
  //   //   item.classList.remove("_active");
  //   // }
  // }
  // function selectDropButton() {
  //   dropButton.forEach((item) => {
  //     item.classList.contains(pricesName)
  //       ? item.classList.add("_active")
  //       : item.classList.remove("_active");
  //   });
  // }

  dropButton.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", () => {
      let currentBtn = item;
      let tabId = currentBtn.parentNode;
      let block = tabId.nextElementSibling;

      if (currentBtn.classList.contains("_active")) {
        currentBtn.classList.remove("_active");
        currentBtn.parentNode.classList.remove("_active");
        block.classList.remove("_active");
      } else if (!currentBtn.classList.contains("_active")) {
        dropButton.forEach((item) => {
          item.classList.remove("_active");
        });
        priceItemHeader.forEach((item) => {
          item.classList.remove("_active");
        });
        pricesItemBlock.forEach((item) => {
          item.classList.remove("_active");
        });
        currentBtn.classList.add("_active");
        tabId.classList.add("_active");
        block.classList.add("_active");
      }
    });
  }
};
dropButtons();
