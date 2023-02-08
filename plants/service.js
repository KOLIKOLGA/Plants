window.onload = function () {
  addButtonServiceClickHandler();
};

const addButtonServiceClickHandler = () => {
  const button = document.querySelectorAll(".button");
  const serviceCard = document.querySelectorAll(".service__card");

  const activeElems1 = [];

  function activeElemClick1() {
    let index = activeElems1.indexOf(this);
    if (index >= 0) {
      // Элемент был активным
      console.log(this.id);
      this.classList.remove("service__button_colored");
      serviceCard.forEach((item) => {
        let cardTitle = item.lastElementChild.firstElementChild.innerText;
        if (cardTitle == this.id) {
          item.classList.add("blur");
        }
      });
      activeElems1.splice(index, 1);
    } else if (activeElems1.length < 2) {
      // Элемент не был активным и можно добавить
      this.classList.add("service__button_colored");

      activeElems1.push(this);
      serviceCard.forEach((item) => {
        let cardTitle = item.lastElementChild.firstElementChild.innerText;
        if (cardTitle == this.id) {
          item.classList.remove("blur");
        }
      });
    }
  }
  for (let e of button) {
    e.addEventListener(`click`, activeElemClick1);
  }
};
