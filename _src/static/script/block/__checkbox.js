
if (document.querySelector(".form__checkbox-input")) {
  const chbox = document.querySelector(".form__checkbox-input");
  const btn = document.querySelector(".popup__btn");

  chbox.addEventListener('change', () => {


    if (btn.hasAttribute("disabled")) {
      btn.removeAttribute("disabled")

    } else {
      btn.setAttribute("disabled", "disabled")
    }
  })
}
