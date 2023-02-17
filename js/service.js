const addButtonServiceClickHandler = () => {
  const btnService = document.querySelectorAll(".service__button");
  const cards = document.querySelectorAll(".service__card");

  btnService.forEach((btnS) => {
    btnS.addEventListener("click", (elem) => {
      let count = 0;
      const length = btnService.length - 1;
      const textTarget = elem.target.id;

      btnService.forEach((n) => {
        if (n.classList.contains("service__button_colored")) {
          count++;
        }
      });
      if (count === length) {
        btnS.classList.remove("service__button_colored");
        cards.forEach((card) => {
          if (
            !elem.target.classList.contains("service__button_colored") &&
            card.classList.contains(textTarget)
          ) {
            card.classList.add("blur");
          }
        });
        return;
      }
      btnS.classList.toggle("service__button_colored");
      cards.forEach((card) => {
        if (count === 0 && !card.classList.contains(textTarget)) {
          card.classList.add("blur");
        } else if (!elem.target.classList.contains("service__button_colored")) {
          card.classList.remove("blur");
        } else if (
          elem.target.classList.contains("service__button_colored") &&
          card.classList.contains(textTarget)
        ) {
          card.classList.remove("blur");
        }
      });
    });
  });
};
addButtonServiceClickHandler();
