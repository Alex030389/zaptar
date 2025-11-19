const rechargeMethod = document.querySelector('[data-recharge-method]');

if (rechargeMethod) {
  const items = [...rechargeMethod.querySelectorAll('[data-select-value]')];
  const inputWrapper = document.querySelector('[data-input-tail]');
  const input = document.querySelector('[data-input-tail] input');
  const btnReset = document.querySelector('[data-recharge-reset]');
  const btnSubmit = document.querySelector('[data-recharge-submit]');

  items.forEach(i => {
    i.addEventListener('click', () => {
      if (i.classList.contains('select__item--selected')) {
        inputWrapper.classList.remove('form-input-tail--disabled');
        inputWrapper.focus();
        btnReset.removeAttribute('disabled');
        btnSubmit.classList.remove('btn--disabled');
      }
    })
  });

  btnReset.addEventListener('click', () => {
    items.forEach(i => {
        if (i.classList.contains('select__item--selected')) {
          i.classList.remove('select__item--selected')
          inputWrapper.classList.add('form-input-tail--disabled');
          input.value = '';
          btnReset.setAttribute('disabled', true);
          btnSubmit.classList.add('btn--disabled');
        }
    });
  })
}
